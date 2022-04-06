// Components
import Button from '../shared-components/Button'
import HeaderText from './HeaderText'

// Styles
import styles from './Header.module.css'

// Type Definitions
type Props = {
  text: string
};

type handleSave = React.MouseEventHandler<HTMLButtonElement>;

function Header({ text }: Props) {
  const handleSave = () => { }

  return (
    <header className={styles.container}>
      <HeaderText text={text} />
      <Button text='Save Changes' onClickHandler={handleSave} />
    </header>
  )
}

export default Header