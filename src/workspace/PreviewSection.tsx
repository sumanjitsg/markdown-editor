import React from 'react';

// Components
import SectionHeader from './SectionHeader';
import PreviewContent from './PreviewContent';

// Styles
import styles from './Workspace.module.css';

// Type Definitons
type Props = {
  children: React.ReactNode
}

function PreviewSection({ children }: Props) {
  return (
    <section className={styles.previewSection}>
      <SectionHeader text='Preview' />
      <PreviewContent>
        {children}
      </PreviewContent>
    </section>
  )
}

export default PreviewSection