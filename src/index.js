import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeInfo from "./components/EmployeInfo";
import AddEmployee from "./components/AddEmployee";
import UpdateEmploye from "./components/UpdateEmploye";
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <EmployeInfo />,
      },
      {
        path: "/addemployee",
        element: <AddEmployee />,
      },
      {
        path: "/updateemployee/:id",
        element: <UpdateEmploye />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
