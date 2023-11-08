
import { useLoaderData } from "react-router-dom";
import Comment from "../components/Comment";

import PropTypes from 'prop-types';



const BlogDetails = () => {
    const blogSelected = useLoaderData();
    console.log(typeof blogSelected._id);
    //const { userDetails } = useContext(AuthContext);

    return (
        <div>
         
                <div>
                    
                    <p>{blogSelected.blogTitle}</p>
                    <p>{blogSelected.shortDescription}</p>
                    <p>{blogSelected.image}</p>
                    <p>{ blogSelected.longDescription}</p>
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