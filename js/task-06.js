//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его 
//содержимое на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, 
//если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.getElementById('validation-input');


input.addEventListener('blur', () => {
 
    const inputValue = input.value.length;
    const data = Number(input.dataset.length);
   
   
    if (inputValue === data) {

  input.classList.remove('invalid');
  input.classList.add('valid');
        
    }
    else {

        input.classList.remove('valid');
        input.classList.add('invalid');
    }
  
});
