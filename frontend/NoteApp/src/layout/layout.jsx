import React from "react";
import HomePage from "../views/home/HomePage.jsx";
import Archived from "../views/archive/Archived.jsx";

import { Tabs } from "../components/tabs/index.jsx";
import { useState } from "react";
export const Layout = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col bg-bg-image-dots min-h-[100vh]">
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "home" && <HomePage />}
      {activeTab === "archived" && <Archived />}
    </div>
  );
};
