import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    console.log('data', data);

    setProducts(data);
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div className="itemListContainer">

      <h1>PRODUCTS</h1>

      <div>
        <ItemList products={products} />        
      </div>

    </div>
  );
};


export default ItemListContainer;

/* Realizar un pedido asincrónico al siguiente endpoint: https://fakestoreapi.com/products/.
Utilizar el hook useEffect. En principio, utilizar fetch + async/await
Si el pedido entra en un loop infinito, revisar el dependency array.
Guardar los productos en un estado del componente ItemListContainer
Mapear los productos para renderizarlos en el DOM desde el componente mencionado.
Maquetar la vista correspondiente utilizando el camino que consideren apropiado para la estilización. */