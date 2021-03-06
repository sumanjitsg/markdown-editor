import { ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "features/Workspace/Header";

import styles from "styles/components/_workspace.module.scss";
import { RootState } from "store";
import { updateDocumentContent } from "features/metadataSlice";

// Types
type Props = {
  viewToggler: ReactElement;
};

function Markdown({ viewToggler }: Props) {
  const documentContent = useSelector(
    (state: RootState) =>
      state.metadata.documentContentMap[state.metadata.activeDocumentId]
  );
  const dispatch = useDispatch();

  const [markdownText, setMarkdownText] = useState(documentContent);

  useEffect(() => {
    dispatch(
      updateDocumentContent({
        content: markdownText,
      })
    );
  }, [dispatch, markdownText]);

  return (
    <section className={"flex flex-col min-h-full"}>
      <Header headingText="Markdown" viewToggler={viewToggler} />

      <textarea
        aria-label="Markdown editor"
        className={`w-full grow outline-none resize-none p-4 font-roboto-mono leading-relaxed ${styles.workspace}`}
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
