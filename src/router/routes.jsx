import Home from "../pages/Home/Home";
import Participants from "../pages/Participants/Participants";
import Register from "../pages/Register/Register";

import { HOME_URL, PARTICIPANTS_URL, REGISTER_URL } from "../utils/consts";

export const routes = [
  {
    path: HOME_URL,
    element: <Home />,
  },
  {
    path: PARTICIPANTS_URL,
    element: <Participants />,
    children: [{ path: ":id", element: <Participants /> }],
  },
  {
    path: REGISTER_URL,
    element: <Register />,
    children: [{ path: ":id", element: <Register /> }],
  },
];
