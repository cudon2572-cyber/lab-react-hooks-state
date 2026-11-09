import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      type="button"
      className={`${styles.darkModeToggle} ${darkMode ? styles.light : ''}`}
      onClick={onToggle}
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
