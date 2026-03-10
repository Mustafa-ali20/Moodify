import { createBrowserRouter } from "react-router-dom";
import Register from "./Features/Auth/Pages/Register";
import Login from "./Features/Auth/Pages/Login";
import Protected from "./Features/Auth/Components/Protected";
import Home from "./Features/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
