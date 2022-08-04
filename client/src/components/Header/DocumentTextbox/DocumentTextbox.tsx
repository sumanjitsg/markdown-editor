import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import { RootState } from "store";
import { updateDocumentName } from "features/metadataSlice";

function DocumentTextbox() {
  // todo: documentMap[id] can be undefined for current doc id
  const { documentName } = useSelector(
    (state: RootState) =>
      state.metadata.documentMap[state.metadata.activeDocumentId]
  );
  const dispatch = useDispatch();

  const [textboxValue, setTextboxValue] = useState("");

  useEffect(() => {
    setTextboxValue((textboxValue) => documentName ?? textboxValue);
  }, [documentName]);

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
          value={textboxValue}
          className="bg-gray-800 mt-1 text-15px leading-tight caret-orange-400 hover:border-b focus:outline-none focus:border-b"
          onChange={(e) => {
            setTextboxValue(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              dispatch(
                updateDocumentName({
                  documentName: textboxValue,
                })
              );
            }
          }}
        />
      </label>
    </div>
  );
}
export default DocumentTextbox;
