import styles from "./EditorPage.module.scss";
import Artboard from "./Layouts/Artboard/Artboard";
import LeftSidebar from "./Layouts/LeftSidebar/LeftSidebar";

function EditorPage() {

  return (
    <div className={styles.editorPage}>
      <div className={styles.leftSidebarWrapper}>
        <LeftSidebar  />
      </div>
      <div className={styles.workspaceWrapper}>
        <Artboard  />
      </div>
    </div>
  );
}

export default EditorPage;
