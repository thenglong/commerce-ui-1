import Head from "next/head";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Fragment, useMemo } from "react";

import { useCartDispatch } from "../../../context/cart";
import { useThemeDispatch } from "../../../context/theme";
import { useModalDispatch } from "../../../context/modal";

import Header from "../../../components/Header";
import Button from "../../../components/Button";
import VariantPicker from "../../../components/VariantPicker";
import ProductImages from "../../../components/ProductImages";
import ProductAttributes from "../../../components/ProductAttributes";
import RelatedProducts from "../../../components/RelatedProducts";
import products from "../../../seeds/products.json";
import ProductImageAttr from "../../../components/product-detail/product-image-attr";
import ProductDesc from "../../../components/product-detail/product-desc";

export const dynamic = "force-static";

export async function getData(permalink: any) {
  const result = products.find((product) => product.permalink === permalink);
  return Promise.resolve(result);
}

export async function generateStaticParams() {
  return products.map(({ permalink }) => ({
    permalink,
  }));
}

export default async function Page({ params }: any) {
  const { permalink } = params;
  const product = (await getData(permalink)) as any;
  //   const { setCart } = useCartDispatch();
  const {
    variant_groups: variantGroups,
    assets,
    meta,
    related_products: relatedProducts,
  } = product;
  const images = assets.filter(({ is_image }: any) => is_image);
  //   const setTheme = useThemeDispatch();
  //   const { openModal } = useModalDispatch();

  //   const initialVariants = useMemo(
  //     () =>
  //       variantGroups.reduce((all: any, { id, options }: any) => {
  //         const [firstOption] = options;

  //         return { ...all, [id]: firstOption.id };
  //       }, {}),
  //     [product.permalink]
  //   );

  //   const [selectedVariants, setSelectedVariants] = useState(initialVariants);

  //   useEffect(() => {
  //     setSelectedVariants(initialVariants);
  //     setTheme(product.permalink);

  //     return () => setTheme("default");
  //   }, [product.permalink]);

  function handleVariantChange({ target: { id, value } }: any) {
    // return setSelectedVariants({
    //   ...selectedVariants,
    //   [id]: value,
    // });
  }

  const addToCart = () => {
    // return commerce.cart
    //   .add(product.id, 1, selectedVariants)
    //   .then(({ cart }) => {
    //     setCart(cart);
    //     return cart;
    //   })
    //   .then(({ subtotal }) =>
    //     toast(
    //       `${product.name} is now in your cart. Your subtotal is now ${subtotal.formatted_with_symbol}. Click to view what's in your cart.`,
    //       {
    //         onClick: openModal,
    //       }
    //     )
    //   )
    //   .catch(() => {
    //     toast.error("Please try again.");
    //   });
  };

  return (
    <Fragment>
      <Head>
        <title>{product.seo.title}</title>
        <meta name="description" content={product.seo.description}></meta>
      </Head>

      <div className="md:hidden">
        <Header />
      </div>

      <div className="md:min-h-screen md:flex md:items-center">
        <div className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 md:space-x-10">
          <div className="md:max-h-screen md:w-1/2 flex flex-col md:flex-row items-end justify-between md:sticky md:top-0">
            <div className="hidden md:block">
              <Header />
            </div>
            <ProductDesc
              product={product}
              variantGroups={variantGroups}
              //   handleVariantChange={handleVariantChange}
              //   initialVariants={initialVariants}
            />
          </div>

          <div className="md:min-h-screen md:py-12 flex items-center md:w-1/2 md:z-40">
            <ProductImageAttr images={images} meta={meta} />
          </div>
        </div>
      </div>

      <div className="py-3 md:py-4 lg:py-8">
        <RelatedProducts products={relatedProducts} />
      </div>
    </Fragment>
  );
}
