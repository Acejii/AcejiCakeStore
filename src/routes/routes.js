import Home from "../pages/Home/Home";
import BirthdayCake from "../pages/BirthdayCake/BirthdayCake";
import Cookies from "../pages/Cookies/Cookies";
import Brownie from "../pages/Brownie/Brownie";
import Cupcake from "../pages/Cupcake/Cupcake";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/birthdaycake", component: <BirthdayCake /> },
  { path: "/cookies", component: <Cookies /> },
  { path: "/brownie", component: <Brownie /> },
  { path: "/cupcake", component: <Cupcake /> },
];
