import Preview from "../../../../components/Preview/Preview";
import { TemplateInterface } from "../../../../core/Models/Template";
import styles from "./Artboard.module.scss";

type ArtboardProps = {
  template: TemplateInterface;
};

function Artboard(props: ArtboardProps) {
  return (
    <div className={styles.artBoard}>
      <h2>{props.template.name}</h2>
      <Preview template={props.template} />
    </div>
  );
}

export default Artboard;
