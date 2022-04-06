import React from 'react';

// Components
import SectionHeader from './SectionHeader';
import TextEditor from './TextEditor';

// Styles
import styles from './Workspace.module.css';

// Type Definitons
type Props = {
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>
}

function EditorSection({ onChangeHandler }: Props) {
  return (
    <section className={styles.editorSection}>
      <SectionHeader text='Markdown' />
      <TextEditor onChangeHandler={onChangeHandler} />
    </section>
  )
}

export default EditorSection