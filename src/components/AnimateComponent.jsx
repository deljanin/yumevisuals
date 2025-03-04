import { motion } from "framer-motion";

function AnimateComponent({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default AnimateComponent;
