import Product from "./Product";

function ProductGrid({ products, ...props }: any) {
  if (!products || products.length === 0) return null;

  return (
    <div className="w-full grid lg:grid-cols-2 gap-4 xl:gap-8">
      {products.map((product: any) => (
        <Product key={product.id} {...product} {...props} />
      ))}
    </div>
  );
}

export default ProductGrid;
