import React, { useEffect, useRef } from "react";
import styles from "./TemplateList.module.scss";
import TemplateThumbnail from "./TemplateThumbnail/TemplateThumbnail";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";
import Loader from "../Shared/Loader";

interface TemplatesListProps {
  isLoading: boolean;
  templates: TemplateInterface[];
  currentTemplate: TemplateInterface;
  onSelectTemplate: any;
  loadMoreTemplates: () => void;
}

function TemplateList(props: TemplatesListProps) {
  const {
    templates,
    currentTemplate,
    isLoading,
    onSelectTemplate,
    loadMoreTemplates,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Reset the scroll position when new templates are loaded
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [templates]);

  const handleScroll = async () => {
    if (
        containerRef.current &&
        containerRef.current.scrollHeight > containerRef.current.clientHeight &&
        containerRef.current.scrollTop + containerRef.current.clientHeight >=
        containerRef.current.scrollHeight - 20 && // Adjust the threshold as needed
        !isLoading
    ) {
      await loadMoreTemplates();
    }
  };

  const handleSelectTemplate = (id: string) => {
    onSelectTemplate(id);
  };

  return (
      <div className={styles.templateList} ref={containerRef} onScroll={handleScroll}>
        <h2 className={styles.sectionTitle}>Templates List Panel</h2>
        <div className={styles.templatesContainer}>
          {templates.map((template) => (
              <TemplateThumbnail
                  key={template.id}
                  isActive={currentTemplate.id === template.id}
                  template={template}
                  onSelectTemplate={handleSelectTemplate}
              />
          ))}
          {isLoading && <Loader />}
          {!isLoading && templates.length === 0 && (
              <p className={styles.endMessage}>No templates available.</p>
          )}
        </div>
      </div>
  );
}

export default TemplateList;
