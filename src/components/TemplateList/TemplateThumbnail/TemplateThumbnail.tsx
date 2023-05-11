import styles from "./TemplateThumbnail.module.scss";
import { TemplateInterface } from "../../../core/Models/Template/TemplateInterface";

interface Props {
  template: TemplateInterface;
  onSelectTemplate: any;
}
function TemplateThumbnail(props: Props) {

  const onClick = () => {
   props.onSelectTemplate(props.template.id);
  };

  return (
    <div
      key={props.template.id}
      className={styles.templateThumbnail}
      onClick={() => {
        onClick();
      }}
    >
      {props.template.name}
    </div>
  );
}

export default TemplateThumbnail;
