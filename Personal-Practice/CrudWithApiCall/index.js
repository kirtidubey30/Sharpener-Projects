/*
<body style="margin: 0">
  <form onsubmit="handleFormSubmit(event)">
    <label for="username">Username</label>
    <input type="text" name="username" id="username" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />
    <label for="phone">Phone No</label>
    <input type="tel" name="phone" id="phone" />
    <button type="submit">Submit</button>
  </form>
  <ul></ul>
</body>
*/
document.addEventListener('DOMContentLoaded',function() {
  axios.get(`https://crudcrud.com/api/cf8d66bc4a794f66be8ebc7776a69920/appointmentData`)
  .then((result) => {
    result.data.forEach((userData) => {
      displayDetails(userData);
    })
  })
  .catch((err)  => console.log(err));
})
function handleFormSubmit(event) {
  event.preventDefault();
  
  //store the values submitted from form 
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
   let phone = document.getElementById('phone').value;
  
  //create an object with the values 
  const userDetails = {
    username,
    email,
    phone
  }
  //make a post request
  axios.post("https://crudcrud.com/api/cf8d66bc4a794f66be8ebc7776a69920/appointmentData",userDetails)
  .then((response) => {
    // inside post request if response is there call the display function and pass the response.data
    console.log(response);
    displayDetails(response.data);
      
   //after the post request is done  empty the input fields
   document.getElementById('username').value = '';
   document.getElementById('email').value = '';
   document.getElementById('phone').value = '';
  }) //handle the error thrown by promise
  .catch((err) => {
    console.log(err);
  })
}
function displayDetails(userData) {
//select the ul tag with select query
const userList = document.querySelector('ul');
//create an li tag
const liTag = document.createElement('li')
//add the text with textContent
liTag.textContent = `${userData.username} - ${userData.email} - ${userData.phone}`;
//then with the help of innerHTML add the buttons edit and delete

liTag.innerHTML += `<button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button>`;
userList.appendChild(liTag);

liTag.querySelector('.editBtn').addEventListener('click', function(event){
//use the event which is passed as an argument and find the parentElement and then apply removeChild in userList variable 
userList.removeChild(event.target.parentElement);
//now display all the data in the input field using getElemntById and assign it to userList.value
document.getElementById('username').value = userData.username;
document.getElementById('email').value = userData.email;
document.getElementById('phone').value = userData.phone;
//now make a delete request and handle the successa nd error consition of that api call
axios.delete(`https://crudcrud.com/api/cf8d66bc4a794f66be8ebc7776a69920/appointmentData/${userData._id}`)
.then((result) => {
  console.log("delete the data before editing successfully",result);
})
.catch((err) => console.log(err));
});

liTag.querySelector('.deleteBtn').addEventListener('click',function(event) {
  userList.removeChild(event.target.parentElement);
  axios.delete(`https://crudcrud.com/api/cf8d66bc4a794f66be8ebc7776a69920/appointmentData/${userData._id}`)
  .then((result) => {
    console.log("delete the data before editing successfully",result);
  })
  .catch((err) => console.log(err));
})
}