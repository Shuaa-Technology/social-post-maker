import styles from "./TemplateThumbnail.module.scss";
import { TemplateInterface } from "../../../core/Models/Template/TemplateInterface";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";

interface TemplateThumbnailProps {
  template: TemplateInterface;
  isActive: boolean;
  onSelectTemplate: (id: string) => void;
}

function TemplateThumbnail({ template, isActive = false, onSelectTemplate }: TemplateThumbnailProps) {
  const onClick = () => {
    onSelectTemplate(template.id);
  };

  const thumbnailClasses = classNames(styles.templateThumbnail, {
    [styles.active]: isActive,
  });

  return (
      <div key={template.id} className={thumbnailClasses} onClick={onClick}>
        {isActive && <FaCheck className={styles.checkIcon} />}
        {template.name}
      </div>
  );
}

export default TemplateThumbnail;
