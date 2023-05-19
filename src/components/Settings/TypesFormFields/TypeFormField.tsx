import { lazy, Suspense } from "react";

export interface FieldProps {
  id?: string;
  name?: string;
  value?: string;
}

export interface TypeFormFieldProps extends FieldProps {
  editor: string;
  fieldHandle: string;
}

export function TypeFormField(props: TypeFormFieldProps) {
  const { editor, fieldHandle, id, name, value = "" } = props;

  const Field = lazy(
    () =>
      import(`../../Editor/${editor}/Settings/TypesFormFields/${fieldHandle}`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Field id={id} name={name} value={value} />
    </Suspense>
  );
}
