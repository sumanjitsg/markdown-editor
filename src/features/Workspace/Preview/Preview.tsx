import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRemark } from "react-remark";

import Header from "features/Workspace/Header";

import styles from "styles/components/Workspace/_preview.module.scss";

import { RootState } from "store";

// Types
type Props = {
  viewToggler: ReactElement;
};

function Preview({ viewToggler }: Props) {
  const documentContent = useSelector(
    (state: RootState) =>
      state.metadata.documentContentMap[state.metadata.activeDocumentId]
  );

  const [previewContent, setPreviewContent] = useRemark();

  useEffect(() => {
    setPreviewContent(documentContent);
  }, [setPreviewContent, documentContent]);

  return (
    <section className="flex flex-col min-h-full">
      <Header headingText="Preview" viewToggler={viewToggler} />

      <div
        className={`grow h-0 overflow-auto px-5 py-4 font-roboto-slab font-normal leading-[1.7] ${styles.previewContent}`}
      >
        {previewContent}
      </div>
    </section>
  );
}

export default Preview;
