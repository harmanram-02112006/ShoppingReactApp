import ProductCard from "./ProductCard";

function ProductSection() {

  const products = [
    {
      category: "Electronics",
      name: "Product 1",
      price: 10
    },
    {
      category: "Home",
      name: "Product 2",
      price: 20
    },
    {
      category: "Garden",
      name: "Product 3",
      price: 30
    },
    {
      category: "Sports",
      name: "Product 4",
      price: 40
    }
  ];

  return (
    <section className="products" id="products">

      {products.map((product) => (
        <ProductCard
          key={product.name}
          category={product.category}
          name={product.name}
          price={product.price}
        />
      ))}

    </section>
  );
}

export default ProductSection;