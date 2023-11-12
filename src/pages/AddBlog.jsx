import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../providers/AuthProvider";

const AddBlog = () => {
  const navigate = useNavigate();
  const { userDetails, effect, setEffect } = useContext(AuthContext);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const form = event.target;
    const blogTitle = form.title.value;
    const shortDescription = form.shortDescription.value;
    const type = form.type.value;
    const longDescription = form.longDescription.value;
    const image = form.image.value;
    const userEmail = userDetails.email;
    const blogPostDateTime = new Date().toLocaleString("en-US", options);
    const submitTime = Math.floor(Date.now() / 1000); //Time in seconds
    const userName = userDetails.displayName;
    const userImage = userDetails.photoURL

    const newBlog = {
      blogTitle,
      shortDescription,
      type,
      longDescription,
      image,
      userEmail,
      submitTime,
      blogPostDateTime,
      userName,
      userImage,
    };

    //send data to the server
    fetch("http://localhost:5000/addBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Blog Added!", "New Blog added Successful!", "success");
          form.reset();
          navigate("/addBlog");
          setEffect(!effect);
        }
      })
      .catch(() => {
        swal("Failed!", "Wrong credentials! Please Add again.", "error");
      });
  };

  return (
    <div className="px-24 bg-slate-100">
      <div className="py-10 text-black ">
        <p className="font-bold text-4xl">Add New
          Blog</p>
      </div>

      <div className=" w-full lg:w-[1280px] pt-10 pb-20">
       
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
                  placeholder="Enter blog title..."
                  name="title"
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
                  <option value="Programming and Coding">
                    Programming and Coding
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Gadgets and Reviews">
                    Gadgets and Reviews
                  </option>
                  <option value="Software and Tools">Software and Tools</option>
                  <option value="Tech News and Trends">
                    Tech News and Trends
                  </option>
                  <option value="Ethical Hacking">Ethical Hacking</option>
                  <option value="Machine Learning and AI">
                    Machine Learning and AI
                  </option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Hardware and DIY Projects">
                    Hardware and DIY Projects
                  </option>
                  <option value="Tech Industry Analysis">
                    Tech Industry Analysis
                  </option>
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
                  placeholder="Enter long description..."
                  name="longDescription"
                  className="input rounded-md bg-white input-bordered resize-y h-28 w-full"
                ></textarea>
              </label>
            </div>
          </div>

          {/* add product button  */}
          <div className="my-10">
            <input
              type="submit"
              value="Add New Blog"
              className="btn text-white bg-blue-600 border-none hover:text-white hover:bg-blue-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
