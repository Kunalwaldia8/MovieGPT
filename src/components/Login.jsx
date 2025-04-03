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
    <div className="relative w-full h-screen">
      {/* Centered Form */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-8 bg-black/70 text-white w-96 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl mb-4 font-bold">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          {!isLogin && (
            <input
              ref={name}
              className="p-3 mb-4 w-full bg-black/70 border-2 border-gray-400 rounded"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-3 mb-4 w-full bg-black/70 border-2 border-gray-400 rounded"
            type="text"
            placeholder="Email "
          />
          <div className="relative">
            <input
              ref={password}
              className="p-3 mb-4 w-full bg-black/70 border-2 border-gray-400 rounded pr-12"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <p className="text-red-500 m-2">{errorMessage}</p>
          <button
            onClick={handleValidation}
            className="p-3 mb-4 w-full bg-red-700 rounded-2xl hover:bg-red-600 transition"
            type="submit"
          >
            {isLogin ? "Sign In" : "Sign Up"}
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
                : "Already a member? Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
