import { Link, useLoaderData } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "react-photo-view/dist/react-photo-view.css";

// import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Allblogs = () => {
  // const [search, setSearch] = useState([]);

  const blogCollection = useLoaderData();
  const { userDetails } = useContext(AuthContext);

  // search field with material ui

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "100ch",
      },
    },
  }));


  //wishlist post method
  const handleAddWishlist = (blogElement) => {
    const blogTitle = blogElement.blogTitle;
    const type = blogElement.type;
    const shortDescription = blogElement.shortDescription;
    const image = blogElement.image;
    const userEmail = userDetails.email;

    const newWishlist = {
      blogTitle,
      type,
      shortDescription,
      image,
      userEmail,
    };

    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWishlist),
    })
      .then((response) => response.json())
      .then((data) => {
        console.dir(data);
        if (data.insertedId) {
          swal(
            "Blog Added to Wishlist!",
            "New Blog added in Wishlist Successfully!",
            "success"
          );
        }
      });
  };

  return (
    <div className="px-24">
      <div className="py-10 text-black ">
        <p className="font-bold text-3xl">All Blogs</p>
      </div>
      <div className="">
       

        {/* search field */}
        <div className="bg-gray-100 w-1/2 my-10 rounded-md mx-auto">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by blog title…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>

        {/* All Blogs field */}


        <div className="grid grid-cols-3 gap-10">
          {blogCollection.map((blog) => (
            <div key={blog.id} className="mb-10 ">
            <PhotoProvider>
                    <PhotoView src={blog.image}>
                <img
                  src={blog.image}
                  alt="blog"
                  className="w-full h-[250px]"
                />
              </PhotoView>
                  </PhotoProvider>
              <div className="h-[250px] flex flex-col justify-between py-2">
                <div>
                  <h2 className="card-title my-2 text-black">
                    {blog.blogTitle}
                  </h2>
                  <p className="text-gray-400 text-xs">Category: {blog.type}</p>
                  <p className="text-gray-500 pt-2 text-justify break-words ...">
                    {blog.shortDescription}
                  </p>
                </div>
               
                <div className="flex gap-5">
                <Link to={`/BlogDetails/${blog._id}`} className="">
                  <p className="font-bold text-sm text-blue-500 hover:underline hover:decoration-solid hover:cursor-pointer">
                    View Details
                  </p>
                </Link>
                <Link to={`/updateBlog/${blog._id}`}>
                  <p className="font-bold text-sm text-blue-500 hover:underline hover:decoration-solid hover:cursor-pointer">
                    Edit
                  </p>
                </Link>

                <FaHeart
                  onClick={() => handleAddWishlist(blog)}
                  className="text-blue-500  cursor-pointer text-xl hover:text-cyan-600"
                ></FaHeart>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allblogs;
