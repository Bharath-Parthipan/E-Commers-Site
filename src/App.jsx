import { HeaderComponent } from './Components/Header/HeaderComponent'
import { BannerComponent } from './Components/Banner/BannerComponent';
import { Products } from "./Components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Footer } from './Components/Footer/Footer';
import { useState } from 'react';
import data from './assets/product.json'

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="z-3 position-fixed top-0" style={{ width: "100%" }}>
        <HeaderComponent cart={cart} />
      </div>
      <div className="container-fluid p-0">
        <div className='banner-background-color'>
          <BannerComponent />
        </div>
        <div className="container py-5 d-flex flex-wrap justify-content-center align-items-center gap-5">
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App