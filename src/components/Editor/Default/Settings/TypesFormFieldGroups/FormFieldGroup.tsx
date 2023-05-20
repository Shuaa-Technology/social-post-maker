import { GroupProps } from "../../../../Settings/TypesFormFieldsGroups/TypesFormFieldsGroup";
import styles from "./FormFieldGroup.module.scss";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import classNames from "classnames";

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import { useState } from "react";

export default function FormFieldGroup(props: GroupProps) {
    const { id, name, children } = props;


    return (
        <div className={styles.fieldGroup}>
            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemState>
                            {({ expanded }) => (
                                <AccordionItemButton className={styles.accordionButton}>
                                    <div className={styles.accordionTitle}>{name}</div>
                                    <div className={classNames(styles.accordionIcon, { [styles.rotate]: expanded })}>
                                        <FaAngleRight />
                                    </div>
                                </AccordionItemButton>
                            )}
                        </AccordionItemState>
                    </AccordionItemHeading>
                    <AccordionItemState>
                        {({ expanded }) => (
                            <AccordionItemPanel
                                className={`${styles.accordionBody} ${expanded ? styles.expanded : ""}`}
                            >
                                {children}
                            </AccordionItemPanel>
                        )}
                    </AccordionItemState>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
