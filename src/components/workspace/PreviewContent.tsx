// Styles
import styles from './Workspace.module.css';

// Types
type Props = {
  children: React.ReactNode
}

function PreviewContent({ children }: Props) {
  return (
    <div className={styles.previewContent}>
      {children}
    </div>
  )
}

export default PreviewContent