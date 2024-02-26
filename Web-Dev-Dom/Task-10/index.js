document.addEventListener('DOMContentLoaded', function () {
  // Select all delete buttons with the help of class
  const deleteButtons = document.querySelectorAll('.delete-btn');

  // Added edit button to each li
  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.innerHTML += '<button class="edit-btn">Edit</button>';
  });

  // For submitting
  const form = document.querySelector('form');
  const fruitsList = document.querySelector('.fruits');
  const fruitsToAddInput = document.getElementById('fruit-to-add');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Create a new li element using innerHTML
    const newFruitHTML = `
      <li class="fruit">
        ${fruitsToAddInput.value}
        <button class="delete-btn">x</button>
        <button class="edit-btn">Edit</button>
      </li>
    `;

    // Append the new li HTML to the fruits list using innerHTML
    fruitsList.innerHTML += newFruitHTML;
  });

  // Listen for delete button click
  fruitsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      // Get the parent li element to remove
      const fruitToDelete = event.target.parentElement;

      // Remove the fruit li element
      fruitsList.removeChild(fruitToDelete);
    }
  });
});
