"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import VariantPicker from "../VariantPicker";

export default function ProductDesc({
  product,
  variantGroups,
  handleVariantChange,
  initialVariants,
}: any) {
  return (
    <motion.div
      className="py-6 md:py-12 sticky top-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.25,
        },
      }}
      exit={{ opacity: 0, y: -50 }}>
      <h1 className="font-serif font-medium italic text-2xl md:text-4xl lg:text-5xl">
        {product.name}
      </h1>

      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center">
          <div className="pr-2">
            <p className="text-lg md:text-xl lg:text-2xl font-sans">
              {product.price.formatted_with_symbol}
            </p>
          </div>

          <VariantPicker
            variantGroups={variantGroups}
            defaultValues={initialVariants}
            onChange={handleVariantChange}
          />
        </div>

        <Button
          onClick={
            //   addToCart
            () => {}
          }>
          Add to Bag
        </Button>
      </div>

      <div
        className="pt-5 md:pt-8 lg:pt-10 md:leading-relaxed lg:leading-loose lg:text-lg"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </motion.div>
  );
}
