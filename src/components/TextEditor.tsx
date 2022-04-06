import React from 'react'

// Styles
import styles from './Workspace.module.css'

// Type Definitons
type Props = {
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>
}

function TextEditor({ onChangeHandler }: Props) {
  return (
    <form className={styles.textEditor}>
      <textarea name='text-editor' className={styles.textArea} spellCheck='false' onChange={onChangeHandler}></textarea >
    </form>
  )
}

export default TextEditor