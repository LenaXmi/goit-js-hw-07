//Напиши скрипт, который выполнит следующие операции.

//Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item.Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

//Например для первой категории получится:

//Категория: Животные
//Количество элементов: 4

const allListEl = document.querySelectorAll('.item');
console.log(`В списке ${allListEl.length} категории.`);

const enumCategories = allListEl.forEach(listEl => {
    console.log(`Категория: ${listEl.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${listEl.lastElementChild.children.length}`);
        
  
});