import { useDocumentStore } from '@/store/useDocumentStore';

import IconSave from '@/assets/images/icon-save.svg?react';

import styles from '@/assets/sass/components/Header/IconSave.module.scss';

function SaveButton() {
    const current = useDocumentStore(s => s.current);
    const name = useDocumentStore(s =>
        s.current ? s.documents[s.current]?.name : null
    );
    const content = useDocumentStore(s =>
        s.current ? s.documents[s.current]?.content : null
    );

    return (
        <button
            type="button"
            disabled={current === null}
            aria-label="Download active document"
            className={
                'w-10 h-10 flex items-center justify-center rounded bg-orange-400 hover:bg-orange-300 focus:bg-orange-300 disabled:bg-gray-600'
            }
            onClick={() => {
                const text = content ?? '';
                const blob = new Blob([text], { type: 'text/plain' });
                const anchor = document.createElement('a');
                anchor.download = name ?? 'untitled.md';
                anchor.href = window.URL.createObjectURL(blob);
                anchor.target = '_blank';
                anchor.style.display = 'none'; // just to be safe!
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);
            }}
        >
            <IconSave className={styles.iconSave} />
        </button>
    );
}
export default SaveButton;
