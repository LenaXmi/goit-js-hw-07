//Напиши скрипт который, при наборе текста в инпуте 
//input#name - input(событие input), подставляет его текущее значение 
//в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.



const refs = {
    input: document.getElementById('name-input'),
    span: document.getElementById('name-output')
};


refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    

    if (refs.input.value === "") {
        refs.span.textContent = 'незнакомец';
    }
    else
    {refs.span.textContent = event.currentTarget.value;}
};


// refs.input.addEventListener('focus', (event) => { console.log('Фокус на инпуте') });
// refs.input.addEventListener('blur', (event) => { console.log('Блюр на инпуте') });
