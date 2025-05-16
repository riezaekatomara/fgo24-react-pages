export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 rounded-3xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-12">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start p-10 bg-gradient-to-br from-gray-800 to-gray-900">
        <h2 className="text-lg font-semibold mb-2 text-white">JOIN FOR FREE</h2>
        <h1 className="text-3xl font-bold mb-4 text-white">
          Unleash the traveler <span className="text-blue-400">inside YOU</span>
          ,<br />
          Enjoy your Dream Vacation
        </h1>
        <p className="text-white text-sm mb-6 opacity-70">
          Get started with the easiest and most secure website to buy travel
          tickets.
        </p>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded bg-gray-700 text-white hover:bg-gray-600">
            Explore more
          </button>
          <button className="px-5 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Book Now
          </button>
        </div>
      </div>
      {/* Right Side (Form) */}
      <div className="flex-1 bg-gray-800 p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-8 text-white">
          Create new account.
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-white opacity-70">
              Already a member?{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Log in
              </a>
            </span>
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
