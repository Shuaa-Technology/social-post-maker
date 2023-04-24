import React from 'react';
import styles from './Artboard.module.scss';

type ArtboardProps = {};

function Artboard(props: ArtboardProps) {
    return (
        <div className={styles.artBoard}>
            <h2>Artboard</h2>
            {/* Add your post preview and editing tools here */}
        </div>
    );
}

export default Artboard;