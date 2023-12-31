import React from "react";
import { RiInboxArchiveFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

export const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <ul className="menu bg-base-200 lg:menu-horizontal justify-evenly rounded-box">
      <li className={activeTab === "home" ? "active" : ""}>
        <a
          className={`text-xl text-white hover:bg-accent hover:text-accent-content ${
            activeTab === "home" ? "bg-accent" : "bg-primary"
          }`}
          onClick={() => onTabChange("home")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </a>
      </li>
      <li className={activeTab === "archived" ? "active" : ""}>
        <a
          className={`text-xl text-white hover:bg-accent hover:text-accent-content ${
            activeTab === "archived" ? "bg-accent" : "bg-primary"
          }`}
          onClick={() => onTabChange("archived")}
        >
          <RiInboxArchiveFill />
          Archived
        </a>
      </li>
      <div className="dropdown dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle avatar text-4xl text-primary"
        >
          <RxAvatar />
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box"
        >
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </ul>
  );
};
