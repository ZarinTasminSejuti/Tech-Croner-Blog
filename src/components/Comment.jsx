import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CommentDetails from "./CommentDetails";
import PropTypes from "prop-types";
import { useState } from "react";

const Comment = ({ blogId }) => {
  const [updateComment, setUpdateComment] = useState(false);

  const { userDetails } = useContext(AuthContext);

  const handleComment = (event) => {
    event.preventDefault();

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const form = event.target;
    const userName = userDetails.displayName;
    const userPic = userDetails.photoURL;
    const comment = form.comment.value;
    const dateTime = new Date().toLocaleString("en-US", options);
    //   const blogID =

    const commentObj = {
      blogId,
      userName,
      userPic,
      comment,
      dateTime,
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
        setUpdateComment(!updateComment);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-10 mt-20 mb-28 ">
        <div className="col-span-8">
          <CommentDetails
            blogId={blogId}
            updateComment={updateComment}
          ></CommentDetails>
        </div>
        <div className="col-span-8">
          <form onSubmit={handleComment}>
            {/* <header className="footer-title">Any Suggestion</header> */}

            <fieldset className="form-control ">
              <div className="w-full my-6">
                <textarea
                  type="text"
                  name="comment"
                  placeholder="comment ..."
                  className="input input-bordered resize-y rounded-3xl w-full h-56 p-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-fit rounded-full bg-slate-800 px-5 py-2 text-white"
              >
                POST COMMENT
              </button>
            </fieldset>
          </form>
     
        </div>
      </div>
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  blogId: PropTypes.string,
};
