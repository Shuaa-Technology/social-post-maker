import styles from "./Preview.module.scss";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";

import { lazy, Suspense } from "react";

function Preview(props: {editor:string,  template: TemplateInterface }) {
  const { editor, template} = props;
  
  const Rendrer = lazy(
    () => import(`../Editor/${editor}/Preview/Rendrer`)
  );

  return (
    <div
      className={styles.postPreview}
      style={{
        width: template.width,
        height: template.height,
      }}
    >
        <div className={styles.postPreviewInner}>
            <Suspense fallback={<div>Loading...</div>}>
                <Rendrer  template={template} />
            </Suspense>
        </div>

    </div>
  );
}

export default Preview;
