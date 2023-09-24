import { useDispatch, useSelector } from "react-redux";
import { laptopSelector } from "./store/reducers/laptopSlice";
import { addItemToCart, cartSelector } from "./store/reducers/cartSlice";

function App() {

  const laptops = useSelector(laptopSelector);
  const cart = useSelector(cartSelector);
  const dispatch=useDispatch();

  console.log(cart);
  let total=0;
  if(Array.isArray(cart)){
      cart.forEach(element => {
      total+=element.count*element.price;
    });
  }

  let cartCount=0;
  cart.forEach(ele=>{
    cartCount+=ele.count;
  })
      
 

  return (
    <div className="App">
 <hr />
      <h2>Items</h2>
      <hr />
      {laptops.map(({ price, cpu, ram, id }) => (
        <p key={id}>{price} | {cpu} | {ram} 
        <button onClick={()=>{
          dispatch(addItemToCart(id,price,cpu,ram))
        }}
        >Add to cart</button>
        </p>
      ))}
      <hr></hr>
      <h2>Cart</h2>
      <hr />   
      <h3>{cartCount}</h3>
      <h3>Total: <span>{total} </span></h3> 
    </div>
  );
}

export default App;
