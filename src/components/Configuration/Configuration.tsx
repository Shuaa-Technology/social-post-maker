import React from 'react';
import Appearance from './Appearance/Appearance';
import styles from './Configuration.module.scss';

function Configuration() {
    return (
        <div className={styles.configuration}>
            <h2>Configuration</h2>
            <Appearance />
            {/*add more configs here*/}
        </div>
    );
};

export default Configuration;