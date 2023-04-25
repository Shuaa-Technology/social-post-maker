import styles from './PostSettings.module.scss';

type PostSettingsProps = {};

function PostSettings(props: PostSettingsProps) {
    return (
        <div className={styles.postSettings}>
            <h2>Post Settings</h2>
            {/* Add your post settings controls here */}
        </div>
    );
}

export default PostSettings;