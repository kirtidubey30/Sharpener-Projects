// Write your code below:
const fruits = document.getElementsByClassName('fruit');
fruits[2].style.backgroundColor = 'yellow';
for(const fruit of fruits) {
  fruit.style.fontWeight = 'bold';
}