function handleFormSubmit(event) {
  event.preventDefault();

  let expenseName = document.getElementById('amount').value;
  let desc = document.getElementById('desc').value;
  let category = document.getElementById('category').value;

  const userDetails = {
    expenseName,
    desc,
    category
  };

  saveUserDetails(userDetails);
  displayUserDetails();

  // now empty the values after adding
  document.getElementById('amount').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('category').value = '';
}

function saveUserDetails(userDetails) {
  const existingUsers = JSON.parse(localStorage.getItem('userKey')) || [];
  existingUsers.push(userDetails);
  localStorage.setItem('userKey', JSON.stringify(existingUsers));
}

function displayUserDetails() {
  const userLists = document.getElementById('userLists');
  userLists.innerHTML = '';
  const dataOfExistingUser = JSON.parse(localStorage.getItem('userKey')) || [];

  dataOfExistingUser.forEach((user, index) => {
    const liTag = document.createElement('li');
    liTag.textContent = `${user.expenseName} - ${user.desc} - ${user.category}`;
    liTag.innerHTML += `<button onClick="editUser(${index})">Edit</button>
                       <button onClick="deleteUser(${index})">Delete</button>`;
    userLists.appendChild(liTag);
  });
}

function editUser(index) {
  const existingUsers = JSON.parse(localStorage.getItem('userKey')) || [];
  const userToEdit = existingUsers[index];

  document.getElementById('amount').value = userToEdit.expenseName;
  document.getElementById('desc').value = userToEdit.desc;
  document.getElementById('category').value = userToEdit.category;

  const userLists = document.getElementById('userLists');
  const listToRemove = userLists.children[index];
  userLists.removeChild(listToRemove);

  existingUsers.splice(index, 1);
  existingUsers.push(userToEdit);
  localStorage.setItem('userKey', JSON.stringify(existingUsers));
}

function deleteUser(index) {
  const existingUsers = JSON.parse(localStorage.getItem('userKey')) || [];
  existingUsers.splice(index, 1);
  localStorage.setItem('userKey', JSON.stringify(existingUsers));
  displayUserDetails();
}
