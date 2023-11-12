import { useLoaderData } from "react-router-dom";
import Comment from "../components/Comment";

import PropTypes from "prop-types";

const BlogDetails = () => {
  const blogSelected = useLoaderData();
  console.log(typeof blogSelected._id);
  //const { userDetails } = useContext(AuthContext);

  return (
    <div className=" ">
      <div className="py-10 text-black px-24">
        <p className="font-bold text-3xl">Blog Details</p>
      </div>

      <div
        style={{ backgroundImage: `url('${blogSelected.image}')` }}
        className="h-96 w-full flex mb-20 bg-cover bg-center"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        ></div>
        <div className="w-1/2 my-auto mx-auto text-center">
          <p className="font-bold text-4xl text-white">
            Blog Title: {blogSelected.blogTitle}
          </p>
        </div>
      </div>

      <div className=" px-24">
        <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-8">
                  <p className="text-justify text-lg font-normal mb-2 italic">Category: {blogSelected.type}</p>
            <p className="text-justify text-lg font-light leading-8">{blogSelected.longDescription}</p>
          </div>
          <div className="border-solid border border-gray-400 bg-gray-100 col-span-4 ">
            <p className="">More Details:</p>
          </div>
        </div>
        <br />
        <Comment blogId={blogSelected._id}></Comment>
      </div>
    </div>
  );
};

export default BlogDetails;

BlogDetails.propTypes = {
  blogId: PropTypes.string,
};
