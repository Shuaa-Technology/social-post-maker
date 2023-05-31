import { lazy, Suspense } from "react";
import Loader from "../../Shared/Loader";
import { updateTemplateSettings } from "../../../app/store/TemplatesStore";
import { useAppDispatch } from "../../../app/hooks";

export interface FieldProps {
  id?: string;
  name?: string;
  value?: string;
  handleOnChange: (handle: string, value: string) => void;
}

export interface TypeFormFieldProps {
  id?: string;
  name?: string;
  value?: string;
  editor: string;
  fieldHandle: string;
}

export function TypeFormField(props: TypeFormFieldProps) {
  const { editor, fieldHandle, id, name, value = "" } = props;
  const dispatch = useAppDispatch();
  const Field = lazy(
    () =>
      import(`../../Editor/${editor}/Settings/TypesFormFields/${fieldHandle}`)
  );

  const handleOnFieldChange = (handle: string, value: string) => {
    dispatch(updateTemplateSettings({ handle: handle, value: value }));
  };

  return (
    <Suspense fallback={<Loader />}>
      <Field
        id={id}
        name={name}
        value={value}
        handleOnChange={handleOnFieldChange}
      />
    </Suspense>
  );
}
