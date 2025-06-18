/* --------------------------------- 2주차 과제 --------------------------------- */

import { data } from "./data/table7-module-data.js";

// 테이블 데이터
const tbody = document.querySelector(".table tbody");
const tr = tbody.querySelector(".question");
const count = document.querySelector(".table-info span");

export const BoardData = () => {
  count.textContent = data.length;

  tbody.innerHTML = data
    .map((item) => {
      const { category, title, answer } = item;
      return `
        <tr class="question">
            <td></td>
            <td>${category}</td>
            <td><button>${title}</button></td>
        </tr>
        <tr>
            <td colspan="3">
                <div class="answer">
                    ${answer}
                </div>
            </td>
        </tr>
      `;
    })
    .join("");
};
