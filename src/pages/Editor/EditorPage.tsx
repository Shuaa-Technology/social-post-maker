import { EDITOR_SYSTEM } from "../../config/templates";
import styles from "./EditorPage.module.scss";
import Artboard from "./Layouts/Artboard/Artboard";
import SideBar from "./Layouts/Sidebar/Sidebar";

function EditorPage() {

  return (
    <div className={styles.editorPage}>
      <div className={styles.leftSidebarWrapper}>
        <SideBar editor={EDITOR_SYSTEM} />
      </div>
      <div className={styles.workspaceWrapper}>
        <Artboard  editor={EDITOR_SYSTEM}  />
      </div>
    </div>
  );
}

export default EditorPage;
