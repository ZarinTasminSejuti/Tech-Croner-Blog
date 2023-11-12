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
      <div className="mt-10">
        {filteredComment.map((ele) => (
          <div key={ele.id} className="mb-8 ">
            <div className="flex gap-6">
              <div className="w-20">
                <img
                  className="rounded-full w-full h-auto"
                  src={ele.userPic}
                  alt={`User ${ele.userName}`}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex">
                <p className="font-semibold mr-5">{ele.userName}</p>
                <p className="text-slate-500">{`says ${ele.dateTime}`}</p>
                </div>
                <p className="mt-1 text-slate-500 font-light leading-7">
                  {ele.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentDetails;

CommentDetails.propTypes = {
  blogId: PropTypes.string,
  updateComment: PropTypes.bool,
};
