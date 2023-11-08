import PropTypes from 'prop-types';


const RecentBlogs = ({ allBlog }) => {

    const sortedBlog = allBlog.sort((a, b) => a.submitTime - b.submitTime)

    const slicedBlog = sortedBlog.slice(0, 3);
    console.log(slicedBlog);
    return (
        <div>
            {slicedBlog.map((blog) => 
                <div key={blog.id}>
                    
                    <p>{blog.blogTitle}</p>
                    <p>{blog.shortDescription}</p>
                    <p>{blog.image}</p>
                    <p>{ blog.longDescription}</p>
                    <br />
            
                </div>
              
      )}
        </div>
    );
};

export default RecentBlogs;


RecentBlogs.propTypes = {
    allBlog: PropTypes.array,
  };