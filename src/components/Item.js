import { Link } from "react-router-dom";

const Item = ({ id, title, price, image}) => {
  return (
    <Link to = {`/Item/${id}`}>   
      <div className="containerItem">
        <div className="item">
          <div className="titleAndPrice">
            <p className="titleItem">{ title }</p>
            <p className="priceItem">Price: ${ price }</p>
          </div>
          <div className="containerImg">
            <img className="imgItem" src={ image } alt={title}/>
          </div>
        </div>  
      </div>
    </Link>
  );
};
export default Item;