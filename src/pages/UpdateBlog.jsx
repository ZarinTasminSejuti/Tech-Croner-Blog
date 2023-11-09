import { useLoaderData } from "react-router-dom";

import swal from "sweetalert";

const UpdateBlog = () => {
  const blog = useLoaderData();

    const {
      blogTitle,
      shortDescription,
      type,
      longDescription,
      image,
      userEmail,
      _id
    } = blog;
   console.log(_id);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const blogTitle = form.blogTitle.value;
    const shortDescription = form.shortDescription.value;
    const type = form.type.value;
    const longDescription = form.longDescription.value;
    const image = form.image.value;

    const newBlog = {
      blogTitle,
      shortDescription,
      type,
      longDescription,
      image,
      // userEmail,
    };
    console.log(newBlog);

    fetch(`https://localhost:5000/updateBlog/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Blog Updated!", "Blog updated Successfully!", "success");
        }
      });
  };

  return (
    <div className="bg-white w-full">
      <div className="py-20 w-full lg:w-[1280px] mx-auto">
        <h3 className="text-5xl text-center mb-24 font-semibold">
          <span className="text-3xl text-blue-600 font-semibold">...</span>{" "}
          Update Your Blog{" "}
          <span className="text-blue-600">{blog.blogTitle}</span>{" "}
          <span className="text-3xl text-blue-600 font-semibold">...</span>
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
                  <option value="Coding">Programming and Coding</option>
                  <option value="Web">Web Development</option>
                  <option value="Mobile">Mobile App Development</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Gadgets">Gadgets and Reviews</option>
                  <option value="SoftwareTools">Software and Tools</option>
                  <option value="TechNews">Tech News and Trends</option>
                  <option value="Hacking">Ethical Hacking</option>
                  <option value="AI">Machine Learning and AI</option>
                  <option value="Cloud">Cloud Computing</option>
                  <option value="Hardware">Hardware and DIY Projects</option>
                  <option value="Analysis">Tech Industry Analysis</option>
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
