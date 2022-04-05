import React from 'react'
import styles from './TextEditor.module.css'

type Props = {
  onChangeHandler: (e: React.ChangeEvent<Element>) => void
}

function TextEditor({ onChangeHandler }: Props) {
  return (
    <form className={styles.container}>
      <textarea name='text-editor' className={styles.textArea} spellCheck='false' onChange={onChangeHandler}></textarea >
    </form>
  )
}

export default TextEditor