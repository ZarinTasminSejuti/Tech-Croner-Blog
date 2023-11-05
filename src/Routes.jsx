


import {

    createBrowserRouter,
} from "react-router-dom";
import Root from "./layouts/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
  

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
        ],
    },
  ]);
  


export default Routes;