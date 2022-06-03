import { useState } from "react";
import { useRemark } from "react-remark";

import Markdown from "components/workspace/Markdown";
import Preview from "components/workspace/Preview";
import { ReactComponent as IconShowPreview } from "assets/icon-show-preview.svg";
import { ReactComponent as IconHidePreview } from "assets/icon-hide-preview.svg";
import VerticalSplitter from "components/shared/VerticalSplitter";

function Workspace() {
  const [markdownText, setMarkdownText] = useState("");
  const [previewContent, setPreviewContent] = useRemark();

  const [showPreview, setShowPreview] = useState(false);

  const ShowPreviewButton = () => {
    return (
      <button
        onClick={() => {
          setShowPreview(true);
        }}
      >
        <IconShowPreview />
      </button>
    );
  };

  const HidePreviewButton = () => {
    return (
      <button
        onClick={() => {
          setShowPreview(false);
        }}
      >
        <IconHidePreview />
      </button>
    );
  };

  return (
    <main className="flex grow">
      <div className={`${showPreview === true ? "w-0" : "w-full lg:w-1/2"}`}>
        <Markdown
          viewToggler={
            <div className="lg:hidden">
              <ShowPreviewButton />
            </div>
          }
          content={markdownText}
          onChangeHandler={(content: string) => {
            setMarkdownText(content);
            setPreviewContent(content);
          }}
        />
      </div>

      {!showPreview && (
        <div className="hidden lg:block">
          <VerticalSplitter />
        </div>
      )}

      <div className={`${showPreview === true ? "w-full" : "w-0 lg:w-1/2"}`}>
        <Preview
          viewToggler={
            <div>
              <div
                className={`hidden ${showPreview === false ? "lg:block" : ""}`}
              >
                <ShowPreviewButton />
              </div>

              <div className={`${showPreview === false ? "lg:hidden" : ""}`}>
                <HidePreviewButton />
              </div>
            </div>
          }
          content={previewContent}
        />
      </div>
    </main>
  );
}

export default Workspace;
