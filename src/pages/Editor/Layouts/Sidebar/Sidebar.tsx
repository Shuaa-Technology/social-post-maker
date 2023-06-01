import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FiSettings, FiList, FiEdit } from "react-icons/fi";

import styles from "./SideBar.module.scss";

import TemplateList from "../../../../components/TemplateList/TemplateList";
import Settings from "../../../../components/Settings/Settings";
import { Tooltip } from "react-tooltip";
import Configuration from "../../../../components/Configuration/Configuration";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  getCurrentTemplate,
  getTemplates,
  getTemplatesStore,
  loadTemplates,
  selectTemplate,
} from "../../../../app/store/TemplatesStore";
import { shallowEqual } from "react-redux";

function SideBar(props: { editor: string }) {
  const dispatch = useAppDispatch();

  const comparisonFunc = (newSelectedState:any, latestSelectedState:any) => {
    const equality = newSelectedState.version === newSelectedState.version
    console.log(`[StatusDisplay] — Call comparisonFunc — new: ${newSelectedState.version} | old: ${latestSelectedState.version} | equal?: ${equality}`)
    return equality
  }
  const { templates, status } = useAppSelector(getTemplatesStore);

  const currentTemplate = useAppSelector(getCurrentTemplate);


  useEffect(() => {
    dispatch(loadTemplates({}));
  }, []);

  const handleLoadMoreTemplates = (nextPage:number) => {
    dispatch(loadTemplates({ page: nextPage }));
  };

  const handleSelectTemplate = (id: string) => {
    dispatch(selectTemplate(id));
    setTabIndex(0); // Switch to the Settings tab
  };

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setTabIndex(index);
  };

  const isTabActive = (index: number): boolean => tabIndex === index;

  return (
      <div className={styles.sideBar}>
        <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect} className={styles.tabContainer}>
          <TabList className={styles.tabList}>
            <Tab className={`${styles.tab} ${isTabActive(0) ? styles.active : ""}`}>
              <FiEdit className={`${styles.tabIcon} post-builder-icon`} />
            </Tab>
            <Tooltip anchorSelect=".post-builder-icon" place="top">
              Builder
            </Tooltip>
            <Tab
                data-tooltip-content="Templates"
                data-tooltip-place="top"
                className={`${styles.tab} ${isTabActive(1) ? styles.active : ""} templates-tab`}
            >
              <FiList className={`${styles.tabIcon} templates-icon`} />
            </Tab>
            <Tooltip anchorSelect=".templates-icon" place="top">
              Templates
            </Tooltip>
            <Tab className={`${styles.tab} ${isTabActive(2) ? styles.active : ""}`}>
              <FiSettings className={`${styles.tabIcon} config-icon`} />
            </Tab>
            <Tooltip anchorSelect=".config-icon" place="top">
              Configuration
            </Tooltip>
          </TabList>
          <TabPanel>
            <Settings editor={props.editor} currentTemplate={currentTemplate} />
          </TabPanel>
          <TabPanel>
            <TemplateList
                isLoading={status === "loading"}
                templates={templates}
                currentTemplate={currentTemplate}
                onSelectTemplate={handleSelectTemplate}
                loadMoreTemplates={handleLoadMoreTemplates}
            />
          </TabPanel>
          <TabPanel>
            <Configuration />
          </TabPanel>
        </Tabs>
      </div>
  );
}

export default SideBar;
