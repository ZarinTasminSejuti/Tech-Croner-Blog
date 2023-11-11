import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const RecentBlogs = ({ allBlog }) => {
  const sortedBlog = allBlog.sort((a, b) => a.submitTime - b.submitTime);
  const slicedBlog = sortedBlog.slice(0, 3);

  // const containerVariants = {
  //   hidden: {},
  //   visible: { transition: { staggerChildren: 0.2 } },
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       ease: "linear",
  //       duration: 2,
  //       x: { duration: 1 },
  //     },
  //   },
  // };

  return (
    <div className="px-24 min-h-screen mt-16">
      <div className="p-5 text-center pb-24">
        <h1 className="text-4xl font-bold text-blue-600">Recent Blogs</h1>
      </div>

      <div className="grid grid-cols-12 grid-rows-2 gap-5 ">
        {/* md:gap-20 md:grid-rows-none md:grid-cols-none md:grid-cols-12 md:grid-rows-2 */}
        {slicedBlog.map((blog, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "col-span-7 row-span-2 relative "
                : "col-span-5 row-span-1 relative"
            }
          >
            <figure className={index === 0 ? "h-[320px]" : "h-[150px]"}>
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-full rounded-xl bg-cover"
              />
            </figure>

            <div>
            <div className="absolute bottom-0 w-full p-5">
              <div className="hover:invisible  ">
                <h2 className="card-title my-2 text-blue-600">
                  {blog.blogTitle}
                </h2>
                <p className="text-cyan-500">Type: {blog.type}</p>
              </div>
            </div>

            <div className="absolute bottom-0 w-full p-5">
              <div className="hover:opacity-100  opacity-0">
                <p className="text-gray-500 pt-2 text-justify break-words">
                  {blog.shortDescription}
                </p>

                <Link to={`/BlogDetails/${blog._id}`} className="mt-2">
                  <p className="font-bold text-sm text-cyan-600 hover:underline hover:decoration-solid hover:cursor-pointer w-fit">
                    View Details
                  </p>
                </Link>
              </div>
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
