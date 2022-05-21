// Styles
import styles from './AppHeader.module.scss';

// Types
type Props = {
  text: string;
};

function HeaderText( { text }: Props ) {
  return (
    <p className={styles.headerText}>{text}</p>
  );
}
export default HeaderText;