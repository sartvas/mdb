/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

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
    ], 
};

const adv = document.querySelectorAll(".promo__adv img"),
      promoTitle = document.querySelector(".promo__adv-title"),
      promoMenuItem = document.querySelectorAll(".promo__menu-item"),
      poster = document.querySelector(".promo__bg"),
      movieList = document.querySelector('.promo__interactive-list');
      

adv.forEach(item => {
    item.remove();
});

promoTitle.textContent = "";
promoMenuItem[0].textContent = "Фильмецы";
promoMenuItem[1].textContent = "Серияльчики";
promoMenuItem[2].textContent = "Мультяшки";
 console.log(poster);

 poster.style.backgroundImage = "url('img/bg.jpg')";

 movieList.innerHTML = '';

 movieDB.movies.sort();

 movieDB.movies.forEach((films,i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${films}
        <div class="delete"></div>
        </li>
        `;
 });






