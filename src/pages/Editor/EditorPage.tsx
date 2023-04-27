import React, { useState, useEffect } from "react";
import { TemplateInterface } from "../../core/Models/Template";
import { TemplatesService } from "../../core/Services/TemplatesService";
import styles from "./EditorPage.module.scss";
import Artboard from "./Layouts/Artboard/Artboard";
import PostSettings from "./Layouts/PostSettings/PostSettings";

function EditorPage() {
  const [templates, setTemplates] = useState<TemplateInterface[]>([]);
  const templateService = new TemplatesService();

  useEffect(() => {
    templateService
      .getTemplates()
      .then((data) => setTemplates(data.slice(0, 12))); /* For pagination later */
  }, []);
  return (
    <div className={styles.editorPage}>
      <div className={styles.postSettingsWrapper}>
        <PostSettings templates={templates} />
      </div>
      <div className={styles.workspaceWrapper}>
        <Artboard template={templateService.getDefaultTemplate()} />
      </div>
    </div>
  );
}

export default EditorPage;