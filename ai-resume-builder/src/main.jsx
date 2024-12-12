import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import App from "./App.jsx";
import SignInPage from "./auth/sign-in/SignInPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth/sign-in">Sign In</Link>
            </li>
          </ul>
        </nav>
        <App />
      </div>
    ),
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
