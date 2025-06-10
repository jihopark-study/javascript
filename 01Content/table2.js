/* --------------------------------- 1주차 과제 --------------------------------- */

const tableItmes = document.querySelectorAll(".table-type1 tbody tr").length;
const count = document.querySelector(".count");

count.style.textAlign = "right";
count.style.marginBottom = "10px";

count.textContent = `현재 게시물 총 ${tableItmes} 건`;
