import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, TextField } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
   

    signIn(email, password)
      .then(() => {
        swal("You're logged in!", "Login Successful!", "success");
         e.target.reset();
        navigate("/");
      })
      .catch(() => {
        swal(
          "Login Failed!",
          "Wrong credentials! Please login again.",
          "error"
        );
      })
  }


  const handleGoogle = () => {
    signInGoogle()
      .then(() => {
        
        swal("You're logged in!", "Login Successful!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        swal(
          "Login Failed!",
          "Wrong credentials! Please login again.",
          "error"
        );
      })
  }

  
  return (
    <div>
     
          <div className="text-center mt-16">
            <h1 className="text-5xl text-blue-600 font-bold">Login now!</h1>
            <p className="py-2 my-4 text-black font-medium px-4 rounded-xl">
              Please log in to access your account and explore our services.
            </p>
          </div>

          <div className=" w-full max-w-sm mx-auto p-7 shadow-xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
              <TextField
              className=""
              label="Email"
              variant="outlined"
              color="primary"
              type="text"
              placeholder="Enter your email address..."
              name="photo"
              required
              fullWidth
            />

                {/* password  */}
                <TextField
              className=""
              label="Password"
              variant="outlined"
              color="primary"
              type="password"
              placeholder="Enter your password..."
              name="photo"
              required
              fullWidth
            />

                {/* login button */}
                <div className="mt-8 text-center">
            <Button variant="contained">
  Login
</Button>
            </div>
              </form>

              <p className="mt-4 text-center text-gray-500">or login with</p>

              {/* google button */}
              <p className="text-center my-2">
                {" "}
                <Button
              onClick={handleGoogle}
              color="action"
                  className="btn w-1/2 text-white border-none bg-blue-500 hover:bg-red-600"
                >
                  <GoogleIcon></GoogleIcon>Google
                </Button>
              </p>

              <p className="text-center">
                Do not have an account?{" "}
                <Link to="/register" className="text-blue-600 font-semibold">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
  );
};

export default Login;