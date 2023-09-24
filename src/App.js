import { useDispatch, useSelector } from "react-redux";
import { getPost, selectAllPosts } from "./store/reducers/postSlice";
import { decrement, increment, numberSelector } from "./store/reducers/numberSlice";



function App() {
 
  const postObj=useSelector(selectAllPosts);
const number=useSelector(numberSelector);

  const dispatch=useDispatch();

  console.log(postObj)

  return (
    <div className="App">
      <h1>Get All posts</h1>
      <h1>{number}</h1>
      <button onClick={()=>{dispatch(increment(5))}}>Increment</button>
      <button onClick={()=>{dispatch(decrement('chmara',10))}}>decrement</button>
      <button onClick={()=>dispatch(getPost("Chamara"))}>Get Posts</button>
    </div>
  );
}

export default App;
