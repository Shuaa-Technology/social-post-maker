import Preview from "../../../../components/Preview/Preview";

import styles from "./Artboard.module.scss";

import { useAppSelector } from "../../../../app/hooks";
import { getTemplatesStore } from "../../../../app/store/TemplatesStore";

function Artboard() {
  const templateLoader = useAppSelector(getTemplatesStore);

  return (
    <div className={styles.artBoard}>
      <h2>{templateLoader.currentTemplate.name ?? "undefined"}</h2>
      <Preview template={templateLoader.currentTemplate} />
    </div>
  );
}

export default Artboard;
