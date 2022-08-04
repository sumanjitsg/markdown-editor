import { ComponentPropsWithoutRef, ReactElement } from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import { deleteActiveDocument } from "components/metadataSlice";
import styles from "styles/components/Header/IconDelete.module.scss";

function DeleteButton() {
  // todo: documentMap[id] can be undefined for current doc id
  const dispatch = useDispatch();

  return (
    <IconButtonElement
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

function IconButtonElement({
  children,
  ...buttonElementProps
}: ButtonElementProps) {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center"
      {...buttonElementProps}
    >
      {children}
    </button>
  );
}

export default DeleteButton;
