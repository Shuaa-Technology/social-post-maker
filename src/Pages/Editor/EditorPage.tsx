import React from 'react';
import styles from './EditorPage.module.scss';
import Artboard from "./Layouts/Artboard/Artboard";
import PostSettings from "./Layouts/PostSettings/PostSettings";

type EditorPageProps = {};

function EditorPage(props: EditorPageProps) {
    return (
        <div className={styles.editorPage}>
            <div className={styles.postSettingsWrapper}>
                <PostSettings />
            </div>
            <div className={styles.workspaceWrapper}>
                <Artboard />
            </div>
        </div>
    );
}

export default EditorPage;