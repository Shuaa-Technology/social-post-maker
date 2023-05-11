import styles from "./Rendrer.module.scss";
import { TemplateInterface } from "../../../../core/Models/Template/TemplateInterface";
import { TemplateRenderer } from "../../../../core/TemplateRenderer";

/* @note: Responsable of template parsing and rendring html with highlighting  */
function Rendrer(props: { template: TemplateInterface }) {
  const render = new TemplateRenderer()
    .setTemplate(props.template)
    .parse()
    .highlight()
    .render();
  return <div dangerouslySetInnerHTML={{ __html: render }}></div>;
}

export default Rendrer;
