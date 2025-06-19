/* --------------------------------- 2주차 과제 --------------------------------- */

// 연혁
export const HistoryList = (data) => {
  const list = document.querySelector(".history .list");

  list.innerHTML = data
    .map((item) => {
      const { year, title, detail } = item;

      return `
        <li>
          <strong>${year}</strong>
          <div><a href="">${title}</a></div>
          <div>${detail}</div>
        </li>
      `;
    })
    .join("");
};
