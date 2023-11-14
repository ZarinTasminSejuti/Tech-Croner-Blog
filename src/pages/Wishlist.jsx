import { Button } from "@mui/material";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../providers/AuthProvider";

const Wishlist = () => {
  const myWishlistCollection = useLoaderData();
  // console.log(myWishlistCollection);
  const navigate = useNavigate();

  const { userDetails } = useContext(AuthContext);

  const wishlist = myWishlistCollection.filter(
    (wish) => wish.userEmail === userDetails.email
  );

  // Function to handle item deletion
  const handleRemove = (listId) => {
    fetch(`http://localhost:5000/wishlist/${listId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          swal("Removed!", "Your blog has been deleted.", "success");
          navigate("/wishlist");
        }
      });
  };

  return (
    <div className="px-24 bg-slate-100">
      <div className="py-10 text-black ">
        <p className="font-bold text-4xl">Wishlist</p>
      </div>

      <div className="p-5 w-full lg:w-[1280px] mb-20 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-center justify-center">
          {wishlist.length > 0 ? (
            wishlist.map((WishlistElement) => (
              <div
                className=" shadow-md bg-cyan-50 p-5"
                key={WishlistElement._id}
              >
                <div className="w-full text-center mt-3 mb-5 h-[250px]">
                  <div className="h-full w-full flex items-center justify-center">
                    <img
                      src={WishlistElement.image}
                      alt=""
                      className="rounded-xl h-full max-w-full"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                  </div>
                </div>
                <div className="w-full mb-2 mt-5 flex flex-col gap-5 text-center justify-between h-[250px]">
                  <div>
                    <h2 className="font-bold text-2xl text-center">
                      {WishlistElement.title}
                    </h2>

                    <h2 className="text-center font-bold my-2 text-black">
                      {WishlistElement.blogTitle}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Category: {WishlistElement.type}
                    </p>
                    <p className="text-gray-500 pt-2 text-justify break-words ...">
                      {WishlistElement.shortDescription}
                    </p>
                  </div>

                  <div className="w-full mb-2 mt-5 flex flex-row gap-5 text-center justify-center">
                    <div className="w-1/2 rounded-md px-5 py-2 text-white bg-blue-600 border-none">
                      <Link to={`/wishlistBlogDetails/${WishlistElement._id}`}>
                        <button>View Details</button>
                      </Link>
                    </div>
                    <Button
                      className="w-1/2 px-5 py-2 text-white bg-blue-600 border-none"
                      onClick={() => handleRemove(WishlistElement._id)}
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      type="submit"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center my-36">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300">
                You have no blogs in your wishlist
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
