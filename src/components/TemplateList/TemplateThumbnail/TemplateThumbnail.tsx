import styles from "./TemplateThumbnail.module.scss";
import { TemplateInterface } from "../../../core/Models/Template";

interface Props {
  template: TemplateInterface;
}
function TemplateThumbnail(props: Props) {
  return (
    <div key={props.template.id} className={styles.templateThumbnail}>
      {props.template.name}
    </div>
  );
}

export default TemplateThumbnail;
