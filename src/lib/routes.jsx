import App from "../App";
import Home from "../pages/Home";

const route = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
