//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать 
//значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса




// const action = document.querySelectorAll('#counter button');
// console.log(action)
// console.log(action[1].dataset.action)



const counterValue = document.querySelector('#value');
const counterContainer = document.querySelector('#counter');
const counterButtons = document.querySelectorAll('#counter button');
const incButton = counterButtons[1];
const decButton = counterButtons[0];


const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }

};

incButton.addEventListener('click', function () {
    counter.increment();
    counterValue.textContent = counter.value

   

});

decButton.addEventListener('click', function () {
    counter.decrement();
     counterValue.textContent = counter.value

});

