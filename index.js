/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable quotes */


let btnOn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btnOn.onclick = function() {
sidebar.classList.toggle("active");
};


searchBtn.onclick = function() {
sidebar.classList.toggle("active");
};
