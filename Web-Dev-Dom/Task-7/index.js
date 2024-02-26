const h3Tag = document.createElement('h3');
const h3TagText = document.createTextNode('Buy high-quality organic fruits online');
h3Tag.appendChild(h3TagText);
h3Tag.style.fontStyle = 'italic';

const mainHeading = document.getElementById('main-heading');
mainHeading.insertAdjacentElement('afterend', h3Tag);

const pTag = document.createElement('p');
const pText = document.createTextNode('Total fruits: 4');
pTag.id = 'fruits-total';
pTag.appendChild(pText);

const secondDiv = document.getElementsByTagName('div')[1];
secondDiv.insertAdjacentElement('afterbegin', pTag);
