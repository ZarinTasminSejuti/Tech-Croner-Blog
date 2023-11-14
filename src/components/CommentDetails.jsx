import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CommentDetails = ({ blogId, updateComment }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/comment")
      .then((response) => response.json())
      .then((result) => {
        setComments(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [updateComment]);

  const filteredComment = comments.filter((ele) => ele.blogId === blogId);

  return (

      <div>
        <div className="mb-12">
          <p className="text-2xl">Comments</p>
        </div>
        {filteredComment.map((ele) => (
          <div key={ele._id} className="mb-10 ">
            <div className="w-full inline-flex gap-7 ">
            <div className="avatar">
              <div className="w-20 h-20 ">
                <img
                  className=" rounded-full"
                  src={ele.userPic}
                  alt={`User ${ele.userName}`}
                />
                </div>
                </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap">
                <p className="font-semibold mr-5">{ele.userName}</p>
                <p className="text-slate-500 italic">{`says ${ele.dateTime}`}</p>
                </div>
                <p className="mt-1 text-gray-500 font-light leading-7 text-justify">
                  {ele.comment}
                </p>
               
              </div>
              
            </div>
          </div>
        ))}
      </div>

  );
};

export default CommentDetails;

CommentDetails.propTypes = {
  blogId: PropTypes.string,
  updateComment: PropTypes.bool,
  keyValue: PropTypes.string,
};
