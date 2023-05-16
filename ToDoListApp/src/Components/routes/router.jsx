import { createBrowserRouter, RouterProvider,useLocation } from "react-router-dom";

import Todos from "../todos";
import { AddTodos } from "../addTodos";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Todos />,
      },
      {
        path: ":id",
        element: <AddTodos/>,
      },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;