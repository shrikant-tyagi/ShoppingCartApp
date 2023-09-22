import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import {products} from '../data'

const Home = () => {
  // const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts , setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
        // const res = await fetch(API_URL);
        // const data = await res.json();

        setPosts(products);
        console.log(products);
    }
    catch{
      console.log("Error occured");
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
     fetchProductData();
  },[]);


  return (<div>
     {
      loading ? (<Spinner/>) :

      posts.length === 0 ? (<div>No data found</div>) :
        (<div className="grid grid-cols-4 gap-x-10 gap-y-20 w-11/12 mx-auto p-10 min-h-[80vh]">
          {
            posts.map((post) => (
              <Product key={post.id} post={post} />
            ))
          }
        </div>)
     }
  </div>
  );
};

export default Home;