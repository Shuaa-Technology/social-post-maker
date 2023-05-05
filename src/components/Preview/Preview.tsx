import styles from "./Preview.module.scss";
import { TemplateInterface } from "../../core/Models/Template";

function Preview(props: { template: TemplateInterface }) {
  return (
    <div
      className={styles.postPreview}
      style={{
        width: props.template.width,
        height: props.template.height,
      }}
      dangerouslySetInnerHTML={{ __html: props.template.render }}
    ></div>
  );
}

export default Preview;
