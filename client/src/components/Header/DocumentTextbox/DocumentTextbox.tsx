import { useState, ComponentPropsWithoutRef, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import {
  updateDocumentName,
  selectDocumentMetadata,
  selectActiveDocumentId,
} from "components/documentsSlice";

function DocumentTextbox() {
  // todo: documentMap[id] can be undefined for current doc id
  const activeDocumentId = useSelector(selectActiveDocumentId);
  const { documentName } = useSelector(
    selectDocumentMetadata(activeDocumentId)
  );
  const dispatch = useDispatch();

  // todo: refactor ui state
  const [inputElementValue, setInputElementValue] = useState(documentName);

  return (
    <InputElement
      aria-label="Document Name"
      type="text"
      size={10}
      value={inputElementValue}
      onChange={(event) => {
        setInputElementValue(event.currentTarget.value);
      }}
      onKeyDown={(event) => {
        if (event.code === "Enter") {
          dispatch(
            updateDocumentName({
              documentName: event.target.value,
            })
          );
        }
      }}
      iconElement={<IconDocument />}
    />
  );
}

interface InputElementProps extends ComponentPropsWithoutRef<"input"> {
  iconElement?: ReactElement;
}

function InputElement({
  iconElement,
  ...inputElementProps
}: InputElementProps) {
  return (
    <div className="flex items-center gap-x-4">
      {iconElement}
      <label>
        <div className="font-light text-13px leading-tight text-gray-500 sr-only lg:not-sr-only">
          {inputElementProps["aria-label"]}
        </div>
        <input
          {...inputElementProps}
          className="bg-gray-800 mt-1 text-15px leading-tight caret-orange-400 hover:border-b focus:outline-none focus:border-b"
        />
      </label>
    </div>
  );
}

export default DocumentTextbox;
