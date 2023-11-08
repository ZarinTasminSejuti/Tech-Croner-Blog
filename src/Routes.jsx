import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import AddBlog from "./pages/AddBlog";
import Allblogs from "./pages/Allblogs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateBlog from "./pages/UpdateBlog";
import Wishlist from "./pages/Wishlist";
import PrivateRoute from "./providers/PrivateRoute";

const router = createBrowserRouter([
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
        element:<Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoute>
           <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBlogs/",
        element:<Allblogs></Allblogs> ,
        loader: () => fetch("http://localhost:5000/addBlog"),
        
      },
      {
        path: "/updateBlog/:_id",
        element: (
          <PrivateRoute>
          <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/${params._id}`),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
           <Wishlist></Wishlist>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/wishlist"),
       
      },
      
    ],
  },
]);

export default router;
