/* --------------------------------- 1주차 과제 --------------------------------- */

const tableItmes = document.querySelectorAll(".table-type1 tbody tr").length;
const count = document.querySelector(".count");

count.textContent = `현재게시물 ${tableItmes}개`;
