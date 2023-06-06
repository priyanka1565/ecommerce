import React, { useEffect, useState } from 'react'

const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                //console.log(data)
                setData(data);
                console.log(data)
                
            } catch (error) {
               console.error("Error fetching data:", error);
            }
            
        }
        fetchData();
    },[])

  return (
    <div>
          {data.map((data) => {
              return (
                  <div>
                <img src={ data.image} alt="" />
                      <h4>{data.title}</h4>
                      <h6>{data.category }</h6>
                      <p>{data.price}</p>
                  </div>
               
              );
          })}
        
    </div>
  );
}

export default Product