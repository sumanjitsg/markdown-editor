import { seedDocuments } from '@/data';
import * as idb from 'idb-keyval';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Document = {
    id: string;
    name: string;
    created: Date;
    content: string;
};

type DocumentStore = {
    documents: { [id: string]: Document };
    current: string | null;
    create: () => void;
    update: (fields: { name?: string; content?: string }) => void;
    remove: () => void;
    open: (id: string) => void;
};

// Storage adapter — degrades gracefully when IndexedDB unavailable (e.g. jsdom, private browsing)
const hasIdb = typeof indexedDB !== 'undefined';

const idbStorage = {
    getItem: async (name: string) => {
        if (!hasIdb) return null;
        try {
            return (await idb.get(name)) ?? null;
        } catch (e) {
            console.error('idb.get failed', e);
            return null;
        }
    },
    setItem: async (name: string, value: unknown) => {
        if (!hasIdb) return;
        try {
            await idb.set(name, value);
        } catch (e) {
            console.error('idb.set failed', e);
        }
    },
    removeItem: async (name: string) => {
        if (!hasIdb) return;
        try {
            await idb.del(name);
        } catch (e) {
            console.error('idb.del failed', e);
        }
    },
};

const [welcome] = seedDocuments;

export const useDocumentStore = create<DocumentStore>()(
    persist(
        (set, get) => ({
            documents: {
                [welcome.id]: welcome,
            },
            current: welcome.id,

            create: () => {
                const id = crypto.randomUUID();
                set(state => ({
                    documents: {
                        [id]: {
                            id,
                            name: 'untitled-document.md',
                            created: new Date(),
                            content: '',
                        },
                        ...state.documents,
                    },
                    current: id,
                }));
            },

            update: (fields: { name?: string; content?: string }) => {
                const { current, documents } = get();
                if (current === null) return;
                set({
                    documents: {
                        ...documents,
                        [current]: { ...documents[current], ...fields },
                    },
                });
            },

            remove: () => {
                const { current, documents } = get();
                if (current === null) return;
                const { [current]: _, ...remaining } = documents;
                const ids = Object.keys(remaining);
                set({ documents: remaining, current: ids[0] ?? null });
            },

            open: (id: string) => {
                set({ current: id });
            },
        }),
        {
            name: 'markdown-editor:documents',
            storage: idbStorage,
            partialize: state => ({
                documents: state.documents,
                current: state.current,
            }),
        }
    )
);
