import React from "react"
import styles from "./header.module.css"

import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return <div className={styles.header}>
        <Link to='/'>
            <span className={styles.header_text}>UPAYMENTS Store</span>
        </Link>
        <span className={styles.header_text}>Register</span>
    </div>
}

export default Header