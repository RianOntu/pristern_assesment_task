import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter';
import Products from '../Products/Products';
import Loader from '../Loader/Loader';

function Home({isLoading,setIsLoading}) {
    const [datas,setDatas]=useState([]);
    const [expand,setExpand]=useState(false);

    let url = import.meta.env.VITE_baseUrl
   
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          setDatas(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
    console.log(isLoading);
    const categories=[];
   
    for (let i=0;i<datas.length;i++){
        if(!categories.includes(datas[i].category)){
            categories.push(datas[i].category)
        }
    }
    
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCheckboxChange = (category) => {
      
      setSelectedCategories((prevSelectedCategories) => {
        if (prevSelectedCategories.includes(category)) {
          return prevSelectedCategories.filter((c) => c !== category);
        } else {
          return [...prevSelectedCategories, category];
        }
      });
    };
    const [selectedValue, setSelectedValue] = useState(''); 

    const handleSelectChange = (event) => {
      
      if(event.target.value=='asc'){
        localStorage.clear();
        localStorage.setItem('asc', JSON.stringify('asc'));
        setSelectedValue(JSON.parse(localStorage.getItem('asc')));
      }
      else if(event.target.value=='des'){
        localStorage.clear();
        localStorage.setItem('des', JSON.stringify('des'));
        setSelectedValue(JSON.parse(localStorage.getItem('des')));
      }
    };
      
    return (
        <>
        <div className="container mt-5 mb-5">
      {
          isLoading?<Loader/>: <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
          <Filter datas={datas} categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} handleCheckboxChange={handleCheckboxChange} handleSelectChange={handleSelectChange} selectedValue={selectedValue}></Filter>
          </div>
          <div className="col-12 col-md-6 col-lg-9">

            
              <Products datas={datas} setExpand={setExpand} expand={expand} setDatas={setDatas} selectedCategories={selectedCategories} selectedValue={selectedValue} handleSelectChange={handleSelectChange} isLoading={isLoading} setIsLoading={setIsLoading}></Products>
            
            
              
            
            </div>
          </div>
      }
         
        </div>
        </>
        
    );
}

export default Home
