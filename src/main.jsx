import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import AllFood from "./Components/Pages/All Food/AllFood";
import Gallery from "./Components/Pages/Gallery/Gallery";
import AuthProvider from "./Components/Authentication/AuthProvider";
import Error from "./Components/Pages/Shared/Error";
import AddItems from "./Components/Pages/Add Items/AddItems";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import MyList from "./Components/Pages/MyList/MyList";
import SingleFood from "./Components/Pages/All Food/SingleFood";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/All-Foods",
        element: <AllFood></AllFood>,
      },
      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/Register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/AddItems",
        element: <PrivateRoute><AddItems></AddItems></PrivateRoute>,
      },
      {
        path: "/MyList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: `/FoodDetails/:id`,
        element: <PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allmenu/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
