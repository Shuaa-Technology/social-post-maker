import { lazy, Suspense } from "react";
import styles from "./TypesFormFieldsGroups.module.scss";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import classNames from "classnames";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

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
    <Suspense
      fallback={
        <div> {/* @TODO Add better loading component */} Loading...</div>
      }
    >
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <div className={styles.fieldGroup}>
            <AccordionItemHeading>
              <AccordionItemState>
                {({ expanded }) => (
                  <AccordionItemButton className={styles.accordionButton}>
                    <div className={styles.accordionTitle}>{name}</div>
                    <div
                      className={classNames(styles.accordionIcon, {
                        [styles.rotate]: expanded,
                      })}
                    >
                      <FaAngleRight />
                    </div>
                  </AccordionItemButton>
                )}
              </AccordionItemState>
            </AccordionItemHeading>
            <AccordionItemState>
              {({ expanded }) => (
                <AccordionItemPanel
                  className={`${styles.accordionBody} ${
                    expanded ? styles.expanded : ""
                  }`}
                >
                  <div className={classNames(styles.fieldGroup)}>
                    <Group id={id} name={name}>
                      {children}
                    </Group>
                  </div>
                </AccordionItemPanel>
              )}
            </AccordionItemState>
          </div>
        </AccordionItem>
      </Accordion>
    </Suspense>
  );
}
