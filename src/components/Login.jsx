import React, { useState } from "react";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const handleClick = () => {
    console.log("clicked");
    setLogin(!isLogin);
  };
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
          alt="bg-img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Form */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form className="p-8   bg-black bg-black/70 text-white w-96 rounded-lg shadow-lg">
          <h1 className="text-2xl mb-4 font-bold">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>
          {!isLogin && (
            <input
              className="p-3 mb-4 w-full bg-gray-700 rounded"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-3 mb-4 w-full bg-gray-700 rounded"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="p-3 mb-4 w-full bg-gray-700 rounded"
            type="password"
            placeholder="Password"
          />
          <button
            className="p-3 mb-4 w-full bg-red-700 rounded-2xl hover:bg-red-600 transition"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-gray-400 hover:underline">
              Need help?
            </a>
          </div>
          <div>
            <button className="cursor-pointer p-4 m-4" onClick={handleClick}>
              {isLogin
                ? "New to Netflix? Sign Up now"
                : "Already a memeber? Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
