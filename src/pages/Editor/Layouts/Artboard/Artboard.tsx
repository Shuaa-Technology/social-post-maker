import styles from "./Artboard.module.scss";

import { useAppSelector } from "../../../../app/hooks";
import {
  getCurrentTemplate,
  getTemplatesStore,
} from "../../../../app/store/TemplatesStore";
import Preview from "../../../../components/Preview/Preview";
import { FiInfo, FiUpload } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { toPng } from "html-to-image";

import classNames from "classnames";

function Artboard(props: { editor: string }) {
  const currentTemplate = useAppSelector(getCurrentTemplate);

  const handleExport = () => {
    let elm = document.getElementById("render-layer");
    if (elm) {
      toPng(elm).then(function (dataUrl) {
        require("downloadjs")(dataUrl, currentTemplate.name);
      });
    }
  };

  return (
    <div className={styles.artBoard}>
      <div className={styles.exportBtn} onClick={handleExport}>
        <FiUpload /> Export
      </div>

      <div className={styles.artBoardInner}>
        <Tooltip
          className={styles.templateInfo}
          id="template-info"
          place="left"
          delayHide={100}
          delayShow={100}
        >
          <div
            className={classNames(
              styles.templateInfoTitle,
              styles.templateInfoRow
            )}
          >
            <h2>
              {currentTemplate.name}
              <span>{currentTemplate.version}</span>
            </h2>
          </div>
          <div
            className={classNames(
              styles.templateInfoDescription,
              styles.templateInfoRow
            )}
          >
            <p>{currentTemplate.description}</p>
          </div>
          <div className={styles.templateInfoRow}>
            <h3>
              {currentTemplate.height}px / {currentTemplate.width}px
            </h3>
          </div>
        </Tooltip>

        <h2 data-tooltip-id="template-info" className={styles.templateTitle}>
          <FiInfo className={styles.templateInfoButton} />
          {currentTemplate.name ?? "undefined"}
        </h2>
        <Preview editor={props.editor} template={currentTemplate} />
      </div>
    </div>
  );
}

export default Artboard;
