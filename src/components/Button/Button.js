import React from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles

const button = () => {
    return ( 
        <div>
            <button className={styles.Button}>Toggle</button>
        </div>
     );
}
 
export default button;