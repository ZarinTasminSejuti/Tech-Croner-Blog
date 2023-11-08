import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CommentDetails from "./CommentDetails";
import PropTypes from 'prop-types';
import { useState } from "react";

const Comment = ({ blogId }) => {
    const [updateComment, setUpdateComment] = useState (false)

    const { userDetails } = useContext(AuthContext);

  const handleComment = (event) => {
    event.preventDefault();

    const form = event.target;
    const userName = userDetails.displayName;
    const userPic = userDetails.photoURL;
      const comment = form.comment.value;
    //   const blogID = 
      

      const commentObj = {
        blogId,
        userName,
        userPic,
        comment,

    };

   
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentObj),
    })
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          event.target.reset();
          setUpdateComment (!updateComment)
      });
  };

  return (
    <div>
      <form onSubmit={handleComment}>
        {/* <header className="footer-title">Any Suggestion</header> */}

        <fieldset className="form-control ">
          <label>
            <textarea
              type="text"
              name="comment"
              placeholder="comment ..."
              className="input input-bordered w-1/2 resize-y"
            ></textarea>
          </label>
          <Button type="submit" variant="contained" className="w-20 ml-auto mr-0" endIcon={<SendIcon />}>
            Send
          </Button>
        </fieldset>
          </form>
          
          <CommentDetails blogId = {blogId} updateComment = {updateComment}></CommentDetails>
    </div>
  );
};

export default Comment;


Comment.propTypes = {
    blogId: PropTypes.string,
  };
