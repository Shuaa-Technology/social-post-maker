import styles from "./TemplateList.module.scss";
import TemplateThumbnail from "./TemplateThumbnail/TemplateThumbnail";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";
import Loader from "../Shared/Loader";

interface TemplatesListProps {
  isLoading: boolean;
  templates: TemplateInterface[];
  currentTemplate: TemplateInterface;
  onSelectTemplate: any;
}

function TemplateList(props: TemplatesListProps) {
  const { templates, currentTemplate, isLoading } = props;

  const handleSelectTemplate = (id: string) => {
    props.onSelectTemplate(id);
  };

  return (
    <div className={styles.templateList}>
      <h2 className={styles.sectionTitle}>Templates List Panel</h2>
      {!isLoading ? (
        <div className={styles.templatesContainer}>
          {(() => {
            let stack = [];
            for (let i = 0; i < templates.length; i++) {
              stack.push(
                <TemplateThumbnail
                  isActive={currentTemplate.id == templates[i].id}
                  template={templates[i]}
                  onSelectTemplate={handleSelectTemplate}
                />
              );
            }
            return stack;
          })()}
        </div>
      ) : (
        <div><Loader /></div>
      )}
    </div>
  );
}

export default TemplateList;
