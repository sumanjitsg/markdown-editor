import { ReactElement, useState, ComponentPropsWithoutRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Workspace/Header";

import styles from "styles/components/_workspace.module.scss";
import {
  selectDocumentContent,
  selectActiveDocumentId,
  updateDocumentContent,
} from "components/documentsSlice";

// Types
type Props = {
  viewToggler: ReactElement;
};

function Markdown({ viewToggler }: Props) {
  const activeDocumentId = useSelector(selectActiveDocumentId);
  const documentContent = useSelector(selectDocumentContent(activeDocumentId));
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = useState(documentContent);

  return (
    <section className={"flex flex-col min-h-full"}>
      <Header headingText="Markdown" viewToggle={viewToggler} />
      <TextAreaElement
        aria-label="Markdown editor"
        spellCheck="false"
        onChange={(event) => {
          setTextAreaValue(event.currentTarget.value);
          dispatch(
            updateDocumentContent({
              content: event.target.value,
            })
          );
        }}
      >
        {textAreaValue}
      </TextAreaElement>
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
