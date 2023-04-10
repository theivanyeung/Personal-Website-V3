import ProductsDisplayFull from "./Display/Full";
import ProductsDisplayBase from "./Display/Base";

const ProductsDisplay = () => {
  return (
    <>
      <ProductsDisplayFull
        display={{
          xxl: "flex",
          xl: "none",
          lg: "none",
          md: "none",
          sm: "none",
          base: "none",
        }}
      />
      <ProductsDisplayBase
        display={{
          xxl: "none",
          xl: "flex",
          lg: "flex",
          md: "flex",
          sm: "flex",
          base: "flex",
        }}
      />
    </>
  );
};

export default ProductsDisplay;
