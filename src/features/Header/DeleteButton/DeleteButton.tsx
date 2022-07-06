import { useDispatch } from "react-redux";

import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import { deleteActiveDocument } from "features/metadataSlice";
import styles from "styles/components/Header/IconDelete.module.scss";

function DeleteButton() {
  // todo: documentMap[id] can be undefined for current doc id
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Delete active document"
      className="w-10 h-10 flex items-center justify-center"
      onClick={() => {
        dispatch(deleteActiveDocument());
      }}
    >
      <IconDelete className={styles.iconDelete} />
    </button>
  );
}
export default DeleteButton;
