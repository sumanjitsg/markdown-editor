import { ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Workspace/Header";

import styles from "styles/components/_workspace.module.scss";
import { RootState } from "store";
import { updateDocumentContent } from "features/metadataSlice";

// Types
type Props = {
  viewToggler: ReactElement;
};

function Markdown({ viewToggler }: Props) {
  const { documentId, documentContent } = useSelector((state: RootState) => {
    return {
      documentId: state.metadata.activeDocumentId,
      documentContent:
        state.metadata.documentContentMap[state.metadata.activeDocumentId],
    };
  });
  const dispatch = useDispatch();

  const [markdownText, setMarkdownText] = useState(documentContent);

  useEffect(() => {
    dispatch(
      updateDocumentContent({
        id: documentId,
        content: markdownText,
      })
    );
  }, [markdownText]);

  return (
    <section className={"flex flex-col min-h-full"}>
      <Header headingText="Markdown" viewToggler={viewToggler} />

      <textarea
        name="markdown-text"
        className={`w-full grow outline-none resize-none p-4 font-roboto-mono leading-relaxed scrollbar-stable ${styles.workspace}`}
        spellCheck="false"
        value={markdownText}
        onChange={({ target }) => {
          setMarkdownText(target.value);
        }}
      ></textarea>
    </section>
  );
}

export default Markdown;
