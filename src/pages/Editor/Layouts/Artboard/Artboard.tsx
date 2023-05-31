

import styles from "./Artboard.module.scss";

import { useAppSelector } from "../../../../app/hooks";
import { getTemplatesStore } from "../../../../app/store/TemplatesStore";
import Preview from "../../../../components/Preview/Preview";
import { FiInfo, FiUpload} from 'react-icons/fi';
import {Tooltip} from "react-tooltip";
import classNames from "classnames";

function Artboard(props: { editor: string })  {
  const templateLoader = useAppSelector(getTemplatesStore);

  return (
    <div className={styles.artBoard}>

        <div className={styles.exportBtn}>
            <FiUpload /> Export
        </div>

        <div className={styles.artBoardInner}>
            <Tooltip  className={styles.templateInfo} id="template-info" place="left" delayHide={100} delayShow={100}>
                <div className={classNames(styles.templateInfoTitle, styles.templateInfoRow)}>
                    <h2>{templateLoader.currentTemplate.name}
                    <span>{templateLoader.currentTemplate.version}</span>
                    </h2>
                </div>
                <div className={classNames(styles.templateInfoDescription, styles.templateInfoRow) }>
                    <p>{templateLoader.currentTemplate.description}
                    </p>
                </div>
                <div className={styles.templateInfoRow}>
                    <h3>{templateLoader.currentTemplate.height}px / {templateLoader.currentTemplate.width}px</h3>
                </div>
            </Tooltip>

            <h2 data-tooltip-id="template-info" className={styles.templateTitle}>
                <FiInfo className={styles.templateInfoButton} />
                {templateLoader.currentTemplate.name ?? "undefined"}</h2>
            <Preview editor={props.editor} template={templateLoader.currentTemplate} />
        </div>
    </div>
  );
}

export default Artboard;
