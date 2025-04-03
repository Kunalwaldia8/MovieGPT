import React, { useRef, useState } from "react";
import { Validation } from "../utils/Validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice";

const Login = () => {
  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = () => {
    setLogin(!isLogin);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

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
            photoURL: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
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
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
          alt="bg-img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Form */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-8 bg-black/70 text-white w-96 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl mb-4 font-bold">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>
          <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
            This is a demo application. Do not enter real credentials.
          </p>
          {!isLogin && (
            <input
              ref={name}
              className="p-3 mb-4 w-full bg-gray-700 rounded"
              type="text"
              placeholder="Full Name"
              required
            />
          )}
          <input
            ref={email}
            className="p-3 mb-4 w-full bg-gray-700 rounded"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            ref={password}
            className="p-3 mb-4 w-full bg-gray-700 rounded"
            type="password"
            placeholder="Password"
          />
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
