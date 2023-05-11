import styles from "./Preview.module.scss";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";

import Rendrer from "../Template/Default/Preview/Rendrer";

function Preview(props: { template: TemplateInterface }) {
  return (
    <div
      className={styles.postPreview}
      style={{
        width: props.template.width,
        height: props.template.height,
      }}
    >
      <Rendrer template={props.template} />
    </div>
  );
}

export default Preview;
