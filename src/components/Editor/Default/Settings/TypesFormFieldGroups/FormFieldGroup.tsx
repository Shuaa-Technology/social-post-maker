import { GroupProps } from "../../../../Settings/TypesFormFieldsGroups/TypesFormFieldsGroup";
import styles from "./FormFieldGroup.module.scss";

export default function FormFieldGroup(props: GroupProps) {
  const { id, name, children } = props;
  return <div>{children}</div>;
}
