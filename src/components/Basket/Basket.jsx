import "./basket.css"

function Basket({ total, articles }) {
    return (
        <div className="basket">
            <h2>Panier</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>{article}</li>
                ))}
            </ul>
            {!total ? <p>le panier est vide</p> : <p>total du panier : {total}</p>}
        </div>
    );
}

export default Basket