
import MUIDataTable from "mui-datatables";
import { useLoaderData } from "react-router-dom";
import Avatar from "../components/Avatar.jsx";

const FeaturedBlogs = () => {
//   const getMuiTheme = () =>
//     createTheme({
//       components: {
//         MUIDataTableBodyCell: {
//           styleOverrides: {
//             root: {
//                   backgroundColor: "#FF0000",


//             },
//           },
//         },
//       },
//     });

  let data = [];

  const featuredCollection = useLoaderData();

  const sortedFeatureBlog = featuredCollection.sort(
    (a, b) => b.longDescription.length - a.longDescription.length
  );

  const slicedFeaturedBlog = sortedFeatureBlog.slice(0, 11);

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
    <div className="min-h-screen">
      <div className="p-7 w-full bg-cyan-100">
        <p className="ml-5 font-bold text-2xl">Featured Blogs</p>
      </div>

    
              <MUIDataTable
                
          title={"Employee List"}
          data={data}
          columns={columns}
          // options={options}
        />

    </div>
  );
};

export default FeaturedBlogs;
