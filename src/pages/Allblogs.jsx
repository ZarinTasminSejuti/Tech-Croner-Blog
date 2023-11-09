import { Link, useLoaderData } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "react-photo-view/dist/react-photo-view.css";

// import { useState } from "react";
import { FaEdit, FaHeart } from "react-icons/fa";
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

  // const { _id } = useParams();
  //  console.log(_id);
  // const wishlistDetails = blogCollection.filter(
  //   (singleList) => singleList._id === _id
  // );

  

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
    <div className="">
      <div className="p-7 w-full bg-cyan-100">
        <p className="ml-5 font-bold text-2xl">All Blogs</p>
      </div>
      <div className="lg:w-[1280px] my-20 mx-auto ">
        <h2 className="text-4xl text-blue-600 text-center p-3 lg:p-0 font-semibold mb-10">
          Explore All Blogs
        </h2>

        {/* search field */}
        <div className="bg-cyan-100 w-full p-3 my-5 rounded-md">
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

        <div className=" space-y-4">



          {blogCollection.map((blogElement) => (
            <div
              className="  rounded-lg shadow-md"
              key={blogElement._id}
            >
              <div className="flex flex-col lg:flex-row items-center ">
                <div className="w-full lg:w-1/3">
                  <PhotoProvider>
                    <PhotoView>
                      <img
                        src={blogElement.image}
                        alt=""
                        className="p-6 rounded-[32px]"
                        style={{ width: "420px", height: "270px" }}
                        data-aos="zoom-out-right"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>

                <div
                  data-aos="zoom-in"
                  className="card-body bg-green-100 lg:w-2/3 md:relative"
                >
                  <div className="my-3 flex justify-between bg-red-400">
                    <div className="bg-pink-400 space-y-3 w-11/12">
                    <h2 className="text-2xl font-bold">
                      <span className=" text-blue-700">
                        Blog Title:</span>{" "}{blogElement.blogTitle}
                    </h2>

                    <p>
                      <span className="text-blue-700  font-medium">
                        Short Description:
                      </span>{" "}
                      {blogElement.shortDescription}
                    </p>
                    <h2>
                      <span className="text-blue-700 font-medium">
                        Category:
                      </span>{" "}
                      {blogElement.type}
                      </h2>
                      {/* view details button */}
                    <Link to={`/BlogDetails/${blogElement._id}`}>
                        <button className="col-span-1 btn mt-10 text-white border-none hover:text-white hover:bg-black bg-gradient-to-r from-blue-600 to-cyan-500 hover:bg-gradient-to-l hover:from-blue-600 hover:to-cyan-500">
                          View Details
                        </button>
                    </Link>
                    </div>

                    
                    <div>
                      
                    




                    <div className="card-actions w-full bg-yellow-300 justify-between items-center">
                    <div className="flex- flex-col">
                     

                      {/* Edit button */}
                      <Link to={`/updateBlog/${blogElement._id}`}>
                        <button className="btn w-full text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:bg-gradient-to-l hover:from-blue-600 hover:to-cyan-500 border-none hover:text-white text-xl hover:bg-black">
                          <FaEdit></FaEdit>
                        </button>
                      </Link>

                      {/* wishlist button */}

                      <FaHeart
                        onClick={() => handleAddWishlist(blogElement)}
                        className="text-cyan-500  cursor-pointer text-3xl hover:text-blue-600"
                      ></FaHeart>

                  
                    </div>
                  </div>
</div>
                     
                  </div>

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
