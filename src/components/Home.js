
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main>
      <div className='homePageContainer'>
        <h1>!Mercado Libre</h1>
        <h4>Buy today that tomorrow I'm not</h4>
        <div className="containerButtons">
        <Link to = "/Products">{<Button className="btn" variant="contained">Go to Products</Button>}</Link>
        <Link to = "/Cart">{<Button className="btn" variant="contained">Go to Cart</Button>}</Link>
        </div>        
      </div>
    </main>
  )
};

export default Home;