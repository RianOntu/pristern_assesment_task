import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter';
import Products from '../Products/Products';

function Home() {
    const [datas,setDatas]=useState([]);
    const [expand,setExpand]=useState(false);

    let url = import.meta.env.VITE_baseUrl
    useEffect(()=>{
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    })
    return (
        <>
        <div className="container mt-5 mb-5">
          <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
          <Filter datas={datas}></Filter>
          </div>
          <div className="col-12 col-md-6 col-lg-9">
            <Products datas={datas} setExpand={setExpand} expand={expand}></Products>
            </div>
          </div>
        </div>
        </>
        
    );
}

export default Home
