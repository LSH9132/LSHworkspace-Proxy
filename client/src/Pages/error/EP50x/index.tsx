import './index.modules.css';
import { motion } from "framer-motion";

// import { Comets } from "./Comets";

function App() {
  return (
    <div className="App">
      <motion.div
        className="absolute w-full h-full bg-black"
      >
        <svg width="100%" height="100%" preserveAspectRatio="none" pointerEvents="none">
          <defs>
            <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
              <stop offset="0%" stopColor="rgba(255,255,255,.8)"></stop>
              <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
            </radialGradient>
          </defs>
          <g transform="rotate(-135)">
            <ellipse
              className="comet"
              fill="url(#comet-gradient)"
              cx="0"
              cy="0"
              rx="150"
              ry="2"
            ></ellipse>
          </g>
          <g transform="rotate(20)">
            <ellipse
              className="comet"
              style={{ animationDelay: "-4.3s" }}
              fill="url(#comet-gradient)"
              cx="100%"
              cy="0"
              rx="150"
              ry="2"
            ></ellipse>
          </g>
          <g transform="rotate(300)">
            <ellipse
              className="comet"
              style={{ animationDelay: "-6s" }}
              fill="url(#comet-gradient)"
              cx="40%"
              cy="100%"
              rx="150"
              ry="2"
            ></ellipse>
          </g>
        </svg>
      </motion.div>
      <div className="fixed flex w-full h-full bg-transparent">
        <motion.div
          className="m-auto text-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 76,
            damping: 30,
            delay: 0.3
          }}
        >
          <motion.div
            className="text-4xl md:text-8xl opacity-0"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 25,
              delay: 0.2,
            }}
          >
            <motion.text
              className="bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-purple-400 to-pink-400 bg-repeat drop-shadow-lg shadow-white"
            >
              LSHworkspace
            </motion.text>
          </motion.div>
          <motion.div
            className="text-center py-1 md:py-3 "
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.6
            }}
          >
            <text
              // className="bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-purple-400 to-pink-400"
              className="text-2xl md:text-4xl font-bold drop-shadow-lg shadow-white"
            >
              지금은 점검중입니다.
            </text>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute w-full bottom-0 py-3 text-center text-white text-xs md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            delay: 0.6
          }}
        >
          <text className="text-md md:text-lg drop-shadow-lg shadow-white">
            contact@LSHworkspace.com<br/>ⓒ 2022 LSHworkspace. All rights reserved.
          </text>
        </motion.div>
      </div>
    </div>
  );
}

export default App;