import React from "react";

// Hooks
import { useState } from "react";
import { useRemark } from 'react-remark';

// Components
import EditorSection from "./EditorSection";
import PreviewSection from "./PreviewSection";
import VerticalSplitter from "../shared/VerticalSplitter";

// Styles
import styles from './Workspace.module.css';

// Types
type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>;

function Workspace() {
  const [ markdownText, setMarkdownText ] = useState( '' );
  const [ previewContent, setPreviewContent ] = useRemark();

  const handleTextChange: TextAreaChangeEventHandler
    = ( { target } ) => {
      setMarkdownText( target.value );
      setPreviewContent( markdownText );
    };

  return (
    <main className={styles.container}>
      <EditorSection onChangeHandler={handleTextChange} />
      {/* <VerticalSplitter />
      <PreviewSection>{previewContent}</PreviewSection> */}
    </main>
  );
}

export default Workspace;