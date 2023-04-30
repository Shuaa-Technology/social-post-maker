import React, { useState } from "react";
import styles from "./Settings.module.scss";

//todo: to be move to one place maybe?
export interface SettingsData {
    onSave?: (data: { title: string; content: string }) => void;
}

const Settings: React.FC<SettingsData> = ({ onSave }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSave = () => {

    };

    return (
        <div className={styles.container}>
            <div className={styles.field}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button className={styles.button} onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

export default Settings;
