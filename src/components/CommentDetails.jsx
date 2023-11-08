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

  const filteredComment = comments.filter((ele) => ele.blogId === blogId)


  return (
    <div className="bg-green-500">
      <div className="bg-green-500 w-1/2 mx-auto">
      {filteredComment.map((ele) => (
    <div key={ele.id} className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={ele.userPic} alt={`User ${ele.userName}`} />
        </div>
      </div>
      <div className="chat-header">
        <h5>{ele.userName}</h5>
        {/* <time className="text-xs opacity-50">12:45</time> */}
      </div>
      <div className="chat-bubble">
        <p>{ele.comment}</p>
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
