import React from "react";

const products = [
  {
    category: "Men's",
    name: "Nike Mens Downshifter 11",
    price: "₹ 2999",
    image: "nike.jpg",
  },
  {
    category: "Women's",
    name: "Bata Women Ellen Ankle Boot",
    price: "₹ 1099",
    image: "bata1.jpg",
  },
  {
    category: "Kids",
    name: "SVAAR Slingback Clog Shoes",
    price: "₹ 899",
    image: "kids.jpg",
  },
];

const Card = ({ product }) => {
  return (
    <div>
      <div className="card">
        <img src={product.image} alt="product" className="product-image" />
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <main>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </main>
  );
};

export default MainContent;
