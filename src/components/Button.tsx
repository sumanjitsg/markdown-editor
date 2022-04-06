// Styles
import styles from './Components.module.css'

// Type Definitions
type Props = {
  text: string
}

function Button({ text }: Props) {
  return (
    <button className={styles.btn}>{text}</button>
  )
}
export default Button