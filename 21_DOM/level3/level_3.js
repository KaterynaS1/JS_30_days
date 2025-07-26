const year = document.querySelector('.year');
const wrapper = document.querySelector('.wrapper');
const basicColors = [
  "Black",
  "White",
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Cyan",
  "Magenta",
  "Gray",
  "Orange",
  "Brown",
  "Purple",
  "Pink",
  "Lime",
  "Navy",
  "Teal",
  "Olive",
  "Maroon",
  "Silver",
  "Gold",
  "Coral"
];

wrapper.style.maxWidth = '600px';
wrapper.style.margin = 'auto';
wrapper.style.fontFamily = 'Arial, san-serif'
year.style.fontSize = '45px'

document.body.style.height = '100vh'

function getRandomColor(){
  const i = Math.floor(Math.random()*20);
  return basicColors[i];
}

/* setInterval(() => {
  year.style.color = getRandomColor();
}, 600); */

function changeElColor(el, property){
  el.style[property] = getRandomColor();
}

/* setInterval(changeYearColor, 600); */

setInterval(() => {
changeElColor(year, 'color');
changeElColor(year, 'backgroundColor');
// changeElColor(button);
}, 600);

/*
until i<teraz
1 = red
2 = blue 
3 = green
 = do rand() 1 / 2 / 3
sleep 1 sec

const date = new Date();
const sec = date.getSeconds();
for(let i = date; i>da; i++)
do {
const i = 2
year = Math.rand() * 10;

} while(i<3)

*/