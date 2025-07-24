document.querySelector('p');
document.querySelector('#first-p');
document.querySelectorAll('p');
const all = document.querySelectorAll('p');
for (let i = 0; i< all.length; i++){
  console.log(all[i].textContent)
}
const ps = document.querySelectorAll('p');
ps[3].textContent = 'Forth paragraph';
ps[0].className = 'main';
ps[1].setAttribute('class', 'main')

