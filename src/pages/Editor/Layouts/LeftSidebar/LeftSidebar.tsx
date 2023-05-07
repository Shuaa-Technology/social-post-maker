import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FiSettings, FiList, FiCalendar, FiUsers } from "react-icons/fi";

import styles from "./LeftSidebar.module.scss";

import TemplateList from "../../../../components/TemplateList/TemplateList";
import Settings from "../../../../components/Settings/Settings";

function LeftSidebar() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setTabIndex(index);
  };


  const isTabActive = (index: number): boolean => tabIndex === index;

  return (
    <div className={styles.leftSidebar}>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={handleTabSelect}
        className={styles.tabContainer}
      >
        <TabList className={styles.tabList}>
          <Tab
            className={`${styles.tab} ${isTabActive(0) ? styles.active : ""}`}
          >
            <FiSettings className={styles.tabIcon} />
            <span>TBD</span>
          </Tab>
          <Tab
            className={`${styles.tab} ${isTabActive(1) ? styles.active : ""}`}
          >
            <FiList className={styles.tabIcon} />
            <span>Templates</span>
          </Tab>
          <Tab
            className={`${styles.tab} ${isTabActive(2) ? styles.active : ""}`}
          >
            <FiCalendar className={styles.tabIcon} />
            <span>TBD</span>
          </Tab>
        </TabList>

        <TabPanel>
          <Settings />
        </TabPanel>
        <TabPanel>
          <TemplateList />
        </TabPanel>
        <TabPanel>
          <h2>TBD Panel</h2>
        </TabPanel>
        <TabPanel>
          <h2>TBD Panel</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default LeftSidebar;
