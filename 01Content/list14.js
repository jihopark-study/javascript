/* --------------------------------- 1주차 과제 --------------------------------- */

const changeContent = () => {
  const items = document.querySelectorAll(".list-type14 li button");
  const messageImg = document.querySelector(".message img");
  const messageTitle = document.querySelector(".message h2");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const itemSrc = item.querySelector("img").getAttribute("src");
      const itemName = item.textContent;

      messageImg.setAttribute("src", itemSrc);
      messageTitle.textContent = itemName;
    });
  });
};

changeContent();
