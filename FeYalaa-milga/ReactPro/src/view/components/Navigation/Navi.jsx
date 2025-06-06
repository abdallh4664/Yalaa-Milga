import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navi.module.css'

export default function Navi() {
  return (
    <nav className={styles.nav}>
      <Link to="/">בית</Link>
      <Link to="/A">אודות</Link>
    </nav>
  )
}
