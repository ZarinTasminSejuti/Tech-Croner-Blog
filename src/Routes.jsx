import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import AddBlog from "./pages/AddBlog";
import Allblogs from "./pages/Allblogs";
import BlogDetails from "./pages/BlogDetails";
import ErrorPage from "./pages/ErrorPage";
import FeaturedBlogs from "./pages/FeaturedBlogs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateBlog from "./pages/UpdateBlog";
import Wishlist from "./pages/Wishlist";
import WishlistBlogDetails from "./pages/WishlistBlogDetails";
import PrivateRoute from "./PrivateRoute";


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
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addBlog",
        element: 
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ,
      },
      {
        path: "/allBlogs",
        element: <Allblogs></Allblogs>,
        loader: () => fetch("http://localhost:5000/allBlog"),
      },
      {
        path: "/blogDetails/:_id",
        element: (
            <BlogDetails></BlogDetails>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogDetails/${params._id}`),
      },
      {
        path: "/wishlistBlogDetails/:_id",
        element: (
            <WishlistBlogDetails></WishlistBlogDetails>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/wishlistBlogDetails/${params._id}`),
      },
      {
        path: "/updateBlog/:_id",
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateBlog/${params._id}`),
      },
      {
        path: "/wishlist",
        element: (
      <PrivateRoute> <Wishlist></Wishlist></PrivateRoute>
           
     
        ),
        loader: () => fetch("http://localhost:5000/wishlist"),
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
        loader: () => fetch("http://localhost:5000/allBlog"),
      },
    ],
  },
]);

export default router;
