/*<form>
    <label for="price">
      Add Price
      <input type="number" id="price"/>
    </label>
    <label for="dish">Add dish
      <input type="text" id="dish"/>
    </label>
    <label for="chooseTable">Chooose Table
      <select name="chooseTable" id="chooseTable">
        <option value="Table1">Table1</option>
        <option value="Tbale2">Table2</option>
        <option value="Table3">Table3</option>
      </select>
    </label>
    <button onclick="onAddToBill(event)">Add To Bill</button>
  </form>
 <h1  class="heading">Orders</h1>
  <div id="Table1"> 
    <h3>Table1</h3>
</div>
<div id="Table2">   <h3>Table2</h3>
</div>
<div id="Table3">   <h3>Table3</h3>
</div>
*/
const endPoint = 'https://crudcrud.com/api/cef288f2c27e44119cab6498cb7cd025/orderDetails'
function onAddToBill(event) {
  event.preventDefault();
console.log('inside onAddToBill');
  //store the values in an object 
  const price = document.getElementById("price").value;
  const dish = document.getElementById("dish").value;
  const table = document.getElementById("chooseTable").value;
  const orderObj = {
    price,
    dish,
    table
  }
  //then make a post call to store the  values
axios.post(`${endPoint}`,orderObj)
.then((result) => {
  console.log(result);
  displayData(result.data);
})
.catch((err) => console.log(err));
}
function displayData(data) {
  console.log("data in paramenter =",data);
  //store the selectedTable value in a var
  const selectedTable = data.table;
  console.log("selectedTable =",selectedTable);
  //select the div element
  let tableList = document.getElementById(selectedTable);
  console.log("tableList = ",tableList);
  //create the li element and add the textContent for it along with the delete button
  const divTag = document.createElement('div');
  divTag.innerHTML += `${data.price} - ${data.dish} `;

  console.log("divTag =",divTag);
   // Create a delete button
   var deleteButton = document.createElement('button');
   deleteButton.innerHTML = 'Delete';
 
   // Add a click event listener to the delete button
   deleteButton.addEventListener('click', function() {
     // Remove the newOrderElement when the delete button is clicked
     divTag.remove();
 
     axios.delete(`${endPoint}/${data._id}`)
       .then((result) => console.log(result))
       .catch((err) => console.log(err));
   });

   //append the deleteBtn and the append divTag to tableList

   divTag.appendChild(deleteButton);
   tableList.appendChild(divTag);
}

window.addEventListener('DOMContentLoaded',function() {
  //call the getApi and pass the response To displayData
  axios.get(`${endPoint}`)
  .then((result) => {
    result.data.forEach((ele) => {
      displayData(ele);
    })
  })
  .catch((err) => {
    console.log(err);
  })
})