import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPath } from "./admin.route";
import { facultyPaths } from "./feculty.routes";
import { studentPaths } from "./student.routes";
import routeGenerator from "../utils/routeGenerator";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPath)
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths)
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths)
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
