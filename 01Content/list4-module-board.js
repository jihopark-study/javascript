/* --------------------------------- 2주차 과제 --------------------------------- */

// 게시판 리스트
export const BoardData = (data, attr) => {
  const tabContent = document.querySelector(`.tab-content[aria-labelledby="${attr}"]`);
  const list = tabContent.querySelector(".news-list");

  if (data.length === 0) {
    list.innerHTML = `
      <li>현재 데이터가 존재하지 않습니다.</li>
    `;
  } else {
    list.innerHTML = data
      .map((item) => {
        const { category, title, date } = item;

        return `
          <li>
            <a href="">
              <span class="category">${category}</span>
              <span class="subject">${title}</span>
              <span class="date">${date}</span>
            </a>
          </li>
        `;
      })
      .join("");
  }
};

// 탭메뉴
export const Tab = () => {
  const tabs = document.querySelectorAll(".tab-type1 button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const tabId = e.target.id;

      tabs.forEach((tab) => {
        tab.removeAttribute("aria-selected");
      });
      e.target.setAttribute("aria-selected", "true");

      contents.forEach((content) => {
        const trgContent = content.getAttribute("aria-labelledby");

        trgContent === tabId ? content.classList.add("active") : content.classList.remove("active");
      });
    });
  });
};

// 뭔가... 1도 효율적이지 않은 느낌이...🥹
// 접근성 관련 속성들 컨트롤 때문에 더 복잡한 느낌이네요🥲
