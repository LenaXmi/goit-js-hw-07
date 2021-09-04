//Напиши скрипт, который реагирует на изменение значения 
//input#font - size - control(событие input) и изменяет инлайн - стиль 
//span#text обновляя свойство font - size.В результате при перетаскивании 
//ползунка будет меняться размер текста.

const slider = document.querySelector('#font-size-control');

const word = document.querySelector('#text');


slider.addEventListener('input', changeFontSize);

function changeFontSize() {
  
    word.style.fontSize = `${slider.value}px`
};
