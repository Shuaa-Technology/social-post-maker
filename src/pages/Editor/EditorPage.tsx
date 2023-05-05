import React, { useState, useEffect } from "react";
import { TemplateInterface } from "../../core/Models/Template";
import { TemplatesService } from "../../core/Services/TemplatesService";
import styles from "./EditorPage.module.scss";
import Artboard from "./Layouts/Artboard/Artboard";
import LeftSidebar from "./Layouts/LeftSidebar/LeftSidebar";

function EditorPage() {
  const templateService = new TemplatesService();

  return (
    <div className={styles.editorPage}>
      <div className={styles.leftSidebarWrapper}>
        <LeftSidebar  />
      </div>
      <div className={styles.workspaceWrapper}>
        <Artboard template={templateService.getDefaultTemplate()} />
      </div>
    </div>
  );
}

export default EditorPage;
