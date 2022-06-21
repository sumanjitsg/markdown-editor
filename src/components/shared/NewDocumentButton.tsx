import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { createDocument } from "features/metadataSlice";

type Props = {
  focused?: boolean;
  tabbable?: boolean;
};

function NewDocumentButton({ focused = false, tabbable = true }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.focus();
    }
  }, [focused]);

  return (
    <button
      aria-label="Create new document"
      tabIndex={tabbable ? 0 : -1}
      className="bg-orange-400 py-3 rounded min-w-full text-15px leading-tight text-center"
      onClick={() => {
        dispatch(createDocument());
      }}
      ref={buttonRef}
    >
      + New Document
    </button>
  );
}
export default NewDocumentButton;
