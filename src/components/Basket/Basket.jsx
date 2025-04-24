import "./basket.css"

function Basket({total}) {
    return (
        <div className="basket">
            <h2>Panier</h2>
            {!total ? <p>le panier est vide</p> : <p>total du panier : {total}</p>}
        </div>
    );
}

export default Basket