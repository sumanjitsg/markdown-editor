// Styles
import styles from './Header.module.css'

// Type Definitions
type Props = {
  text: string
}

function HeaderText({ text }: Props) {
  return (
    <p className={styles.headerText}>{text}</p>
  )
}
export default HeaderText