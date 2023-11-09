import { Button } from "@mui/material";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../providers/AuthProvider";

const Wishlist = () => {
  const myWishlistCollection = useLoaderData();
  console.log(myWishlistCollection);
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
    <div className="bg-slate-100 min-h-screen ">
      <div className="p-7 w-full bg-cyan-100">
        <p className="ml-5 font-bold text-2xl">Wishlist</p>
      </div>
      <div className=" p-5 w-full lg:w-[1280px] mt-20 mx-auto">


        
         
        
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
          {wishlist.map((WishlistElement) => (
            <div
              className="card bg-white shadow-xl p-5"
              key={WishlistElement._id}
            >
             

              <div className="text-center mx-auto mt-3">
                <div className="w-full">
                  <img
                    src={WishlistElement.image}
                    alt=""
                    className="rounded-xl"
                    style={{ width: "300px", height: "200px" }}
                  />
                </div>

                <h2 className=" font-bold text-2xl text-center my-7">
                  {WishlistElement.title}
                </h2>
              </div>

              <div className="w-full mb-2">
                {/* <Link to={`/BlogDetails/${blogElement._id}`}> */}
                <button className="col-span-1 btn text-white bg-blue-600 border-none hover:text-white hover:bg-black w-full">
                  View Details
                </button>
                {/* </Link>  */}

                <Button
                  onClick={() => handleRemove(WishlistElement._id)}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  type="submit"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* ) : (  */}
        <div className="text-center my-36">
         <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300">You have no blogs in your wishlist</p>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Wishlist;
