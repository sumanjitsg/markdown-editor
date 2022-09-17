import { ComponentPropsWithoutRef } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import {
  deleteActiveDocument,
  selectActiveDocumentId,
} from "store/documentsSlice";
import styles from "styles/components/Header/IconDelete.module.scss";

function DeleteButton() {
  // todo: documentMap[id] can be undefined for current doc id
  const activeId = useAppSelector(selectActiveDocumentId);
  const dispatch = useAppDispatch();

  return (
    <IconButtonElement
      disabled={activeId === -1}
      aria-label="Delete active document"
      onClick={() => {
        dispatch(deleteActiveDocument());
      }}
    >
      {<IconDelete className={styles.iconDelete} />}
    </IconButtonElement>
  );
}

interface ButtonElementProps extends ComponentPropsWithoutRef<"button"> {}

function IconButtonElement({ ...buttonElementProps }: ButtonElementProps) {
  return (
    <button
      {...buttonElementProps}
      className="w-10 h-10 flex items-center justify-center"
    ></button>
  );
}

export default DeleteButton;
