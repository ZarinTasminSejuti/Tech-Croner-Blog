import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { Button, Container, TextField } from "@mui/material";

const Register = () => {
  const { signUp, logOut, setNameAndPhoto } = useContext(AuthContext);

  //navigate after login
  const navigate = useNavigate();

  //form submit function
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    //checking password validation
    if (password.length < 6) {
      swal("Failed!", "Password should be at least 6 Characters", "error");
      return;
    } else if (!/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/.test(password)) {
      swal("Failed!", "Password need a special Characters", "error");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal("Failed!", "Password need a Capital Letter", "error");
      return;
    }

    // create a new user with firebase
    signUp(email, password)
      .then(() => {
        swal("You're registered!", "Registration Successful!", "success");

        logOut()
          .then(() => {
            // Sign-out and navigate to login
            navigate("/login");
          })
          .catch((error) => {
            // An error happened.
            console.log(error);
          });
      })
      .catch(() => {
        swal("Failed!", "Email is already used", "error");
      });

    // update new user name and photo
    setNameAndPhoto({
      displayName: name,
      photoURL: photo,
    });
  };

  return (
    <div>
      <Container className="my-20 min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl mt-16 text-blue-600 font-bold">
            Create a new account
          </h1>
          <p className="py-5">Enter your information to setup a new account</p>
        </div>

        <div className="rounded-lg w-full mx-auto max-w-sm p-7 shadow-xl bg-base-100">
          <form
           
            className="space-y-4 w-full"
            onSubmit={handleRegister}
          >
            
            <TextField
              label="Full Name"
              variant="outlined"
              color="primary"
              type="text"
              placeholder="Enter your name..."
              name="name"
              required
              fullWidth
            />

            <TextField
              label="Profile Photo URL"
              variant="outlined"
              color="primary"
              type="text"
              placeholder="Enter photo url..."
              name="photo"
              required
              fullWidth
            />

            <TextField
              label="Email"
              variant="outlined"
              color="primary"
              type="text"
              placeholder="Enter your email address..."
              name="email"
              required
              fullWidth
            />

            <TextField
              label="Password"
              variant="outlined"
              color="primary"
              type="password"
              placeholder="Enter your password..."
              name="password"
              required
              fullWidth
            />
            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:bg-gradient-to-l hover:from-blue-600 hover:to-cyan-500" type="submit" variant="contained">Register</Button>
            </div>
          </form>

          <p className="mt-7 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Register;
