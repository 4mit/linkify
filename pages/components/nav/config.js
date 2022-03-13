import DashboardIcon from "./icons/dashboard.svg";
import CalanderIcon from "./icons/calander.svg";
import ProjectsIcon from "./icons/projects.svg";
import TasksIcon from "./icons/tasks.svg";
//import { ReactComponent as ReportIcon } from "./icons/report.svg";
import NavigateIcon from "./icons/navigate.svg";
import QuestionIcon from "./icons/question.svg";

const NavConfig = [
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
    title: "Calander",
    icon: <CalanderIcon />,
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

export default NavConfig;
