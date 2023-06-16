import styles from "./Rendrer.module.scss";
import { TemplateInterface } from "../../../../core/Models/Template/TemplateInterface";
import { TemplateRenderer } from "../../../../core/TemplateRenderer";


function Rendrer(props: { template: TemplateInterface }) {
  const render = new TemplateRenderer()
    .setTemplate(props.template)
    .parse()
    .render();
  return (
    <>
      <div id="render-layer" className={styles.rendered}  dangerouslySetInnerHTML={{ __html: render }}></div>
    </>
  );
}

export default Rendrer;
