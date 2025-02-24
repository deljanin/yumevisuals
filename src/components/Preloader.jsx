import { motion } from "framer-motion";
import Logo from "./Logo";

const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export default function Preloader() {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-[#987776] shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]"
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1798"
        height="738"
        viewBox="0 0 1798 738"
        fill="none"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M126 470C2350 1054.4 1883.33 543.5 1372 215L749 1L400 320L91 470L1.5 70.5C71.1667 55.6667 216.5 21 240.5 1"
          stroke="black"
        />
      </svg> */}
      <Logo width={400} height={400} animation={true} />
    </motion.div>
  );
}
