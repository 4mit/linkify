import React from "react";

import DashboardIcon from "./icons/dashboard.svg";
import CalanderIcon from "./icons/calander.svg";
import ProjectsIcon from "./icons/projects.svg";
import TasksIcon from "./icons/tasks.svg";
//import { ReactComponent as ReportIcon } from "./icons/report.svg";
import NavigateIcon from "./icons/navigate.svg";
import QuestionIcon from "./icons/question.svg";

const navConfig = [
  {
    title: "web site link",
    icon: <DashboardIcon />,
  },
  {
    title: "Projects",
    icon: <ProjectsIcon />,
  },
  {
    title: "My Tasks",
    icon: <TasksIcon />,
  },
  {
    title: "Time Manage",
    icon: <NavigateIcon />,
  },
  {
    title: "Setting",
    icon: <QuestionIcon />,
  },
];

const Nav = () => {
  return (
    <nav>
      <div>
        {navConfig.map((n, i) => {
          return (
            <a
              key={i}
              class="cursor-pointer w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
              href={n.link}
            >
              <span class="text-left">{n.icon}</span>
              <span class="mx-4 text-sm font-normal">{n.title}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
