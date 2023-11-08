
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
const Allblogs = () => {
    const blogCollection = useLoaderData();
    const { userDetails } = useContext(AuthContext);



    // search field with material ui

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '100ch',
          },
        },
      }));
      
    
    
    
    
    
    
    
    
    return (
        <div>

      <div className="w-full lg:w-[1280px] my-20 mx-auto ">
        <h2 className="text-4xl text-blue-600 text-center p-3 lg:p-0 font-semibold mb-10">
         Explore All Blogs
                </h2>
                
                <div className="bg-cyan-100 p-3 my-5 rounded-md">
                <Search >
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by blog title…"
                        inputProps={{ 'aria-label': 'search' }}
                      
            />
          </Search>
               </div>
        <div className="space-y-4">
          {blogCollection.map((blogElement) => (
            <div
              className=" bg-slate-100 rounded-lg shadow-md"
              key={blogElement._id}
            >
              <div className="flex flex-col lg:flex-row items-center ">
                <div className="w-full lg:w-1/3">
                  <img
                    src={blogElement.image}
                    alt=""
                    className="p-6 rounded-[32px]"
                    style={{ width: "420px", height: "270px" }}
                    data-aos="zoom-out-right"
                  />
                </div>

                <div data-aos="zoom-in" className="card-body lg:w-2/3 md:relative">           

                  <div className="my-3">
                    <h2>
                      <span className="card-title text-blue-700 font-medium">
                        Blog Title:
                      </span>{" "}
                      {blogElement.blogTitle}
                    </h2>
                   
                    <p>
                      <span className="text-blue-700  font-medium">Short Description:</span>{" "}
                      {blogElement.shortDescription}
                              </p>
                              <h2>
                      <span className="text-blue-700 font-medium">Category:</span>{" "}
                      {blogElement.type}
                    </h2>
                  </div>

                  <div className="mb-6 ml-1 w-full lg:w-3/4">
                    <p className="text-justify">{blogElement.description}</p>
                  </div>


                  <div className="card-actions w-full justify-between items-center">
                    <div className="grid grid-cols-2 gap-3 ml-1">
                      <Link to={`/BlogDetails/${blogElement._id}`}>
                        <button className="col-span-1 btn text-white bg-blue-600 border-none hover:text-white hover:bg-black w-full">
                          View Details
                        </button>
                      </Link>

                      <Link to={`/wishlist/${blogElement._id}`}>
                        <button className="col-span-1 btn text-white bg-blue-600 border-none hover:text-white hover:bg-black w-full">
                          Wishlist
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default Allblogs;