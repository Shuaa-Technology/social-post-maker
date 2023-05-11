import styles from "./Preview.module.scss";
import { Template, TemplateInterface } from "../../../../core/Models/Template/Template";

function Preview(props: { template: TemplateInterface }) {
  return (
    <div
      className={styles.postPreview}
      style={{
        width: props.template.width,
        height: props.template.height,
      }}
      dangerouslySetInnerHTML={{ __html: Template.parse(props.template) }}
    ></div>
  );
}

export default Preview;
