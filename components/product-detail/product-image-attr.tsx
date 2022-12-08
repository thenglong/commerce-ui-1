"use client";

import { motion } from "framer-motion";
import ProductAttributes from "../ProductAttributes";
import ProductImages from "../ProductImages";

export default function ProductImageAttr({ images, meta }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}>
      <ProductImages images={images} />
      <ProductAttributes {...meta} />
    </motion.div>
  );
}
