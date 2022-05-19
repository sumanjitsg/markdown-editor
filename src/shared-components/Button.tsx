// Styles
import styles from './SharedComponents.module.css';

// Types
type Props = {
  text: string,
  block?: boolean,
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
};

function Button( { text, block, onClickHandler }: Props ) {
  const btnClass = block ? styles.btnBlock : styles.btn;

  return (
    <button className={btnClass} onClick={onClickHandler}>{text}</button>
  );
}
export default Button;