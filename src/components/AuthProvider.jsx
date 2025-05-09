import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));

        navigate("/");
      } else {
        dispatch(removeUser());
        if (
          location.pathname !== "/login" &&
          location.pathname !== "/aboutus"
        ) {
          navigate("/login");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
