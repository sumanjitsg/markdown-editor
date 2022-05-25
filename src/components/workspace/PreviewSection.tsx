import React from 'react';

// Components
import SectionHeader from './SectionHeader';
import PreviewContent from './PreviewContent';

// Styles
import styles from './Workspace.module.css';

// Types
type Props = {
  children: React.ReactNode;
};

function PreviewSection( { children }: Props ) {
  return (
    <section className={styles.previewSection}>
      <SectionHeader text='Preview' icon={<></>} />
      <PreviewContent>
        {children}
      </PreviewContent>
    </section>
  );
}

export default PreviewSection;