import * as nikFunctions from "./modules/functions.js";

nikFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const headerIcon = document.querySelector(".header__icon");
const headerMenuBurger = document.querySelector(".header__menuburger");


function openMenu() {
    headerMenuBurger.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    headerIcon.classList.toggle('_cross');
}

headerIcon.addEventListener('click', openMenu);