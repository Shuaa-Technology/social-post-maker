import React, { useState, useEffect } from "react";

import styles from "./TemplateList.module.scss";
import { TemplateInterface } from "../../core/Models/Template";
import TemplateThumbnail from "./TemplateThumbnail/TemplateThumbnail";
import { useAppSelector, useAppDispatch } from "../../../src/app/hooks";
import { getTemplates, loadTemplates } from "../../app/store/Templatestore";

function TemplateList() {
  const templatesLoader = useAppSelector(getTemplates);
  /*   const [templates, setTemplates] = useState<TemplateInterface[]>([]); */
  const dispatch = useAppDispatch();

  const handleSelectTemplate = (id: string) => {
    //dipatch redux select action
    console.log(id);
  };

  useEffect(() => {
    dispatch(loadTemplates());
  }, []);

  return (
    <div className={styles.templateList}>
      <h2>Template List Panel</h2>
      <div className={styles.templatesContainer}>
        {(() => {
          let stack = [];
          for (let i = 0; i < templatesLoader.templates.length; i++) {
            /* @todo: to foreach please. */
            stack.push(
              <TemplateThumbnail
                template={templatesLoader.templates[i]}
                onSelectTemplate={handleSelectTemplate}
              />
            );
          }
          return stack;
        })()}
      </div>
    </div>
  );
}

export default TemplateList;
