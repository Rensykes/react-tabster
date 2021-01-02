import React from 'react';
import styles from './Tab.module.css'; // Import css modules stylesheet as styles

const tab = (props) => (
    <div className={styles.Tab}>
        <b>{props.name}</b>
        <i>{props.artist}</i>
    </div>
)

export default tab;