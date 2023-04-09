import HomeIcon from "./icons/home";
import PeopleIcon from "./icons/people";
import AnalyticsIcon from "./icons/analytics";
import MonitoringIcon from "./icons/monitoring";
import DemographicsIcon from "./icons/demographics";
import { getNextPatientId } from "../../utils/utils";
import DashboardIcon from "./icons/dashboard";

const patientId = getNextPatientId();

const data = [
	{
		title: "Home",
		icon: <HomeIcon />,
		link: "/",
	},
	{
		title: "Patients Dashboard",
		icon: <DashboardIcon />,
		link: `/patient/${patientId}/dashboard`,
	},
	{
		title: "Patients",
		icon: <PeopleIcon />,
		link: "/admin/patients",
	},
	{
		title: "Analytics",
		icon: <AnalyticsIcon />,
		link: "/admin/analytics",
	},
	{
		title: "Games",
		icon: <MonitoringIcon />,
		link: "/admin/games",
	},
	// {
	//   title: 'Profile',
	//   icon: <DemographicsIcon />,
	//   link: '/admin/profile',
	// },
];

export default data;
