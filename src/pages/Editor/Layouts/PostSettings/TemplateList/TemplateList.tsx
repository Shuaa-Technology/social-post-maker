import React, { useState } from "react";

import styles from "./TemplateList.module.scss";
import { TemplateInterface } from "../../../../../core/Models/Template";

function TemplateList({ templates = [] }: { templates: TemplateInterface[] }) {
  return (
    <div className={styles.templateList}>
      <h2>Template List Panel</h2>
      <div className={styles.templatesContainer}>
        {(() => {
          let stack = [];
          for (let i = 0; i < templates.length; i++) {    /* @todo: to foreach please. */
         /* @todo: in another Comp. */
           stack.push(
              <div key={i} className={styles.templatePreview}>
                {templates[i].name}
              </div>
            ); 
          }
          return stack;
        })()}
      </div>
    </div>
  );
}

export default TemplateList;
