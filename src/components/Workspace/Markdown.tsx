import { ReactElement, useState, ComponentPropsWithoutRef } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";

import Header from "components/Workspace/Header";

import styles from "styles/components/_workspace.module.scss";
import {
  selectDocumentContent,
  selectActiveDocumentId,
  updateDocumentContent,
} from "store/documentsSlice";

// Types
type Props = {
  viewToggler: ReactElement;
};

function Markdown({ viewToggler }: Props) {
  const activeDocumentId = useAppSelector(selectActiveDocumentId);
  const documentContent = useAppSelector(
    selectDocumentContent(activeDocumentId)
  );
  const dispatch = useAppDispatch();

  const [textAreaValue, setTextAreaValue] = useState(documentContent);

  return (
    <section className={"flex flex-col min-h-full"}>
      <Header headingText="Markdown" viewToggle={viewToggler} />
      <TextAreaElement
        aria-label="Markdown editor"
        spellCheck="false"
        value={textAreaValue}
        onChange={(event) => {
          setTextAreaValue(event.currentTarget.value);
          dispatch(
            updateDocumentContent({
              content: event.target.value,
            })
          );
        }}
      />
    </section>
  );
}

interface TextAreaElementProps extends ComponentPropsWithoutRef<"textarea"> {}

function TextAreaElement({ ...textAreaElementProps }: TextAreaElementProps) {
  return (
    <textarea
      {...textAreaElementProps}
      className={`w-full grow outline-none resize-none p-4 font-roboto-mono leading-relaxed ${styles.workspace}`}
    ></textarea>
  );
}

export default Markdown;
