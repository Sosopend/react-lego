import Card from "../Card/Card";
import "./list.css";

function List() {
  return (
    <div className="product-list">
      <Card
        name="Titanic"
        tag="Historique"
        price={199.99}
        imageSrc="https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
      />
      <Card
        name="Millennium Falcon"
        tag="cinema"
        price={299.99}
        imageSrc="https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
      />
      <Card
        name="Nuit étoilée - Van Gogh"
        tag="arts"
        price={169.99}
        imageSrc="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
      />
    </div>
  );
}

export default List;