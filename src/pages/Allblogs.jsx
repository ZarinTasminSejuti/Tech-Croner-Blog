import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import swal from "sweetalert";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Allblogs = () => {

  const blogCollection = useLoaderData();
  const { userDetails } = useContext(AuthContext);


  const [searchText, setSearchText] = useState("");
  const [filteredBlog, setFilteredBlog] = useState(blogCollection);



//Search function  
  const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase())

    const filteredSearchedBlog = blogCollection.filter(blog => 
      blog.blogTitle.toLowerCase().includes(searchText)
    )
    setFilteredBlog(filteredSearchedBlog);
    // console.log(filteredBlog);
  }


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

  
  //Category or type counts
  const countByType = blogCollection.reduce((acc, obj) => {
    const { type } = obj;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  //Get as object
  const resultArray = Object.keys(countByType).map((type) => ({
    type,
    count: countByType[type],
  }));
 
  //All blog count
  const allBlogCount = resultArray.reduce(
    (total, item) => total + item.count,
    0
  );

//  //Handle All Button
 const handleAllButton = () => {
  setFilteredBlog(blogCollection);
}
  
//   //Handle Category Button
  const handleCategoryButton  = (category) => {
    const filteredCategory = blogCollection.filter(blog => 
      blog.type === category
    )
    setFilteredBlog(filteredCategory);
  }





  return (
    <div className="px-24 bg-slate-100">
      <div className="py-10 text-black ">
        <p className="font-bold text-3xl">All Blogs</p>
      </div>
      <div className="text-center">
        {/* search field */}
        <div className="my-10 rounded-md mx-auto">
          <input
            className="bg-gray-100 w-1/2 px-5 py-2 rounded-full border-gray-400 border-solid border-2"
            type="text"
          //  value={searchText}
            onChange={handleSearch}
              placeholder="Search by blog title…"
            />
         
        </div>
        <div className="mb-10">
          <div className="justify-center  flex flex-wrap w-4/5 mx-auto">
            <button
                 onClick={() => handleAllButton()}
              className=" text-sm m-2 rounded-full py-2 px-4 w-fit flex items-center font-light bg-blue-600 text-white">
              All
              <span className="bg-cyan-500 text-white  ml-2 rounded-full inline-block w-5 h-5">
                {allBlogCount}
              </span>
            </button>

            {resultArray.map((item, index) => (
              <button
                onClick={() => handleCategoryButton(item.type)}
                key={index}
                className="bg-cyan-500 text-white text-sm m-2 rounded-full py-2 px-4 w-fit flex items-center font-light"
              >
                {item.type}
                <span className="bg-gray-100 text-blue-600  ml-2 rounded-full inline-block w-5 h-5">
                  {item.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* All Blogs field */}
        <div className="grid grid-cols-3 gap-10 mb-20">
          {filteredBlog.map((blog, index) => (
            <div key={index + 1} className="mb-10 ">
              <PhotoProvider>
                <PhotoView src={blog.image}>
                  <img
                    src={blog.image}
                    alt="blog"
                    className="w-full h-[250px] bg-cover"
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
