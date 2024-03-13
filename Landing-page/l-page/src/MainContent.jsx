import React from "react";
const Mens = () => {
  return (
    <section>
      <h2>For Men's</h2>
      <div id="direction">
        
        <div id="direction">
          <img src="nike.jpg" alt="error" className="redTape" />
          <span className="redTape">
            Nike Mens Downshifter 11 |Men-Shoes Sneaker
          </span>

          <h4 className="price">
            Price : ₹ 2999 <button className="button">Add to cart</button>
          </h4>
        </div>
      </div>
    </section>
  );
};
const Womens = () => {
  return (
    <section>
      <hr />
      <h2>For Women's</h2>
      <div id="direction">
        <div id="direction">
          <img src="bata1.jpg" alt="error" className="redTape" />
          <span className="redTape">Bata Women Ellen Ankle Boot Esandal</span>
          <h4 className="price">
            Price : ₹ 1099 <button className="button">Add to cart</button>
          </h4>
        </div>
       
      </div>
    </section>
  );
};
const Kids = () => {
  return (
    <section>
      <hr />
      <h2>For Kids</h2>
      <div id="direction">
        <div id="direction">
          <img src="kids.jpg" alt="error" className="redTape" />
          <span className="redTape">
            SVAAR Slingback Clog Shoes for Boys & Girls || Indoor & Outdoor
            Sandals Clogs for Kids with 4 Cartoon Charm
          </span>
          <h4 className="price">
            Price : ₹ 899 <button className="button">Add to cart</button>
          </h4>
        </div>
        </div>
       
    </section>
  );
};
const MainContent = () => {
  return (
    <main>
      <Mens />
      <Womens />
      <Kids />
    </main>
  );
};

export default MainContent;
