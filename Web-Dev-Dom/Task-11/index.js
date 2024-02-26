// Add another input element inside form to take fruit description
let descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description';

// Select the form and add description input before the button
const form = document.querySelector('form');
form.insertBefore(descriptionInput, form.querySelector('button'));

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameToAdd = document.getElementById('fruit-to-add').value.trim();
  const descriptionToAdd = descriptionInput.value.trim();

  if (nameToAdd && descriptionToAdd) {
    const ul = document.querySelector('.fruits');
    const li = document.createElement('li');
    li.className = 'fruit';

    // Use a paragraph tag for the description
     li.innerHTML = `<strong>${nameToAdd}</strong><p style="font-style: italic;">${descriptionToAdd}</p><button class="delete-btn">x</button>`;
    ul.appendChild(li);

  }
});

// Filter fruits by name or description
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName('fruit');

  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstElementChild.textContent.toLowerCase();
    fruitItems[i].style.display = currentFruitText.includes(textEntered) ? 'block' : 'none';
  }
});


