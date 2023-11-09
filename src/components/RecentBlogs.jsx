import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecentBlogs = ({ allBlog }) => {
  const sortedBlog = allBlog.sort((a, b) => a.submitTime - b.submitTime);
  const slicedBlog = sortedBlog.slice(0, 3);

  return (
    <div className="px-24 ">
      <div className="p-5 text-center pb-24">
        <h1 className="text-4xl font-bold text-blue-600">Recent Blogs</h1>
      </div>
      <div className="grid grid-cols-3 gap-7 ">
        {slicedBlog.map((blog) => (
          <div key={blog.id} className="bg-slate-500 h-[500px]">
            <figure className="">
              <img className="w-full h-60" src={blog.image} alt="blog!" />
            </figure>
            <div className="pt-7 h-[260]">
              <div>
                <h2 className="font-semibold text-xl text-slate-500 pb-3">
                  {blog.blogTitle}
                </h2>
                <p>Type: {blog.type}</p>
                <p>{blog.shortDescription}</p>
                
              </div>
              <div className="pt-5 justify-left">
                <Link to={`/BlogDetails/${blog._id}`}>
                  <button className=" text-blue-600 font-semibold border-none">
                    View Details ..
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;

RecentBlogs.propTypes = {
  allBlog: PropTypes.array,
};
