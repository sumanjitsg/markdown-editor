// Styles
import styles from './Workspace.module.css';

// Type Definitons
type Props = {
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>
}

function TextEditor({ onChangeHandler }: Props) {
  return (
    <textarea name='markdown-text' className={styles.textEditor} spellCheck='false' onChange={onChangeHandler}></textarea >
  )
}

export default TextEditor