const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// const colorBtn = document.querySelector('.colorBtn');
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex);
// bodyBcg.addEventListener('mousedown', getHex);

function getHex() {
  let hexCol = '#';

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    // console.log(random);
    hexCol += hexNumbers[random];
    console.log(hexCol);
    // alert(hexCol);
  }
  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}

const colors = [
  '#6C5B7B',
  '#C06C84',
  '#F67280',
  '#F8B195',
  '#EC2049',
  'A7226E',
  '45ADA8',
  '#f1e0e4',
  '#ecd5dc'
];

//add event listener

/*colorBtn.addEventListener('click', changeColor);

function changeColor() {
  // bodyBcg.style.backgroundColor = colors[2];

  //get random number, Math.floor gives you a number between 0 and 0.9999... so we round down and times by the length of the array
  let randomColor = Math.floor(Math.random() * colors.length);
  console.log(randomColor);
  bodyBcg.style.backgroundColor = colors[randomColor];
}*/

// var rgb = [255, 0, 0];

// randomly change to showcase updates

// setInterval(setContrast, 1000);

// function setContrast() {
//   // randomly update
//   rgb[0] = Math.round(Math.random() * 255);
//   rgb[1] = Math.round(Math.random() * 255);
//   rgb[2] = Math.round(Math.random() * 255);

//   // http://www.w3.org/TR/AERT#color-contrast
//   var o = Math.round(
//     (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
//       1000
//   );
//   var fore = o > 125 ? 'black' : 'white';
//   var back = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
//   $('.hex').css('color', fore);
//   $('body').css('background-color', back);
// }
