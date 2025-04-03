import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./utils/store";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs.jsx";
import { Body } from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/login", element: <Login /> },
      { path: "/aboutus", element: <AboutUs /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
 