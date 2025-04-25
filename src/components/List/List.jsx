import Card from "../Card/Card";
import products from "../../../data/product"
import "./list.css";

function List({total, onUpdateTotal, articles, onUpdateArticles}) {
  return (
    <div className="product-list">
      {products.map(
        (product) =>
          product.available && (
            <Card
              key={product.id}
              name={product.name}
              tag={product.tag}
              price={product.price}
              imageSrc={product.imageSrc}
              available={product.available}
              total={total}
              onUpdateTotal={onUpdateTotal}
              articles={articles}
              onUpdateArticles={onUpdateArticles}
            />
          )
      )}
    </div>
  );
}

export default List;