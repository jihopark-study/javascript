/* --------------------------------- 2주차 과제 --------------------------------- */

// 게시판 리스트
export const BoardData = () => {
  const tabContent = document.querySelector(".tab-content");
  const list = document.querySelector(".news-list");

  tabContent.innerHTML = data.map((item) => {
    const { category, title, date } = item;

    return `
      <ul class="news-list mt45">
        <li>
          <a href="">
            <span class="category">뉴스토마토</span>
            <span class="subject">올해 반등 시작한 리츠...IPO·ETF상장 박차</span>
            <span class="date">2024.05.16</span>
          </a>
        </li>
        <li>현재 데이터가 존재하지 않습니다.</li>
      </ul>
    `;
  });
};

// 탭메뉴
export const Tab = () => {
  const tabs = document.querySelectorAll(".tab-type1 button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const tabId = e.target.id;

      contents.forEach((content) => {
        const trgContent = content.getAttribute("aria-labelledby");

        trgContent === tabId ? content.classList.add("active") : content.classList.remove("active");
      });
    });
  });
};
