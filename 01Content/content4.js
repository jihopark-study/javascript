const title = ["선물하기", "매장찾기", "택배", "이벤트"];
const description = [
  `편의점·마트·와인
  상품 선물`,
  "근처 매장 찾기",
  "택배 접수 및 조회",
  "혜택이 와르르",
];
// const icon = [
//   "url(../images/ico-content4-1.svg)",
//   "url(../images/ico-content4-2.svg)",
//   "url(../images/ico-content4-3.svg)",
//   "url(../images/ico-content4-4.svg)",
// ];
const icon = ["ico1", "ico2", "ico3", "ico4"];

const list = document.querySelectorAll(".service-list li");

list.forEach((item, index) => {
  const itemTitle = item.querySelector(".title");
  const itemDescription = item.querySelector(".description");
  const itemIcon = item.classList.add(icon[index]);

  itemTitle.textContent = title[index];
  itemDescription.textContent = description[index];
});
