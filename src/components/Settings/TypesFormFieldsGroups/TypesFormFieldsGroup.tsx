import { lazy, Suspense } from "react";

export interface GroupProps {
  id?: string;
  name?: string;
  children: React.ReactNode;
}

export interface TypesFormFieldsGroup extends GroupProps {
  editor: string;
  groupHandle: string;
}

export function TypesFormFieldsGroup(props: TypesFormFieldsGroup) {
  const { editor, groupHandle, id, name, children } = props;

  const Group = lazy(
    () =>
      import(
        `../../Editor/${editor}/Settings/TypesFormFieldGroups/${groupHandle}`
      )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Group id={id} name={name}>
       {children}
      </Group>
    </Suspense>
  );
}
