const endPoint = "https://crudcrud.com/api/c14f18b817c3426baeb24cdb02c6c4ae/orderDetails";

function addOrder(event) {
  event.preventDefault();
  let price = document.getElementById('price').value;
  let dish = document.getElementById('dish').value;
  let table = document.getElementById('chooseTable').value;

  let orderDetails = {
    price,
    dish,
    table
  };

  axios.post(`${endPoint}`, orderDetails)
    .then((result) => {
      console.log(result);
      displayData(result.data);
      document.getElementById('price').value = '';
      document.getElementById('dish').value = '';
      document.getElementById('chooseTable').value = 'Table1';
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayData(data) {
  // Use the last selected table if available; otherwise, use the value from data
  var selectedTable = data.table;
  var selectedElement = document.getElementById(selectedTable);

  // Create a new div element
  var newOrderElement = document.createElement('div');

  // Set the content of the new element
  var price = data.price;
  var dish = data.dish;
  newOrderElement.innerHTML = `${price} - ${dish} - ${selectedTable}`;

  // Create a delete button
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.style.marginLeft = '0.5rem';

  // Add a click event listener to the delete button
  deleteButton.addEventListener('click', function() {
    // Remove the newOrderElement when the delete button is clicked
    newOrderElement.remove();

    axios.delete(`${endPoint}/${data._id}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  });

  // Append the delete button to the new element
  newOrderElement.appendChild(deleteButton);

  // Append the new element to the selected div
  selectedElement.appendChild(newOrderElement);
}

document.addEventListener('DOMContentLoaded', function () {
  // call the get api
  axios.get(`${endPoint}`)
    .then((result) => {
      // then pass the result.data to display function
      result.data.forEach(element => {
        displayData(element);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

