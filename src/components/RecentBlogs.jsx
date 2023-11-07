import PropTypes from 'prop-types';

const RecentBlogs = ({ allBlog }) => {

  
    
    return (
        <div>
            {allBlog.map((blog) => 
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