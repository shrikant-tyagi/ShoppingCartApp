import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { ProgressBar } from 'react-loader-spinner'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [items , setItems] = useState([]);

  async function fetchData(){
    setLoading(true);
    try{
       const data = await axios.get(API_URL);
       console.log(data.data);
       setItems(data.data);
    }
    catch(error){
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return <div className="w-11/12 flex justify-center mx-auto p-10">
    {
      loading ? (<div className="fixed top-[45%]"><ProgressBar
                            height="80"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor = 'green'
                            barColor = '#51E5FF'/>
                  </div>) : (
        <div className="flex flex-wrap justify-between gap-y-10">
          {
            items.map(item => {
              return <Product key={item.id} item={item}/>
            })
          }
        </div>
      )
    }
  </div>;
};

export default Home;
