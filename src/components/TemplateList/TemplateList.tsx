import React, { useState } from "react";

import styles from "./TemplateList.module.scss";
import { TemplateInterface } from "../../core/Models/Template";
import TemplateThumbnail from "./TemplateThumbnail/TemplateThumbnail";

function TemplateList({ templates = [] }: { templates: TemplateInterface[] }) {

  const handleSelectTemplate = (id:string) => {
    //dipatch redux select action
     console.log(id)
   };

  return (
    <div className={styles.templateList}>
      <h2>Template List Panel</h2>
      <div className={styles.templatesContainer}>
        {(() => {
          let stack = [];
          for (let i = 0; i < templates.length; i++) {
            /* @todo: to foreach please. {*/
            stack.push(<TemplateThumbnail template={templates[i]} onSelectTemplate={handleSelectTemplate} />);
          }
          return stack;
        })()}
      </div>
    </div>
  );
}

export default TemplateList;
