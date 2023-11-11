
import { useLoaderData } from "react-router-dom";
import Comment from "../components/Comment";

import PropTypes from 'prop-types';



const BlogDetails = () => {
    const blogSelected = useLoaderData();
    console.log(typeof blogSelected._id);
    //const { userDetails } = useContext(AuthContext);

    return (
        <div className="min-h-screen my-24 w-[1280px] mx-auto p-5">
         
                <div>
                    
                    <p className="font-bold text-2xl">Blog Title: {blogSelected.blogTitle}</p>
                    <p>{blogSelected.shortDescription}</p>
                    <p>{blogSelected.image}</p>
                    <p className="text-justify w-1/2">More Details: { blogSelected.longDescription}</p>
                    <br />
            <Comment blogId = {blogSelected._id}></Comment>
                </div>
              

        </div>
    );
};

export default BlogDetails;


BlogDetails.propTypes = {
    blogId: PropTypes.string,
  };