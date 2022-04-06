// Modules
import React, { ChangeEvent } from "react";

// Hooks
import { useRemark } from 'react-remark';

// Components
import TextEditor from "./TextEditor";
import TextPreview from "./TextPreview";

// Styles
import styles from './Workspace.module.css';

// Type Definitons
type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>;

function Workspace() {
  const [markdownText, setMarkdownText] = useRemark();

  const handleTextChange: TextAreaChangeEventHandler
    = ({ target }) => setMarkdownText(target.value)

  return (
    <main className={styles.workspace}>
      <TextEditor onChangeHandler={handleTextChange} />

      <div className={styles.separator}></div>

      <TextPreview>
        {markdownText}
      </TextPreview>
    </main>
  )
}

export default Workspace