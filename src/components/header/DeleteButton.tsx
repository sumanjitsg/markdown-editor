import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import { RootState } from "store";
import { deleteDocument } from "features/metadataSlice";
import styles from "styles/components/Header/IconDelete.module.scss";

function DeleteButton() {
  // todo: documentMap[id] can be undefined for current doc id
  const { documentId } = useSelector((state: RootState) => {
    return {
      documentId: state.metadata.activeDocumentId,
    };
  });
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Delete active document"
      className="w-10 h-10 flex items-center justify-center"
      onClick={() => {
        dispatch(deleteDocument({ id: documentId }));
      }}
    >
      <IconDelete className={styles.iconDelete} />
    </button>
  );
}
export default DeleteButton;
