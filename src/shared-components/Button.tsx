// Styles
import styles from './SharedComponents.module.css'

// Types
type Props = {
  text: string,
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ text, onClickHandler }: Props) {
  return (
    <button className={styles.btn} onClick={onClickHandler}>{text}</button>
  )
}
export default Button