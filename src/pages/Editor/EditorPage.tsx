import { EDITOR_SYSTEM } from "../../config/templates";
import styles from "./EditorPage.module.scss";
import Artboard from "./Layouts/Artboard/Artboard";
import LeftSidebar from "./Layouts/LeftSidebar/LeftSidebar";

function EditorPage() {

  return (
    <div className={styles.editorPage}>
      <div className={styles.leftSidebarWrapper}>
        <LeftSidebar editor={EDITOR_SYSTEM} />
      </div>
      <div className={styles.workspaceWrapper}>
        <Artboard  editor={EDITOR_SYSTEM}  />
      </div>
    </div>
  );
}

export default EditorPage;
