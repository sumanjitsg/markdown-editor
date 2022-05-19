// Components
import Button from '../shared-components/Button';
import HeaderText from './HeaderText';

import { ReactComponent as IconMenu } from '../assets/icon-menu.svg';

// Styles
import styles from './Header.module.css';

// Types
type Props = {
  text: string;
};

type BtnMouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;

function Header( { text }: Props ) {
  const handleSave: BtnMouseEventHandler
    = () => {};

  return (
    <header className={styles.container}>
      <IconMenu />
      <HeaderText text={text} />
      <Button text='Save Changes' onClickHandler={handleSave} />
    </header>
  );
}

export default Header;