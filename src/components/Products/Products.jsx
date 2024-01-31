import React, { useEffect, useState } from 'react'

function Products() {

    const [datas,setDatas]=useState([]);

    let url = import.meta.env.VITE_baseUrl
    useEffect(()=>{
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    })
    return (
        <>
        {
            datas.map(data=>(
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="card" style={{width:"18rem"}}>
          <img src={data.image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.description}</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
                </div>
            ))
        }
       
        </>
    )
}

export default Products
