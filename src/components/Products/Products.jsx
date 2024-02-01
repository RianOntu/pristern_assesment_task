import { useEffect, useRef, useState } from "react";
import ShowMoreText from "react-show-more-text";
import './Products.css';
import SweetPagination from "sweetpagination";
import { debounce } from 'lodash';

function Products({ datas, expand, setExpand,selectedCategories,selectedValue,handleSelectChange }) {
  const showMoreTextRefs = useRef([]);
  const [items,setItems]=useState([]);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [currentPageData, setCurrentPageData] = useState(datas);

 

  
  useEffect(() => {
    
  
    if (selectedCategories.length > 0) {
      const selectedDatas = datas.filter((data) =>
        selectedCategories.includes(data.category)
      );
      setItems(selectedDatas);
      setCurrentPageData(selectedDatas);
    
    } else {
     
      setItems(datas);
      setCurrentPageData(datas);
     
    }
  }, [selectedCategories]);
  
    useEffect(()=>{
      let sortedArray=[];
      let sortedArrayDescending=[]
     if(selectedValue){
      if(selectedValue=='asc'){
         sortedArray = currentPageData.sort((a, b) => a.price - b.price);
        setCurrentPageData(sortedArray)
      }
      else if(selectedValue=='des'){
         sortedArrayDescending = currentPageData.sort((a, b) => b.price - a.price);
        setCurrentPageData(sortedArrayDescending)
      }else{
        setCurrentPageData(datas)
      }
     }
   

    },[selectedValue])

  const executeOnClick = (event, index) => {
   
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((prevIndex) => prevIndex !== index)
        : [...prevIndexes, index]
    );
  };
 


  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {currentPageData.map((data, index) => (
        <div
          className="card mt-3"
          style={{ height: expandedIndexes.includes(index) ? "auto" : "450px", margin: "auto", width: "18rem" }}
          key={index}
        >
          <img src={data.image} className="card-img-top d-flex" alt="..." style={{ width: "150px", height: "150px", justifyContent: "center", margin: "auto" }} />
          <div className="card-body">
         
            <div>
              <h5 className="card-title title">{(data.title).split(' ').slice(0, 3).join(' ') + '...'}</h5>
              </div>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="show-more-less-clickable"
              onClick={(event) => executeOnClick(event, index)}
              expanded={expandedIndexes.includes(index)}
              truncatedEndingComponent={"... "}
            >
              <div>
                <p className="card-text">{data.description}</p>
              </div>
              
            </ShowMoreText>
            <h4 className="card-title price">Price : {data.price}</h4>
            
           
              <a href="#" style={{ bottom: "10px",position: "absolute", marginTop: expandedIndexes.includes(index) ? "200px" : "0px" }} className="btn btn-primary" onClick={(event) => executeOnClick(event, index)}>
                View Details
              </a>
            
          </div>
        </div>
      ))}
      
    </div>
       <SweetPagination
       currentPageData={setCurrentPageData}
       dataPerPage={10}
       getData={items}
       navigation={true}
       
     />
     </>
  );
}

export default Products;
