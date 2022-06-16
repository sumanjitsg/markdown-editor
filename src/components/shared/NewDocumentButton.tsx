import { useDispatch } from "react-redux";

import { createDocument } from "features/metadataSlice";

function NewDocumentButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="bg-orange-400 py-3 rounded min-w-full text-15px leading-tight text-center"
      onClick={() => {
        dispatch(createDocument());
      }}
    >
      + New Document
    </button>
  );
}
export default NewDocumentButton;
