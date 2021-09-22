import { getList } from './list.component.js';
import { planets_dao } from './PlanetasDao.js';
import { starts_dao } from './EstrellasDao.js';

getList('wrapp1', planets_dao);
getList('wrapp2', starts_dao);
var btn_left = document.getElementById('btn-left');
btn_left.onclick = function () {
  document.querySelector('.wrapper').scrollLeft += 200;
};
var btn_rigth = document.getElementById('btn-rigth');
btn_rigth.onclick = function () {
  document.querySelector('.wrapper').scrollLeft -= 200;
};

let logo = document.getElementById('logo');

window.onscroll = () => {
  window.scrollY > 40
    ? logo.classList.add('title-active')
    : logo.classList.remove('title-active');
};
