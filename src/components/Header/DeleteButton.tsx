import { ComponentPropsWithoutRef } from 'react';
import { useDocumentStore } from '@/store/useDocumentStore';

import IconDelete from '@/assets/images/icon-delete.svg?react';
import styles from '@/assets/sass/components/Header/IconDelete.module.scss';

function DeleteButton() {
    const current = useDocumentStore(s => s.current);
    const remove = useDocumentStore(s => s.remove);

    return (
        <IconButtonElement
            disabled={current === null}
            aria-label="Delete active document"
            onClick={remove}
        >
            {<IconDelete className={styles.iconDelete} />}
        </IconButtonElement>
    );
}

interface ButtonElementProps extends ComponentPropsWithoutRef<'button'> {}

function IconButtonElement({ ...buttonElementProps }: ButtonElementProps) {
    return (
        <button
            {...buttonElementProps}
            className="w-10 h-10 flex items-center justify-center"
        ></button>
    );
}

export default DeleteButton;
