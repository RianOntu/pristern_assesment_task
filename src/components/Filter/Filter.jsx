import React from 'react'

function Filter({categories,selectedCategories,handleCheckboxChange,selectedValue,handleSelectChange}) {
   
   
    
    return (
        <>
        <h2>Filter By Category:</h2>
        {
            categories.map(data=>(
                <>
                    <div class="form-check">
  <input   
  className="form-check-input"
  type="checkbox"
  value={data}
  checked={selectedCategories.includes(data)}
  onChange={() => handleCheckboxChange(data)}  />
  <label class="form-check-label" >
    {data}
  </label>
</div></>
            ))
        }

        <h2>Filter By Price:</h2>
        <select 
        class="form-select" 
        aria-label="Default select example" 
        value={selectedValue}
        
        onChange={handleSelectChange}
        >
  <option value='' disabled >Open this select menu</option>
  <option value="asc">Low to High</option>
  <option value="des">High To Low</option>
  
</select>
         
     
        </>
    )
}

export default Filter
