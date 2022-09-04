import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      { products.map(( product, index) => {
          return (
            <Item
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          );
        })
      }
    </div>
  );
};

export default ItemList; 