// Components
import Button from '../components/Button'
import HeaderText from './HeaderText'

// Styles
import styles from './Header.module.css'

// Type Definitions
type Props = {
  text: string
}

function Header({ text }: Props) {
  return (
    <header className={styles.container}>
      <HeaderText text={text} />
      <Button text='Save Changes' />
    </header>
  )
}

export default Header