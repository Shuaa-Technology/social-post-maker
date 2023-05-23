import styles from "./TemplateThumbnail.module.scss";
import { TemplateInterface } from "../../../core/Models/Template/TemplateInterface";
import classNames from "classnames";

interface TemplateThumbnailProps {
  template: TemplateInterface;
  isActive: boolean;
  onSelectTemplate: any;
}
function TemplateThumbnail(props: TemplateThumbnailProps) {
  const { template, isActive = false } = props;
  const onClick = () => {
    props.onSelectTemplate(props.template.id);
  };

  return (
    <div
      key={template.id}
      className={ isActive ? classNames(styles.templateThumbnail,styles.active) : classNames(styles.templateThumbnail)}
      onClick={() => {
        onClick();
      }}
    >
      {template.name}
    </div>
  );
}

export default TemplateThumbnail;
