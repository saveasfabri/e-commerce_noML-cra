import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div className="containerCartIcon">
      <Link to = "/Cart">{<i className="material-icons cartIcon">shopping_cart</i>}</Link>
      <p className="text-cart">( 0 )</p>
    </div>
  );
};

export default CartWidget;