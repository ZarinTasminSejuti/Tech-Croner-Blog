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
      {/* <motion.div
        className="grid grid-cols-3 gap-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {slicedBlog.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-slate-500 h-[500px]"
            variants={cardVariants}
          >
            <figure>
              <img className="w-full h-60" src={blog.image} alt="blog!" />
            </figure>
            <motion.div className="pt-7 h-[260]" variants={cardVariants}>
              <div>
                <h2 className="font-semibold text-xl text-slate-500 pb-3">
                  {blog.blogTitle}
                </h2>
                <p>Type: {blog.type}</p>
                <p>{blog.shortDescription}</p>
              </div>
              <motion.div className="pt-5 justify-left" variants={cardVariants}>
                <Link to={`/BlogDetails/${blog._id}`}>
                  <button className="text-blue-600 font-semibold border-none">
                    View Details ..
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div> */}

      <div className="grid grid-cols-3 gap-10">
        {slicedBlog.map((blog) => (
          <div key={blog.id}>
            <figure className="h-[200px]">
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="h-[250px] flex flex-col justify-between py-2">
              <div>
                <h2 className="card-title my-2 text-slate-500">
                  {blog.blogTitle}
                </h2>
                <p className="text-gray-400">Type: {blog.type}</p>
                <p className="text-gray-500 pt-2 text-justify break-words ...">{blog.shortDescription}</p>
              </div>
              <Link to={`/BlogDetails/${blog._id}`} className="mt-2">
                <p className="font-bold text-sm text-blue-600 hover:underline hover:decoration-solid hover:cursor-pointer w-fit">
                  View Details
                </p>
              </Link>
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
