import { create } from 'zustand';
import { seedDocuments } from '@/data';

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

const [untitled, welcome] = seedDocuments.map(seed => ({
    id: crypto.randomUUID(),
    name: seed.name,
    created: seed.created,
    content: seed.content,
}));

export const useDocumentStore = create<DocumentStore>()((set, get) => ({
    documents: {
        [untitled.id]: untitled,
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

    update: fields => {
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
}));
