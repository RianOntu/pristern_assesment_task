import { useCallback, useEffect, useRef, useState } from "react";
import ShowMoreText from "react-show-more-text";
import './Products.css';
import SweetPagination from "sweetpagination";

function Products({ datas, selectedCategories, selectedValue }) {
  const showMoreTextRefs = useRef([]);
  const [initialData, setInitialData] = useState(datas);
  const [items, setItems] = useState(datas);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [currentPageData, setCurrentPageData] = useState(datas.slice(0, 10));
  const [shouldFetchMore, setShouldFetchMore] = useState(true);

  useEffect(() => {
    setInitialData(datas);
  }, [datas]);

  useEffect(() => {
    console.log(shouldFetchMore);
    
      let updatedDatas = [...initialData];

      if (selectedCategories.length > 0) {
        updatedDatas = updatedDatas.filter((data) =>
          selectedCategories.includes(data.category)
        );
      }
  
      if (selectedValue === 'asc') {
        updatedDatas = updatedDatas.slice().sort((a, b) => a.price - b.price);
      } else if (selectedValue === 'des') {
        updatedDatas = updatedDatas.slice().sort((a, b) => b.price - a.price);
      }
      if(shouldFetchMore){
        setCurrentPageData(updatedDatas.slice(0, 10));
        
      }
      setItems(updatedDatas);
      
      setShouldFetchMore(updatedDatas.length < 10);
    
 
  }, [selectedCategories, selectedValue, initialData]);

  useEffect(() => {
    console.log("currentPageData:", currentPageData);
    console.log("items:", items);
  }, [currentPageData, items]);

  const executeOnClick = useCallback((event, index) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((prevIndex) => prevIndex !== index)
        : [...prevIndexes, index]
    );
  }, []);

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
              <h4 className="card-title price">Price: {data.price}</h4>
              <a href={`details/${data.id}`} style={{ bottom: "10px", position: "absolute", marginTop: expandedIndexes.includes(index) ? "200px" : "0px" }} className="btn btn-primary" onClick={(event) => executeOnClick(event, index)}>
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
