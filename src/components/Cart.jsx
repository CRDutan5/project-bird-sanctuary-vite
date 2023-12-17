const Cart = (props) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Discount: {props.cartContent.length >=3 ? "10%" : "0%"}</h4>
      <h4>Total: ${props.cartContent.length < 3 ? props.total : props.total * 0.9} </h4>
      <ol>
        {(props.cartContent.length > 0) && props.cartContent.map((bird) => (
          <li key={bird.id}>{bird.name} <button onClick={()=> props.removeBird(bird.id)}>Remove</button></li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
