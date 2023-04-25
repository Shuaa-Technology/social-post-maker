import { TemplatesService } from "../../core/Services/TemplatesService";
import styles from "./EditorPage.module.scss";
import Artboard from "./Layouts/Artboard/Artboard";
import PostSettings from "./Layouts/PostSettings/PostSettings";

type EditorPageProps = {};

function EditorPage(props: EditorPageProps) {
  const templateService = new TemplatesService();
  return (
    <div className={styles.editorPage}>
      <div className={styles.postSettingsWrapper}>
        <PostSettings />
      </div>
      <div className={styles.workspaceWrapper}>
        <Artboard template={templateService.getDefaultTemplate()} />
      </div>
    </div>
  );
}

export default EditorPage;
