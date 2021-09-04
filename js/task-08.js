//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
//количество элементов в input и нажимает кнопку Создать, после чего рендерится 
//коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - 
//число. Функция создает столько div, сколько указано в amount и добавляет их 
//в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

const container = document.querySelector('#boxes');
const createBtn = document.querySelector('#controls button');
const destroyBtn = document.querySelectorAll('#controls button')[1];

createBtn.addEventListener('click', getValue);
destroyBtn.addEventListener('click', destroyBoxes);

function getValue() {
    
    const value = document.querySelector('#controls input').value;
    createBoxes(value);
};

function destroyBoxes() {
    
    container.innerHTML = '';
   
};

function createBoxes(amount) {
   
    const initialSize = 50;
    const boxes = [];
    for (let i = 1; i <= amount; i += 1){
        const box = document.createElement('div');
        const size = initialSize + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = (`${randomColor()}`);
        
        box.style.border = ('1px solid');
        box.style.marginBottom = ('10px');

       boxes.push(box);
        
        
    }
    
    return (container.append(...boxes));
   
};

function randomColor() {
    
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
};



