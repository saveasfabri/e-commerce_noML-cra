import NavBar from "./components/NavBar"
import Home from "./components/Home"
import ItemListContainer from "./components/ItemListContainer"
import Cart from "./components/Cart"
import { Routes, Route } from "react-router-dom"

const App= () => {
  return (
    <div className="App">
      <NavBar />      
      <Routes>
        <Route 
          path="/" 
          element = {<Home />}
        />        
        <Route 
          path="/Cart" 
          element = {<Cart />}
        />
        <Route 
          path="/Products" 
          element = {<ItemListContainer />}
        />      
        <Route 
          path="/Item/:id" 
          element = {<h1>Item: Page in Contruction</h1>}
        />      
        <Route 
          path="*" 
          element = {
          <div className="errorContainer">
            <h1>404 - Not Fund</h1>
            <img className="imgError" src="https://ih1.redbubble.net/image.590408507.8469/flat,1000x1000,075,f.u2.jpg" alt="magen de error"/>
          </div>
          }/>
      </Routes>
    </div>
  );
}

export default App;
