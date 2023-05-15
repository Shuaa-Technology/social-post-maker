import styles from "./Preview.module.scss";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";

import { lazy, Suspense } from "react";

function Preview(props: {editor:string,  template: TemplateInterface }) {
  const { editor, template} = props;
  
  const Rendrer = lazy(
    () => import(`../Template/${editor}/Preview/Rendrer`)
  );

  return (
    <div
      className={styles.postPreview}
      style={{
        width: template.width,
        height: template.height,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Rendrer  template={template} />
      </Suspense>
    </div>
  );
}

export default Preview;
