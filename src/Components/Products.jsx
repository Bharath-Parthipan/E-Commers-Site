import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Products = ({ product, cart, setCart }) => {
    const addCart = () => {
      setCart([...cart, product]);
    };
    const removeCart = () => {
      setCart(cart.filter((c) => c.id !== product.id));
    };
  return (
    <div className="Product-container">
      <Card style={{ width: "18rem", padding: "10px", textAlign: "center" }}>
        <Card.Img variant="top" src={product.productImg} className="px-4" style={{ height: "300px", objectFit: "cover" }}/>
        <Card.Body>
          <Card.Title>{product.brands}</Card.Title>
          <Card.Text>
            <h6>Price : {product.price}Rs</h6>
            <div style={{ display: product.rating >= 1 ? "block" : "none" }}>
              <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 1 ? "yellow" : "gray" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 2 ? "yellow" : "gray" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 3 ? "yellow" : "gray" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 4 ? "yellow" : "gray" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: product.rating == 5 ? "yellow" : "gray" }} />
            </div>
          </Card.Text>
          <div>
            {cart.includes(product) ? (
              <Button className="btn btn-danger" onClick={removeCart}>Remove from Cart</Button>
            ) : (
              <Button className="btn btn-primary" onClick={addCart}>Add to Cart</Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}


















// import { useState } from "react"
// import data from "../assets/product.json"
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";



// export const Products = ({ cart, setCart }) => {
//   const [products] = useState(data);

  // const addCart = () => { 
  //   setCart([...cart, products])
  // };
  // const removeCart = () => { 
  //   setCart(cart.filter((c)=> c.id !== products.id))
  // };

//   return (
//     <div className="Product-container d-flex flex-wrap justify-content-center align-items-center gap-5">
//       {products.map((product) => (
//         <div key={product.id}>
//           <Card style={{ width: "18rem", padding: "10px", textAlign: "center" }}>
//             <Card.Img variant="top" src={product.productImg} className="px-4" style={{ height: "300px", objectFit: "cover" }} />
//             <Card.Body>
//               <Card.Title>{product.brands}</Card.Title>
//               <Card.Text>
//                 <h6>Price : {product.price}Rs</h6>
//                 <div style={{ display: product.rating >= 1 ? "block" : "none" }} >
//                   <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 1 ? "yellow" : "gray" }} />
//                   <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 2 ? "yellow" : "gray" }} />
//                   <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 3 ? "yellow" : "gray" }} />
//                   <FontAwesomeIcon icon={faStar} style={{ color: product.rating >= 4 ? "yellow" : "gray" }} />
//                   <FontAwesomeIcon icon={faStar} style={{ color: product.rating == 5 ? "yellow" : "gray" }} />
//                 </div>
//               </Card.Text>
//               <div>
//                 {cart.includes(product) ? (
//                   <Button className="btn btn-danger" onClick={removeCart}>Remove from Cart</Button>
//                 ) : (
//                   <Button className="btn btn-primary" onClick={addCart}>Add to Cart</Button>
//                 )}
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// }
