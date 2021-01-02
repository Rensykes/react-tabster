import React from 'react';
import Tab from '../Tab/Tab'
import styles from './TabList.module.css'


const tabList = (props) => (
    <div style={styles.TabList}>

        {props.tabs.map((tab, index) => {
            return <Tab
                name={tab.name}
                artist={tab.artist}
                key={index}>
            </Tab>
        })};
    </div>);



export default tabList;