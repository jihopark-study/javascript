/* --------------------------------- 2주차 과제 --------------------------------- */

// 게시판
export const BoardData = (data) => {
  const tbody = document.querySelector(".table tbody");
  const count = document.querySelector(".table-info span");

  count.textContent = data.length;
  tbody.innerHTML = data
    .map((item, index) => {
      const { category, title, answer } = item;
      return `
        <tr class="question">
            <td>${index + 1}</td>
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
