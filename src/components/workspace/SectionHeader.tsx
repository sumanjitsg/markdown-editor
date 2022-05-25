// Styles
import { ReactElement, ReactText } from 'react';
import styles from './Workspace.module.css';

// Types
type Props = {
  text: ReactText;
  icon: ReactElement;
};

function SectionHeader( { text, icon }: Props ) {
  return (
    <header className={styles.sectionHeader}>
      {text}
      {icon}
    </header>
  );
}

export default SectionHeader;