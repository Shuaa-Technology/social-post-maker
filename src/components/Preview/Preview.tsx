import styles from "./Preview.module.scss";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";

import { lazy, Suspense,useMemo } from "react";
import Loader from "../Shared/Loader";

function Preview(props: { editor: string; template: TemplateInterface }) {
  const { editor, template } = props;



  const Rendrer = useMemo(
    () =>
    lazy(() => import(`../Editor/${editor}/Preview/Rendrer`)),
    [editor]
  );

  const style = {
    width: template.width,
    height: template.height,
  };
  
  return (
    <div className={styles.postPreview} style={style}>
      <div className={styles.postPreviewInner}>
        <Suspense fallback={<Loader hAuto={true} />}>
          <Rendrer template={template} />
        </Suspense>
      </div>
    </div>
  );
}

export default Preview;
