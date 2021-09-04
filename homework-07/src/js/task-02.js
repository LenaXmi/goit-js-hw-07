//В HTML есть пустой список ul#ingredients.
//Напиши скрипт, который для каждого элемента массива ingredients создаст 
//отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const node = ingredients.map((ingredient) => {
  
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  

  return listEl;
});

const list = document.getElementById('ingredients');
  list.append(...node);
