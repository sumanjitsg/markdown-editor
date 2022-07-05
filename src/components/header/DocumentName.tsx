import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import { RootState } from "store";
import { updateDocumentMetadata } from "features/metadataSlice";

function DocumentName() {
  // todo: documentMap[id] can be undefined for current doc id
  const { documentId, documentMeta } = useSelector((state: RootState) => {
    return {
      documentId: state.metadata.activeDocumentId,
      documentMeta: state.metadata.documentMap[state.metadata.activeDocumentId],
    };
  });
  const dispatch = useDispatch();

  const [documentName, setDocumentName] = useState("");

  useEffect(() => {
    setDocumentName(
      (documentName) => documentMeta?.documentName ?? documentName
    );
  }, [documentMeta]);

  return (
    <div className="flex items-center gap-x-4">
      <IconDocument />
      <label>
        <div className="font-light text-13px leading-tight text-gray-500 sr-only lg:not-sr-only">
          Document Name
        </div>
        <input
          type="text"
          size={10}
          value={documentName}
          className="bg-gray-800 mt-1 text-15px leading-tight caret-orange-400 hover:border-b focus:outline-none focus:border-b"
          onChange={(e) => {
            setDocumentName(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              dispatch(
                updateDocumentMetadata({
                  id: documentId,
                  data: { ...documentMeta, documentName: documentName },
                })
              );
            }
          }}
        />
      </label>
    </div>
  );
}
export default DocumentName;
