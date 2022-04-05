import React, { useState } from "react";
import { marked } from 'marked'

import TextEditor from "./TextEditor"
import TextPreview from "./TextPreview"

import styles from './Workspace.module.css'

function Workspace() {
  const [rawText, setRawText] = useState('');
  const [markedText, setMarkedText] = useState('');

  const handleTextChange = ({ target }: React.ChangeEvent<Element>) => {
    setRawText((target as HTMLTextAreaElement).value);
    setMarkedText(marked(rawText));
  }

  return (
    <main className={styles.container}>
      <TextEditor onChangeHandler={handleTextChange} />
      <div className={styles.separator}></div>
      <TextPreview HTMLText={markedText} />
    </main>
  )
}

export default Workspace