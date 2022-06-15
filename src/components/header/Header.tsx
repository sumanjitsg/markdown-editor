import { ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import SaveButton from "components/shared/SaveButton";
import { RootState } from "store";
import { updateDocumentMetadata } from "features/metadataSlice";

// Types
type Props = {
  sidebarToggler: ReactElement;
};

// Component
function Header({ sidebarToggler }: Props) {
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

  const onChangeHandler = (text: string) => {
    setDocumentName(text);
  };

  return (
    <header className="flex">
      {sidebarToggler}

      <div className="grow pl-6 pr-2 flex items-center justify-between bg-gray-800">
        {/* active document name */}
        <div className="flex items-center gap-x-4">
          <IconDocument />
          <div>
            <h3 className="font-light text-13px leading-tight text-gray-500 hidden lg:block">
              Document Name
            </h3>
            {/* todo: add sr-only label */}
            <label>
              <input
                type="text"
                value={documentName}
                className="bg-gray-800 mt-1 text-15px leading-tight focus:outline-none focus:border-b"
                onChange={(e) => {
                  onChangeHandler(e.currentTarget.value);
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
        </div>

        <div className="flex items-center gap-x-6">
          {/* delete document button */}
          <button>
            <IconDelete />
            {/* save document button */}
          </button>
          <SaveButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
