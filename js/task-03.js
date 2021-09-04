//Напиши скрипт для создания галлереи изображений по массиву данных.

//В HTML есть список ul#gallery.
//Используй массив объектов images для создания тегов img вложенных в li. 
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const createPictureGallery = object => {


//   return object.map(image => {
//     const imgEl = document.createElement('img');
//     imgEl.src = image.url ;
//     imgEl.alt = image.alt;
//     imgEl.width = 450;
   

//     const listItemPictureEl = document.createElement('li');
//     listItemPictureEl.style.marginRight = ('10px');
//     listItemPictureEl.style.listStyle = ('none');

//     listItemPictureEl.appendChild(imgEl);
  
//     return listItemPictureEl;

  
//   });

// };

// const gallery = document.getElementById('gallery');
//     gallery.style.display = ('flex');
// gallery.style.alignItems = ('center');
 
// const galleryItems = createPictureGallery(images);
// gallery.append(...galleryItems);

// console.log(gallery);


const createPictureGalleryMarkup = objects => {

  return `<li>
  <img src = '${objects.url}' alt = '${objects.alt}' width = '450'/>
  </li>`
  
}


const gallery = document.getElementById('gallery');
const createGalleryItems = images.map(createPictureGalleryMarkup).join('');
gallery.style.display = ('flex');
gallery.style.alignItems = ('center');
gallery.style.justifyContent = ('space-between');
gallery.style.listStyle = ('none');

gallery.insertAdjacentHTML('beforeend', createGalleryItems)
console.log(gallery)