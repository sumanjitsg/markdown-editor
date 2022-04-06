import React from "react";

// Hooks
import { useState } from "react";
import { useRemark } from 'react-remark';

// Components
import EditorSection from "./EditorSection";
import PreviewSection from "./PreviewSection";

// Styles
import styles from './Workspace.module.css';

// Type Definitons
type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>;

function Workspace() {
  const [markdownText, setMarkdownText] = useState('')
  const [previewContent, setPreviewContent] = useRemark();

  const handleTextChange: TextAreaChangeEventHandler
    = ({ target }) => {
      setMarkdownText(target.value);
      setPreviewContent(markdownText);
    }

  return (
    <main className={styles.container}>
      <EditorSection onChangeHandler={handleTextChange} />

      <div className={styles.sectionSeparator}></div>

      <PreviewSection>
        {previewContent}
      </PreviewSection>
    </main>
  )
}

export default Workspace