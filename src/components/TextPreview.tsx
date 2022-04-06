// Modules
import React from 'react'
import ReactDOM from 'react-dom'

// Hooks
import { useState } from 'react'

// Styles
import styles from './Workspace.module.css'

// Type Definitons
type Props = {
  children: React.ReactNode
}

function TextPreview({ children }: Props) {
  return (
    <div className={styles.textPreview}>
      {children}
    </div>
  )
}

export default TextPreview