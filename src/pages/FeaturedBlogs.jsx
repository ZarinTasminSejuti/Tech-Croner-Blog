
import MUIDataTable from "mui-datatables";
import { useLoaderData } from "react-router-dom";
import Avatar from "../components/Avatar.jsx";
import Serial from "../components/Serial.jsx";

const FeaturedBlogs = () => {

  let data = [];

  const featuredCollection = useLoaderData();

  const sortedFeatureBlog = featuredCollection.sort(
    (a, b) => b.longDescription.length - a.longDescription.length
  );

  const slicedFeaturedBlog = sortedFeatureBlog.slice(0, 10);

  slicedFeaturedBlog.forEach((ele, index) => {
    data.push([
    <Serial key={index + 1} ele={(index + 1).toString()}/>,
      ele.blogTitle,
      ele.userEmail,
      <Avatar key={index + 1} ele={ele.userImage} />,
    ]);
  });

  const columns = ["Serial No.", "Blog Title", "Blog Owner", "Owner Avatar"];

  //   const options = {
  //     filterType: "checkbox",
  //   };
  return (
    <div className="min-h-screen mb-10 px-2 lg:px-24">
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
