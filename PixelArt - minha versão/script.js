let grid = document.getElementsByClassName('grid-container');
let colors = document.getElementsByClassName('colors');
const btnDran = document.getElementById('draw');
const btnAdd = document.getElementById('add');

let inputN = document.getElementById('Nlines');

function removePixels() {
  let N = grid[0].children.length;
  while (N > 0) {
    const { lastChild } = grid[0];
    grid[0].removeChild(lastChild);
    N = grid[0].children.length;
  }
}

function addColor() {
  let N = colors[0].children.length + 1;
  if (N < 10) {
    let newcolor = document.createElement('div')
    newcolor.classList.add('cor', `cor${N}`)
    colors[0].appendChild(newcolor)
  }
  colors[0].firstChild.classList.add('selected')
  pickerColor();
}

/* function pickerColor() {
  document.querySelectorAll('.cor').forEach((item) => {
    item.addEventListener('click', (event) => {
      if (event.target.classList[2] === 'selected') {
          console.log('es')
      } else {

      }

    }); 
  });
} */

function picker() {
  document.querySelectorAll('.pixel').forEach((item) => {
    item.addEventListener('click', (event) => {
      
      const colorSelected = document.querySelector('.selected').classList[1];
      console.log(colorSelected)
      /*const color = document.querySelector('.selected').style;
      if (event.target.classList.length > 1) {
        event.target.classList.remove(event.target.classList[1]);
      }
      event.target.classList.add(colorSelected);
      event.target.style.backgroundColor(color.backgroundColor);
      console.log(color.backgroundColor)*/
    }); 
  });
}

function addPixels () {
  const nPixels = document.querySelector('input').valueAsNumber;
  removePixels();
  let N = nPixels * nPixels;
  grid[0].style["grid-template-columns"] = `repeat(${nPixels}, 1fr)`;
  grid[0].style["grid-template-rows"] = `repeat(${nPixels}, 1fr)`;
  
  for (let i = 0; i < N; i += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    grid[0].appendChild(pixel);
  }
  picker();
}

inputN.addEventListener('change', addPixels);

btnAdd.addEventListener('click', addColor);

window.onload = addPixels;
