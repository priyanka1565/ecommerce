import React, { useEffect, useState } from 'react'
import "./product.css"
const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                //console.log(data)
                let products_data = data.products;
                setData(data);
                
                
            } catch (error) {
               console.error("Error fetching data:", error);
            }
            
        }
        fetchData();
    },[])

  return (
    <div className="product_main">
      {data.products.map((data) => {
        return (
          <div className="product_middle">
            <img src={data.image} alt="" />
            <h7>{data.title}</h7>
            <h6>{data.category}</h6>
            <p>{data.price}</p>
            <button>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Product