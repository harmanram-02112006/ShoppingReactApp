function ProductCard({category, name, price}){
    return(
        <div className="product-card">
            <p className="category">
                {category}
            </p>

            <h2>{name}</h2>

            <p className="price">
                ${price}
            </p>

            <button className="buy-btn">
                Buy Now
            </button>
        </div>
    );
}
export default ProductCard;