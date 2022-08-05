import { ReactElement, useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useRemark } from "react-remark";

import Header from "components/Workspace/Header";

import styles from "styles/components/Workspace/_preview.module.scss";

import {
  selectDocumentContent,
  selectActiveDocumentId,
} from "store/documentsSlice";

// Types
type Props = {
  viewToggler: ReactElement;
};

function Preview({ viewToggler }: Props) {
  const activeDocumentId = useAppSelector(selectActiveDocumentId);
  const documentContent = useAppSelector(
    selectDocumentContent(activeDocumentId)
  );

  const [previewContent, setPreviewContent] = useRemark();

  useEffect(() => {
    setPreviewContent(documentContent);
  }, [setPreviewContent, documentContent]);

  return (
    <section className="flex flex-col min-h-full">
      <Header headingText="Preview" viewToggle={viewToggler} />

      <div
        className={`grow h-0 overflow-auto px-5 py-4 font-roboto-slab font-normal leading-[1.7] ${styles.previewContent}`}
      >
        {previewContent}
      </div>
    </section>
  );
}

export default Preview;