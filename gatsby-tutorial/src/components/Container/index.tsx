import React from "react"
import * as styles from "./index.module.css"

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}