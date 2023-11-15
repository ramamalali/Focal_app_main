
import { businessroutes } from "../modules/BusinessOwner/routers/route";

import App from "./../App";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      ...businessroutes,
  
    ],
  },
];
