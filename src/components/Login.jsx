import React, { useRef, useState } from "react";
import { Validation } from "../utils/Validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setLogin(!isLogin);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleValidation = () => {
    const Message = Validation(
      email.current.value,
      password.current.value,
      name.current == null ? null : name.current.value
    );
    setErrorMessage(Message);

    if (Message != null) return;
    if (isLogin) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, displayName, email } = user;
          dispatch(addUser({ uid, displayName, email }));
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Update the user's profile with their name
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
          }).then(() => {
            // After profile update is complete, dispatch to Redux
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({ uid, displayName, email }));
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 mt-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to MovieGPT
          </h1>
          <p className="text-white/70">Your cinematic AI companion</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-2 border-white/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            {isLogin ? "Sign In" : "Create Account"}
          </h2>

          {!isLogin && (
            <div className="mb-4">
              <input
                ref={name}
                className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white transition-all"
                type="text"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="mb-4">
            <input
              ref={email}
              className="w-full p-4 bg-gray-200/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white transition-all"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="mb-6 relative">
            <input
              ref={password}
              className="w-full p-4 bg-gray-200/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white transition-all pr-12"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-red-300 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errorMessage && (
            <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>
          )}

          <button
            onClick={handleValidation}
            className="w-full p-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg"
            type="submit"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          <div className="mt-6 flex items-center justify-between text-sm text-red-400">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded bg-white/10 border-2 border-red-600"
              />
              <span className="text-white pointer-cursor">Remember me</span>
            </label>
            <a
              href="#"
              className="hover:text-red-300 transition-colors text-white pointer-cursor"
            >
              Need help?
            </a>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleClick}
              className="text-white hover:text-red-300 transition-colors pointer-cursor"
            >
              {isLogin
                ? "New to MovieGPT? Create an account"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
