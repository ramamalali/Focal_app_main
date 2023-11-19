import { Gestroutes } from "../modules/Guest/routers/Gestroutes";
import { jopSeekerRoutes } from "../modules/JobSeeker/routers/jopSeekerRoutes";
import App from "./../App";


export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      ...Gestroutes,
      ...jopSeekerRoutes,


    ],
  },
];
