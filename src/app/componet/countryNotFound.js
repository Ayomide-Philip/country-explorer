import { motion } from "framer-motion";

export default function CountryNotFound() {
  return (
    <div className="w-full col-span-full flex flex-col items-center justify-center py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        <div className="text-6xl mb-4 animate-bounce">❌</div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Country Not Found
        </h2>
        <p className="text-gray-300 mb-6">
          Sorry, we couldn&apos;t locate the country you&apos;re searching for.
          Please check your spelling or try a different filter.
        </p>
      </motion.div>
    </div>
  );
}
