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
        path: "/allBlog",
        element: (
    <Allblogs></Allblogs>
           
     
        ),
        loader: () => fetch("https://tech-corner-project.vercel.app/allBlog"),
      },
     
      {
        path: "/blogDetails/:_id",
        element: (
            <BlogDetails></BlogDetails>
        ),
        loader: ({ params }) =>
          fetch(`https://tech-corner-project.vercel.app/blogDetails/${params._id}`),
      },
      {
        path: "/wishlistBlogDetails/:_id",
        element: (
           <PrivateRoute> <WishlistBlogDetails></WishlistBlogDetails></PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tech-corner-project.vercel.app/wishlistBlogDetails/${params._id}`),
      },
      {
        path: "/updateBlog/:_id",
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tech-corner-project.vercel.app/updateBlog/${params._id}`),
      },
      {
        path: "/wishlist",
        element: (
      <PrivateRoute> <Wishlist></Wishlist></PrivateRoute>
           
     
        ),
        loader: () => fetch("https://tech-corner-project.vercel.app/wishlist"),
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
        loader: () => fetch("https://tech-corner-project.vercel.app/allBlog"),
      },
    ],
  },
]);

export default router;
