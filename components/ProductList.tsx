import Link from "next/link";

function ProductList({ products }: any) {
  if (!products || products.length === 0) return <div></div>;

  return (
    <>
      {(products as any[]).map(({ name, permalink }, index) => (
        <span key={permalink}>
          {index ? ", " : ""}
          <Link
            href={`/products/${permalink}`}
            className="text-lg md:text-xl lg:text-2xl hover:italic">
            {name}
          </Link>
        </span>
      ))}
    </>
  );
}

export default ProductList;
