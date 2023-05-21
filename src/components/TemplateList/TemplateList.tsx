import React, { useState, useEffect,Suspense } from "react";
import styles from "./TemplateList.module.scss";
import TemplateThumbnail from "./TemplateThumbnail/TemplateThumbnail";
import { useAppSelector, useAppDispatch } from "../../../src/app/hooks";
import {
  getTemplatesStore,
  loadTemplates,
  selectTemplate,
} from "../../app/store/TemplatesStore";

function TemplateList() {
  const templatesLoader = useAppSelector(getTemplatesStore);
  const dispatch = useAppDispatch();

  const handleSelectTemplate = (id: string) => {
    dispatch(selectTemplate(id));
  };

  useEffect(() => {
    dispatch(loadTemplates());
    console.log(templatesLoader.templates);
  }, []);

  return (
    <Suspense
      fallback={
        <div>{/* @TODO Add better loading component */} Loading...</div>
      }
    >
      <div className={styles.templateList}>
        <h2 className={styles.sectionTitle}>Templates List Panel</h2>
        <div className={styles.templatesContainer}>
          {(() => {
            let stack = [];
            for (let i = 0; i < templatesLoader.templates.length; i++) {
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
    </Suspense>
  );
}

export default TemplateList;
