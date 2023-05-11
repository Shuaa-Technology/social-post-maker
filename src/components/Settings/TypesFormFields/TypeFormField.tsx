import { lazy, Suspense } from "react";
import { TEMPLATE_EDITOR } from "../../../config/templates";

export interface FieldProps {
  id?: string;
  name?: string;
  value?: string;
}

export interface TypeFormFieldProps extends FieldProps {
  fieldHandle: string;
}

export function TypeFormField(props: TypeFormFieldProps) {
  const { fieldHandle, id, name, value = "" } = props;

  const Field = lazy(
    () => 
      import(`../../Template/${TEMPLATE_EDITOR}/Settings/TypesFormFields/${fieldHandle}`) 
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Field id={id} name={name} value={value} />
    </Suspense>
  );
}
