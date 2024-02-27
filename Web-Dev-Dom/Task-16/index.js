function handleFormSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const user = { username, email, phone };
  saveUserDetails(user);
  displayUserEntries();

  // Clear input fields after form submission
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}

function saveUserDetails(user) {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  existingUsers.push(user);
  localStorage.setItem('users', JSON.stringify(existingUsers));
}

function displayUserEntries() {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.username} - ${user.email} - ${user.phone} `;

    // Create the Delete and Edit buttons using innerHTML
    listItem.innerHTML += `
      <button onClick="deleteUser(${index})"> Delete</button>
      <button onClick="editUser(${index})"> Edit</button>
    `;

    userList.appendChild(listItem);
  });
}

function deleteUser(index) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  displayUserEntries();
}

function editUser(index) {
  // Retrieve existing users from local storage
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Get the user details at the specified index
  const userToEdit = existingUsers[index];

  // Populate input fields with existing values
  document.getElementById('username').value = userToEdit.username;
  document.getElementById('email').value = userToEdit.email;
  document.getElementById('phone').value = userToEdit.phone;

  // Remove the user details from the screen (list item)
  const userList = document.getElementById('userList');
  const listItemToRemove = userList.children[index];
  userList.removeChild(listItemToRemove);

  // Remove the user details from local storage
  existingUsers.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(existingUsers));
}


