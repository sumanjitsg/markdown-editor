import React from "react";

// Hooks
import { useState } from "react";
import { useRemark } from "react-remark";

// Components
import EditorSection from "./EditorSection";
import PreviewSection from "./PreviewSection";
import { ReactComponent as IconShowPreview } from "assets/icon-show-preview.svg";
import { ReactComponent as IconHidePreview } from "assets/icon-hide-preview.svg";
import VerticalSplitter from "../shared/VerticalSplitter";

// Types
type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>;

function Workspace() {
  const [markdownText, setMarkdownText] = useState("");
  const [previewContent, setPreviewContent] = useRemark();

  const handleTextChange: TextAreaChangeEventHandler = ({ target }) => {
    setMarkdownText(target.value);
    setPreviewContent(markdownText);
  };

  const [showPreview, setShowPreview] = useState(false);

  const ShowPreview = () => {
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

  const HidePreview = () => {
    return (
      <button
        className="relative"
        onClick={() => {
          setShowPreview(false);
        }}
      >
        <IconHidePreview />
      </button>
    );
  };

  return (
    <section className="flex grow">
      <EditorSection
        showPreviewState={showPreview}
        showPreview={
          <div className="lg:hidden">
            <ShowPreview />
          </div>
        }
        onChangeHandler={handleTextChange}
      />
      {!showPreview && <VerticalSplitter />}
      <PreviewSection
        showPreviewState={showPreview}
        hidePreview={
          <div>
            <div className={`hidden ${!showPreview ? "lg:block" : ""}`}>
              <ShowPreview />
            </div>
            <div className={`${!showPreview ? "lg:hidden" : ""}`}>
              <HidePreview />
            </div>
          </div>
        }
      >
        {previewContent}
      </PreviewSection>
    </section>
  );
}

export default Workspace;
