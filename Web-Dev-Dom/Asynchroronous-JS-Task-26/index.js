const endPoint = "https://crudcrud.com/api/bda438dbb36a40aba87c6c0536be9bda/appointmentData";
document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener for the DOMContentLoaded event
  // This function will be executed once the DOM is fully loaded
  axios.get(`${endPoint}`)
    .then((response) => {
      // After the GET request, display the user data on the screen
      response.data.forEach((userDetails) => {
        displayUserOnScreen(userDetails);
      });
    })
    .catch((error) => console.log(error));

  // Add an event listener for the form submission
  // const form = document.querySelector('form');
  // form.addEventListener('submit', handleFormSubmit);
});
function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(`${endPoint}`,userDetails)
    .then((response) => {
      displayUserOnScreen(response.data)
      // Clearing the input fields
     document.getElementById("username").value = "";
     document.getElementById("email").value = "";
     document.getElementById("phone").value = "";
    })
    .catch((error) => console.log(error));
}

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    //localStorage.removeItem(userDetails.email);
    axios.delete(`${endPoint}/${userDetails._id}`)
    .then((result) => {
      console.log('Deleted the data  and result =',result);
    })
    .catch((error) => console.log(error));
  });

  editBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    //localStorage.removeItem(userDetails._id);
    console.log("userDetails value before calling delete from edit ",userDetails);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
    axios.delete(`${endPoint}/${userDetails._id}`)
    .then((result) => {
      console.log('Deleted the data and populate to input fields and result is =',result);
    })
    .catch((error) => console.log(error));
  });
}

// Do not touch code below
//module.exports = handleFormSubmit;
