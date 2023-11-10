import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Newsletter = () => {
  const navigate = useNavigate();
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;

    const newsletter = {
      email,
    };

    //send data to the server
    fetch("http://localhost:5000/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsletter),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Email Received!", "Thanks for subscribe to our newsletter!", "success");
          form.reset();
          navigate("/");
        }
      })
      .catch(() => {
        swal("Failed!", "Please try again.", "error");
      });
  };

  return (
    <div className="relative">
      <div
        className="flex bg-fixed justify-between p-20 text-center bg-cover h-full  items-center mb-[380px]"
        style={{ backgroundImage: "url(https://i.ibb.co/7Swk9s4/tech.jpg)" }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around w-full">
          <div className="text-center text-white relative z-10">
            <p className="text-5xl font-bold">1598+</p>
            <strong className="bg-blue-600 inline-block my-5 w-11 h-1"></strong>
            <p className="text-xl font-semibold">BLOGS</p>
          </div>

          <div className="text-center text-white relative z-10">
            <p className="text-5xl font-bold">16173</p>
            <strong className="bg-blue-600 inline-block my-5 w-11 h-1"></strong>
            <p className="text-xl font-semibold">ACTIVE USERS</p>
          </div>

          <div className="text-center text-white relative z-10">
            <p className="text-5xl font-bold">1168+</p>
            <strong className="bg-blue-600 inline-block my-5 w-11 h-1"></strong>
            <p className="text-xl font-semibold">TECH TOPICS</p>
          </div>
        </div>
      </div>

      {/* newsletter field  */}
      <div className="h-[300px] w-1/2 p-20 shadow-md rounded text-white bg-gradient-to-r from-blue-600 to-cyan-400 absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="font-semibold text-2xl mb-7">
          Join our newsletter and subscribe for new features
        </h2>

        <form onSubmit={handleNewsletterSubmit}>
          <label className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="text-black px-4 w-10/12"
              required
            />
            <button
              type="submit"
              className="btn border-none bg-blue-500 text-white hover:text-blue-500 font-semibold"
            >
              Subscribe
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
