import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/slice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        // If user was on login page, redirect to home
        if (location.pathname === "/login") {
          navigate("/");
        }
      } else {
        dispatch(removeUser());
        // Only redirect to login if not already on login or aboutus page
        if (location.pathname !== "/login" && location.pathname !== "/aboutus") {
          navigate("/login");
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
