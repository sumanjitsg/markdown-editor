import React from 'react';

// Components
import SectionHeader from './SectionHeader';
import TextEditor from './TextEditor';
import { ReactComponent as IconShowPreview } from 'assets/icon-show-preview.svg';

// Styles
import styles from './Workspace.module.css';

// Types
type Props = {
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
};

function EditorSection( { onChangeHandler }: Props ) {
  return (
    <section className={styles.editorSection}>
      <SectionHeader text='Markdown' icon={<IconShowPreview />} />
      <TextEditor onChangeHandler={onChangeHandler} />
    </section>
  );
}

export default EditorSection;