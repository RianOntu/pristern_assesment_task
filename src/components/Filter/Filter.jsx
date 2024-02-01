import React from 'react'

function Filter({categories,selectedCategories,handleCheckboxChange}) {
 
   
    
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
         
     
        </>
    )
}

export default Filter
