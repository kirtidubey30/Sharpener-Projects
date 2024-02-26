function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const newUser = {
    username: username,
    email: email,
    phone: phone
  };

  localStorage.setItem('newUser', JSON.stringify(newUser));
 //clearing the existing user list
  const userExistingList = document.getElementById('userList');
  userExistingList.innerHTML = '';

  //creating an li tag 
  const liTag = document.createElement('li');
  //adding textContent to the li tag
  liTag.textContent = `${username} - ${email} - ${phone}`;
  //append this li to userExistingList
  userExistingList.appendChild(liTag);
}
document.querySelector('form').addEventListener('submit',handleFormSubmit);
