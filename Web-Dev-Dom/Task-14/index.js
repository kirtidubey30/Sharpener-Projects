// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission (to avoid page reload)

  // Get user input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Create an object to store user details
  const user = {
    username,
    email,
    phone,
  };

  // Save user details to local storage
  saveUserDetails(user);

  // Display user entries
  displayUserEntries();
}

// Function to save user details to local storage
function saveUserDetails(user) {
  // Retrieve existing user data (if any)
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Add the new user to the array
  existingUsers.push(user);

  // Save updated user data back to local storage
  localStorage.setItem('users', JSON.stringify(existingUsers));
}

// Function to display user entries in the UI
function displayUserEntries() {
  const userList = document.getElementById('userList'); // Assuming you add an ID to the <ul> element

  // Clear existing list items
  userList.innerHTML = '';

  // Retrieve user data from local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Create list items for each user
  users.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.username} - ${user.email} - ${user.phone}`;
    userList.appendChild(listItem);
  });
}

// Call displayUserEntries initially to load existing data
displayUserEntries();