import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRemark } from "react-remark";

import Header from "components/Workspace/Header";

import styles from "styles/components/_workspace.module.scss";

import { RootState } from "store";

// Types
type Props = {
  viewToggler: ReactElement;
};

function Preview({ viewToggler }: Props) {
  const { documentContent } = useSelector((state: RootState) => {
    return {
      documentContent:
        state.metadata.documentContentMap[state.metadata.activeDocumentId],
    };
  });

  const [previewContent, setPreviewContent] = useRemark();

  useEffect(() => {
    setPreviewContent(documentContent);
  }, [documentContent]);

  return (
    <section className="flex flex-col min-h-full">
      <Header headingText="Preview" viewToggler={viewToggler} />

      <div className={`grow scrollbar-stable ${styles.workspace}`}>
        {previewContent}
      </div>
    </section>
  );
}

export default Preview;
