import { ComponentPropsWithoutRef } from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import { deleteActiveDocument } from "components/metadataSlice";
import styles from "styles/components/Header/IconDelete.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

function DeleteButton() {
  // todo: documentMap[id] can be undefined for current doc id
  const dispatch = useDispatch();

  return (
    <IconButton
      aria-label="Delete active document"
      onClick={() => {
        dispatch(deleteActiveDocument());
      }}
    >
      {<IconDelete className={styles.iconDelete} />}
    </IconButton>
  );
}

function IconButton({ ...props }: ButtonProps) {
  return (
    <button className="w-10 h-10 flex items-center justify-center" {...props}>
      {props.children}
    </button>
  );
}

export default DeleteButton;
