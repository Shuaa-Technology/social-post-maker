import React from "react";
import styles from "./Preview.module.scss";
import { TemplateInterface } from "../../core/Models/Template";

interface Props {
  template: TemplateInterface;
}

interface State {}

class Preview extends React.Component<Props, State> {
  render() {
    return (
      <div
        className={styles.postPreview}
        style={{
          width: this.props.template.width,
          height: this.props.template.height,
        }}
        dangerouslySetInnerHTML={{ __html: this.props.template.render }}
      ></div>
    );
  }
}

export default Preview;
