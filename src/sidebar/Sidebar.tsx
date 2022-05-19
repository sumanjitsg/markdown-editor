// Components
import Button from '../shared-components/Button';

// Styles
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.container}>
      <h2 className={styles.heading}>My Documents</h2>
      <Button text='+ New Document' block={true} onClickHandler={() => {}} />
    </aside>
  );
}

export default Sidebar;