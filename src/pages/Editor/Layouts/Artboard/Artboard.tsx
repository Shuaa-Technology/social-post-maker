

import styles from "./Artboard.module.scss";

import { useAppSelector } from "../../../../app/hooks";
import { getTemplatesStore } from "../../../../app/store/TemplatesStore";
import Preview from "../../../../components/Preview/Preview";
import { FiClipboard   } from 'react-icons/fi';

function Artboard(props: { editor: string })  {
  const templateLoader = useAppSelector(getTemplatesStore);

  return (
    <div className={styles.artBoard}>

        <div className={styles.exportBtn}>
            <FiUpload /> Export
        </div>

        <div className={styles.artBoardInner}>
            <h2 className={styles.templateTitle}><FiClipboard  />{templateLoader.currentTemplate.name ?? "undefined"}</h2>
            <Preview editor={props.editor} template={templateLoader.currentTemplate} />
        </div>
    </div>
  );
}

export default Artboard;
