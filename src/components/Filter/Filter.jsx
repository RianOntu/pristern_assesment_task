import React from 'react'

function Filter({datas}) {

    const arrayWithDuplicates = [1, 2, 3, 1, 2, 4, 5, 5];


const uniqueSet = new Set(arrayWithDuplicates);


const uniqueArray = Array.from(uniqueSet);

console.log(uniqueArray);
    return (
        <>
         <h2>Filter By Category:</h2>
         <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
        </>
    )
}

export default Filter
