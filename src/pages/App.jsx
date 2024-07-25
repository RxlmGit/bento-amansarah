import React from "react";
import BentoCat from "../components/BentoCat";
import { Routes, Route, useLocation } from "react-router-dom";
import PromoPage from "./PromoPage";
import ErrorElement from "./ErrorElement";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<BentoCat />}
            errorElement={<ErrorElement />}
          ></Route>
          <Route path="/promopage" element={<PromoPage />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
