import React from 'react'
import Filter from '../Filter/Filter';
import Products from '../Products/Products';

function Home() {
    return (
        <>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-6 row-cols-lg-3">
          <Filter></Filter>
          </div>
          <div className="row row-cols-1 row-cols-md-6 row-cols-lg-9">
            <Products></Products>
            </div>
        </div>
        </>
        
    );
}

export default Home
