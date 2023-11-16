import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";

const UpdateBlog = () => {
  const blog = useLoaderData();
  const {effect,
    setEffect } = useContext(AuthContext);
  
  const {
    _id,
  } = blog;
  
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    const blogTitle = form.blogTitle.value;
    const shortDescription = form.shortDescription.value;
    const type = form.type.value;
    const longDescription = form.longDescription.value;
    const image = form.image.value;
    const editDateTime = new Date().toLocaleString("en-US", options);
    const submitTime = Math.floor(Date.now() / 1000); //Time in seconds


    const updateBlog = {
      blogTitle,
      shortDescription,
      type,
      longDescription,
      image,
      editDateTime,
      submitTime,
      // userEmail,
    };


    fetch(`https://tech-corner-project.vercel.app/updateBlog/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(updateBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Blog Updated!", "Blog updated Successfully!", "success");
         
          
          setEffect(!effect)
          event.target.reset();
    
        }
      });
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* <div className="p-7 w-full "><p className="ml-5 font-bold text-3xl">Edit Blog</p></div> */}
      <div className="py-20 w-full lg:w-[1280px] mx-auto">
        <h3 className="text-5xl text-center mb-24 font-semibold">
          <span className="text-3xl text-blue-600 font-semibold"></span> Edit{" "}
          <span className="font-semibold">Blog</span>
          <br />
          <span className="text-blue-600">{blog.blogTitle}</span>
        </h3>
        <form onSubmit={handleSubmit} className="p-4 lg:p-0">
          {/* row one */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 lg:mr-5">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Blog Title
                </span>
              </label>
              <label>
                <input
                  type="text"
                  defaultValue={blog.blogTitle }
                  
                  placeholder="Enter blog title..."
                  name="blogTitle"
                  className="input input-bordered bg-white w-full rounded-md"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Image Url
                </span>
              </label>
              <label>
                <input
                  type="text"
                  defaultValue={blog.image }
                  placeholder="Enter blog image..."
                  name="image"
                  className="input input-bordered bg-white w-full rounded-md"
                  required
                />
              </label>
            </div>
          </div>

          {/* row one */}
          <div className="md:flex ">
            <div className="form-control md:w-1/2 lg:mr-5">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Category
                </span>
              </label>
              <label>
                <select
                  name="type"
                  className="select rounded-md bg-white input-bordered w-full"
                >
                  <option defaultValue="type" disabled>
                    Select a Category type...
                  </option>
                  <option value="Programming and Coding">Programming and Coding</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Gadgets and Reviews">Gadgets and Reviews</option>
                  <option value="Software and Tools">Software and Tools</option>
                  <option value="Tech News and Trends">Tech News and Trends</option>
                  <option value="Ethical Hacking">Ethical Hacking</option>
                  <option value="Machine Learning and AI">Machine Learning and AI</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Hardware and DIY Projects">Hardware and DIY Projects</option>
                  <option value="Tech Industry Analysis">Tech Industry Analysis</option>
                </select>
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Short Description
                </span>
              </label>
              <label>
                <input
                  type="text"
                  defaultValue={blog.shortDescription }
                  placeholder="Enter short description..."
                  name="shortDescription"
                  className="input rounded-md input-bordered w-full bg-white"
                  required
                />
              </label>
            </div>
          </div>

          {/* row one */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Long Description
                </span>
              </label>
              <label>
                <textarea
                  type="text"
                  defaultValue={blog.longDescription }
                  placeholder="Enter long description..."
                  name="longDescription"
                  className="input rounded-md bg-white input-bordered resize-y h-28 w-full"
                ></textarea>
              </label>
            </div>
          </div>

          {/* update blog button  */}
          <div className="my-10 text-center">
            <input
              type="submit"
              value="Update Blog"
              className="btn w-1/5 text-white bg-blue-600 border-none hover:text-white hover:bg-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
