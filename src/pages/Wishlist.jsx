import { Button } from "@mui/material";
import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
// import swal from "sweetalert";
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../providers/AuthProvider";


const Wishlist = () => {
  const myCartCollection = useLoaderData();
//   const navigate = useNavigate();

  const { userDetails } = useContext(AuthContext);

  const carCard = myCartCollection.filter(
    (car) => car.userEmail === userDetails.email
  );


  // Function to handle item deletion
//   const handleDelete = (itemId) => {
   

//     fetch(`https://brand-shop-server-steel.vercel.app/myCart/${itemId} `, {
//             method: "DELETE",
//             headers: {
//               "content-Type": "application/json",
//             },
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               console.log(data);
//               if (data.deletedCount > 0){
//                 swal("Deleted!", "Your car has been deleted.", "success");
//                 navigate("/myCart");
//               }
//             });
//           // window.location.reload();
//         };

  

  return (
    <div>
      <div className=" bg-green-100 p-5 w-full lg:w-[1280px] my-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
          {carCard.map((SingleCarElement) => (


            <div
              className="card bg-white shadow-xl p-5"
              key={SingleCarElement._id}
            >
               <div className="text-right mb-4">
                  {" "}
               
                  <span className="text-xs text-white bg-green-600 py-1 px-2 rounded-full">
                    In your cart
                  </span>
              </div>
              
       
              <div className="text-center mx-auto mt-3">
                <div className="w-full">
                <img src={SingleCarElement.image} alt="" className="rounded-xl"
              style={{ width: '300px', height: '200px' }}/>
              </div>
           
   
             
            
               
                <h2 className=" font-bold text-2xl text-center my-7">{SingleCarElement.productName}</h2>
              </div>

                
                  <div className="w-full mb-2">
              
                    {/* //   onClick={() => handleDelete(SingleCarElement._id)} */}
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Remove
                  </Button>
                  </div>
                
              </div>
      


            
          ))}
        </div>
      </div>

    </div>
  );
};

export default Wishlist;