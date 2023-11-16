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
    fetch("https://tech-corner-project.vercel.app/newsletter", {
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
    <div className="lg:relative">
      <div
        className="flex bg-fixed justify-between p-20 text-center bg-cover h-full  items-center mb-16 lg:mb-[380px]"
        style={{ backgroundImage: "url(https://i.ibb.co/7Swk9s4/tech.jpg)" }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around w-full">
          <div className="text-center text-white relative z-10">
            <p className="text-5xl font-bold">598+</p>
            <strong className="bg-blue-600 inline-block my-5 w-11 h-1"></strong>
            <p className="text-xl font-semibold">BLOGS</p>
          </div>

          <div className="text-center text-white relative z-10">
            <p className="text-5xl font-bold">161</p>
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
      <div className="lg:h-[300px] text-center w-full lg:w-1/2 p-10 mb-10 lg:mb-0 lg:p-20 shadow-md rounded text-white bg-gradient-to-r from-blue-600 to-cyan-400 lg:absolute top-0 lg:top-96 left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 ">
        <h2 className="font-semibold text-sm lg:text-2xl mb-7">
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
