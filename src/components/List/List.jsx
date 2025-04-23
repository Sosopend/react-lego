import Card from "../Card/Card";
import products from "../../../data/product"
import "./list.css";

function List() {
  return (
    <div className="product-list">
      {products.map(
        (product, index) => (
          product.available && (
          <Card
            key={index}
            name={product.name}
            tag={product.tag}
            price={product.price}
            available={product.available}
            imageSrc={product.imageSrc}
          />
        )
        )
      )}
    </div>
  );
}

export default List;