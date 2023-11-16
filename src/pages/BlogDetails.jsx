import { Link, useLoaderData } from "react-router-dom";
import Comment from "../components/Comment";

import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

const BlogDetails = () => {
  const blogSelected = useLoaderData();

  
  //const { userDetails } = useContext(AuthContext);

  return (
    <div className=" px-5 lg:px-24">
      <div className="py-14 ">
        <p className="font-bold text-5xl text-blue-600">
          {blogSelected.blogTitle}
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10">
        <div className="lg:col-span-8 ">
          <div className="my-auto mx-auto text-center ">
            <img className="w-full h-auto" src={blogSelected.image} alt="" />
          </div>
          <p className="text-justify text-lg font-normal mb-2 italic mt-5 text-gray-500">
            Category: {blogSelected.type}
          </p>
          <p className="text-justify text-base font-light leading-8 text-gray-500">
            {blogSelected.longDescription}
          </p>

          <Link to={`/updateBlog/${blogSelected._id}`}>
                    <p className=" flex  items-center gap-2 font-bold text-md text-blue-500 hover:underline hover:decoration-solid hover:cursor-pointer mt-10 mb-10 lg:mb-0">
                    <FaEdit></FaEdit>Edit Blog
                    </p>
                  </Link>
        </div>
        <div className=" bg-gray-50 col-span-4 flex flex-col items-center py-12 h-fit">
          <div className="w-44 h-44 text-center ">
            <img
              className="w-full h-auto rounded-full"
              src={blogSelected.userImage}
              alt={blogSelected.userName}
            />
          </div>

          <p className="mt-5 text-blue-600 text-xl font-bold font-serif">{blogSelected.userName}</p>
          <p className="text-gray-500 font-light">{blogSelected.userEmail}</p>
        </div>
      </div>
      <br />
      <Comment blogId={blogSelected._id} blogEmail={blogSelected.userEmail}   ></Comment>
    </div>
  );
};

export default BlogDetails;

BlogDetails.propTypes = {
  blogId: PropTypes.string,
};
