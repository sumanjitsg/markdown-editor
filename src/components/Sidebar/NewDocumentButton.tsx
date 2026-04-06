import { useDocumentStore } from '@/store/useDocumentStore';
import { useEffect, useRef } from 'react';

type Props = {
    focused?: boolean;
};

function NewDocumentButton({ focused = false }: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const create = useDocumentStore(s => s.create);

    useEffect(() => {
        if (focused && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [focused]);

    return (
        <button
            type="button"
            aria-label="Create new document"
            className="bg-orange-400 py-3 rounded min-w-full text-15px leading-tight text-center"
            onClick={create}
            ref={buttonRef}
        >
            + New Document
        </button>
    );
}
export default NewDocumentButton;
