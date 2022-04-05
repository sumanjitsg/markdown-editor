import { useState } from 'react'

import styles from './TextPreview.module.css'

type Props = {
  HTMLText: string
}

function TextPreview({ HTMLText }: Props) {
  // sanitise htmltext
  return (
    <div className={styles.container} dangerouslySetInnerHTML={{ __html: HTMLText }} />
  )
}

export default TextPreview