import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './Products.css'

function ProductDetails() {
    const singleDetails=useLoaderData();
    console.log(singleDetails);
    return (
        <>
        <div className="container">
            <h1 className='text-center'>Product Details</h1>
            <div className="row margin_top">
                <div className="col-12 col-md-6 col-lg-6">
                 <img src={singleDetails.image} style={{height:"450px",width:"380px"}} className='m-auto' alt="" />
                </div>
                <div className="col-12 offset-md-1 offset-lg-1 col-md-5 col-lg-5">
                    <div style={{width:"299px"}} className='mt-5'>
                    <h4><b>Product Name : {singleDetails.title}</b></h4>
                    <p>Product Description : {singleDetails.description}</p>
                    <p>Category : {singleDetails.category}</p>
                    <p><b>Price : {singleDetails.price}</b></p>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default ProductDetails
