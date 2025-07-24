document.querySelector('p');
document.querySelector('#first-p');
document.querySelectorAll('p');
const all = document.querySelectorAll('p');
for (let i = 0; i< all.length; i++){
  console.log(all[i].textContent)
}
const allParagr = document.querySelectorAll('p');
allParagr[3].textContent = 'Forth paragraph';

allParagr[0].className = 'main';
allParagr[1].setAttribute('class', 'main');
allParagr[2].className = 'main';
allParagr[3].setAttribute('class', 'main');

/* level 2 */

const mains = document.querySelectorAll('p');
  mains.forEach((main) => {
    main.style.color = 'green';
  }
)
  mains[0].style.border = 'solid';
const mainsBackground = document.querySelectorAll('p');
  mainsBackground.forEach((main) => {
    main.style.backgroundColor = 'yellow';
  }
)
mains[1].style.fontSize = '20px'
mains[3].style.fontFamily = 'cursive'

const headers = document.querySelectorAll('h1');
headers[0].className = 'header';
headers[0].id = 'first-header';
headers.forEach((header, i) => {
  if (i%2 == 0){
    header.style.color = 'red';
  } else {
    header.style.color = 'green'
  }
})
headers[3].textContent = 'bye'