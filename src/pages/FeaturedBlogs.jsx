
import MUIDataTable from "mui-datatables";
import { useLoaderData } from "react-router-dom";
import Avatar from "../components/Avatar.jsx";

const FeaturedBlogs = () => {

  let data = [];

  const featuredCollection = useLoaderData();

  const sortedFeatureBlog = featuredCollection.sort(
    (a, b) => b.longDescription.length - a.longDescription.length
  );

  const slicedFeaturedBlog = sortedFeatureBlog.slice(0, 10);

  slicedFeaturedBlog.forEach((ele, index) => {
    data.push([
      index + 1,
      ele.blogTitle,
      ele.userEmail,
      <Avatar key={index + 1} ele={ele.image} />,
    ]);
  });

  const columns = ["Serial", "Blog Title", "Blog Owner", "Owner Avatar"];

  //   const options = {
  //     filterType: "checkbox",
  //   };
  return (
    <div className="min-h-screen px-24">
      <div className="py-10 text-black ">
        <p className="font-bold text-3xl">Featured Blogs</p>
      </div>

    
              <MUIDataTable
                
          data={data}
          columns={columns}
          // options={options}
        />

    </div>
  );
};

export default FeaturedBlogs;
