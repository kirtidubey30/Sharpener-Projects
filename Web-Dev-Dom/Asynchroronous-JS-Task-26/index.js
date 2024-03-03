
document.addEventListener('DOMContentLoaded',function () {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('inisde handleFormSubmit');
    axios.get("https://crudcrud.com/api/39a8e09c2df0440a8366bb24ebc4d2b1/appointmentData")
      .then((response) => {
        const data = response.data;
        console.log("data = ",data);
        const userList = document.querySelector('ul');
        userList.innerHTML = '';
        data.forEach((element) => {
          //create an li element 
          let liTag = document.createElement('li');
          //add a textContent to each element
          liTag.textContent = `${element.username} - ${element.email} - ${element.phone}`;

          //add the edit and delete button using innerHtml Property
          liTag.innerHTML += `<button claa="editButton" onClick="editUser('${element._id}')">Edit</button> 
          <button class="deleteButton" onClick="deleteUser('${element._id}')">Delete</button>`

          //append the element with userList 
          userList.append(liTag);
        })
  })
      .catch((error) => console.log(error));
  }
  const form = document.querySelector('form');
  form.addEventListener('submit',handleFormSubmit);

  //handle the case where the function is called after dom is loaded
  handleFormSubmit({preventDefault: () => {} });
})
function editUser(dataId) {
  console.log(`id of editUser is ${dataId}`);
  axios.put("https://crudcrud.com/api/39a8e09c2df0440a8366bb24ebc4d2b1/appointmentData/${dataId}")
  .then((result) => {
    
      console.log('succesfully modified the data');
 
  })
  .catch((err) => {
    console.log(err);
  })
}
function deleteUser(dataId) {
  // Send a DELETE request to the backend API
  axios.delete(`https://crudcrud.com/api/39a8e09c2df0440a8366bb24ebc4d2b1/appointmentData/${dataId}`)
    .then((response) => {
      if (response.status === 200) {
        // Find the corresponding list item and remove it from the DOM
        const listItem = document.querySelector(`[data-id="${dataId}"]`);
        if (listItem) {
          listItem.remove();
        }
      }
    })
    .catch((error) => console.log(error));
}

// Do not touch code below
module.exports = handleFormSubmit;

