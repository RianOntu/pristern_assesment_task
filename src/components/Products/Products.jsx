import ShowMoreText from "react-show-more-text";

function Products({datas,expand,setExpand}) {

   
    const executeOnClick=(event)=>{
        
        setExpand(true)
        console.log(event.target.value);
    }
    return (
        
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {
            datas.map(data=>(
                
                <div class="card mt-3" style={{width:"18rem",margin:"auto",height:"500px"}}>
          <img src={data.image} class="card-img-top d-flex" alt="..." style={{width:"150px",height:"150px",justifyContent:"center",margin:"auto"}}/>
          <div class="card-body">
            <h5 class="card-title">{data.title}</h5>
            <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                onClick={()=>executeOnClick}
                expanded={expand}
                
                truncatedEndingComponent={"... "}
            >
            <p class="card-text">{data.description}</p>
            </ShowMoreText>
            <div className="mb-2" style={{bottom: "10px", position: "absolute1important"}}>
            <a href="#" style={{bottom:"3px"}} class="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
               
            ))
           
        }
       
       </div>
        
    )
}

export default Products
