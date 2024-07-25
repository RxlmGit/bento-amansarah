import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import catLaugh from "../assets/imgs/gifs/laughing-cat.gif";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12">
      <motion.div className="mx-auto max-w-[1350px] min-h-[85vh] md:max-w-[980px] lg:max-w-[1100px] lg:max-h-[630px] rounded-lg border border-zinc-700 bg-zinc-800 flex items-center justify-center flex-col text-zinc-50 gap-5">
        <h1 className="text-center">KEKW</h1>
        <img src={catLaugh} alt="" className="rounded-xl " />
        <Link
          to="/"
          className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 block"
        >
          go back lmao
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorElement;
