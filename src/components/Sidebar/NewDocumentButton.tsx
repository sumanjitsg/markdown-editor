import { useRef, useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';

import { createDocument } from '@/store/documentsSlice';

type Props = {
    focused?: boolean;
};

function NewDocumentButton({ focused = false }: Props) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // if ref.current updated to button dom node
        // from initial value of null
        if (buttonRef.current !== null) {
            buttonRef.current.focus();
        }
    }, [focused]);

    return (
        <button
            aria-label="Create new document"
            className="bg-orange-400 py-3 rounded min-w-full text-15px leading-tight text-center"
            onClick={() => {
                dispatch(createDocument());
            }}
            ref={buttonRef}
        >
            + New Document
        </button>
    );
}
export default NewDocumentButton;
