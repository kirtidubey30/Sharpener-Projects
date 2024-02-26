// Write your code below:
/*<form>
    <label for="username">USER NAME:
    <input id="username" type="text" />
    </label>
    <label for="email">EMAIL:
    <input id="email" type="text" />
    </label>
     <label for="phone">PHONE:
    <input id="phone" type="text" />
    </label>
    <button type="Submit">Submit </button>
  </form>
*/
function handleFormSubmit(event) {
  event.preventDefault();

  // Collect user details from the form
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Store user details in local storage
  localStorage.setItem('Username', username);
  localStorage.setItem('Email', email);
  localStorage.setItem('Phone', phone);
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);
