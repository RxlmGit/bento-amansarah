import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// const router = createBrowserRouter([
//   { path: "/", element: <App />, errorElement: <ErrorElement /> },
//   {
//     path: "/promopage",
//     element: <PromoPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);
