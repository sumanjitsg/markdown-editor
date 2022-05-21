// Styles
import styles from './Workspace.module.css';

// Types
type Props = {
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>
}

function TextEditor({ onChangeHandler }: Props) {
  return (
    <textarea name='markdown-text' className={styles.textEditor} spellCheck='false' onChange={onChangeHandler}></textarea >
  )
}

export default TextEditor