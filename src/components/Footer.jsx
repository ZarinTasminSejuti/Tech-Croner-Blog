import swal from "sweetalert";
import DevicesIcon from "@mui/icons-material/Devices";
const Footer = () => {
  const handleSuggestionSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const suggestion = form.suggestion.value;

    const suggestionObj = {
      name,
      email,
      suggestion,
    };

    //send data to the server
    fetch("http://localhost:5000/suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(suggestionObj),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Suggestion Received!", "Thanks for the suggestion!", "success");
          form.reset();
          //navigate("/");
        }
      })
      .catch(() => {
        swal("Failed!", "Please try again.", "error");
      });
  };

  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content justify-around place-items-center">
        <aside>
      
          <DevicesIcon sx={{  fontSize: 52 }} />
          <p className="leading-6">
          <span className="text-3xl font-semibold">Tech Corner</span>
            <br />
            Providing reliable tech since 2023
          </p>
        </aside>

        <nav className="flex flex-col justify-center items-center">
          <header className="footer-title">Quick Links</header>
          <div className="space-y-3 flex flex-col text-lg font-normal">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <nav className="flex flex-row space-x-10 pt-20">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </nav>
        </nav>

        <form onSubmit={handleSuggestionSubmit}>
          <header className="footer-title">Any Suggestion</header>
          <fieldset className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="input input-bordered w-full pr-16"
              />
            </div>
          </fieldset>

          <fieldset className="form-control w-80">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="youremail@email.com"
                className="input input-bordered w-full pr-16"
              />
            </div>
          </fieldset>

          <fieldset className="form-control w-80">
            <label>
              <textarea
                type="text"
                name="suggestion"
                placeholder="suggestion ..."
                className="input input-bordered w-full resize-y h-28"
              ></textarea>
            </label>
            <button className="btn rounded text-white hover:text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:bg-gradient-to-l hover:from-blue-600 hover:to-cyan-500">
              Subscribe
            </button>
          </fieldset>
        </form>
      </footer>

      <footer className="footer footer-center px-10 py-4 bg-base-200 text-base-content border-base-300">
        <aside>
          <p>Copyright © 2023 - All right reserved by Tech Corner</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
