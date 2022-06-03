import { useState } from "react";
import { useRemark } from "react-remark";

import Markdown from "./Markdown";
import Preview from "./Preview";
import ShowPreviewButton from "./ShowPreviewButton";
import HidePreviewButton from "./HidePreviewButton";
import Splitter from "./Splitter";

function Workspace() {
  const [markdownText, setMarkdownText] = useState("");
  const [previewContent, setPreviewContent] = useRemark();

  const [showPreview, setShowPreview] = useState(false);

  return (
    <main className="flex grow">
      {/* Markdown */}
      <div className={`${showPreview === true ? "w-0" : "w-full lg:w-1/2"}`}>
        <Markdown
          viewToggler={
            <div className="flex flex-col items-center justify-center lg:hidden">
              <ShowPreviewButton onClickHandler={() => setShowPreview(true)} />
            </div>
          }
          content={markdownText}
          onChangeHandler={(content: string) => {
            setMarkdownText(content);
            setPreviewContent(content);
          }}
        />
      </div>

      {/* Splitter */}
      {!showPreview && (
        <div className="hidden lg:block">
          <Splitter />
        </div>
      )}

      {/* Preview */}
      <div className={`${showPreview === true ? "w-full" : "w-0 lg:w-1/2"}`}>
        <Preview
          viewToggler={
            <div className="">
              <div
                className={`hidden ${
                  showPreview === false
                    ? "lg:flex lg:flex-col lg:items-center lg:justify-center"
                    : ""
                }`}
              >
                <ShowPreviewButton
                  onClickHandler={() => setShowPreview(true)}
                />
              </div>

              <div
                className={`flex flex-col items-center justify-center ${
                  showPreview === false ? "lg:hidden" : ""
                }`}
              >
                <HidePreviewButton
                  onClickHandler={() => setShowPreview(false)}
                />
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
