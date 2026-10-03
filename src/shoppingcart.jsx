import { useState } from "react";

const Shopingcart = () => {
const [products, setproducts ] = useState([])
const [productname, setproductname ] = useState('')
const [productprice, setproductprice] = useState('')


return (
  <div>
  <h2>simple shopping cart</h2>
 
  <div>
  <h3>add a product </h3>
  </div>
  <input type="text" placeholder="produuct name" />
  <input type="number" 
  placeholder="price"/>
  <div>
     <h2> products in cart </h2>
  </div>
 </div>
);
}
export default Shopingcart;