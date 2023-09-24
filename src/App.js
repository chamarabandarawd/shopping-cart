import { useDispatch, useSelector } from "react-redux";
import { getPost, selectAllPosts } from "./store/reducers/postSlice";



function App() {
 
  const postObj=useSelector(selectAllPosts);
  const dispatch=useDispatch();

  console.log(postObj)

  return (
    <div className="App">
      <h1>Get All posts</h1>
      <button onClick={()=>dispatch(getPost())}>Get Posts</button>
    </div>
  );
}

export default App;
