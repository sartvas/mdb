/* Задания на урок:

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      promoGenre = poster.querySelector('.promo__genre'),
      menuList = document.querySelector('.promo__menu-list'),
      interactiveList = document.querySelector('.promo__interactive-list');
      
      
adv.forEach(item =>{
    item.remove();
});

promoGenre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

interactiveList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item,i) =>{
    interactiveList.innerHTML += `
    <li class="promo__interactive-item">${i+1}) ${item}
     <div class="delete"></div>
     </li>
    `;
});


console.dir(menuList);

    

