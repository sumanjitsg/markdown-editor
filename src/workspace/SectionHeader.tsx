// Styles
import styles from './Workspace.module.css';

// Types
type Props = {
  text: string
}

function SectionHeader({ text }: Props) {
  return (
    <header className={styles.sectionHeader}>{text}</header>
  )
}

export default SectionHeader