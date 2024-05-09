import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Authentication/Login";
import SignIn from "./Components/Authentication/SignIn";
import AllFood from "./Components/Pages/All Food/AllFood";
import Gallery from "./Components/Pages/Gallery/Gallery";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/All-Foods',
        element: <AllFood></AllFood>
      },
      {
        path:'/Gallery',
        element: <Gallery></Gallery>
      },
      {
        path:'/Register',
        element: <SignIn></SignIn>
      },
      {
        path:'/Login',
        element: <Login></Login>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
