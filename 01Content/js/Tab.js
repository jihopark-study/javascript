export const Tab = (tabGroup, tabContent) => {
  const tabs = document.querySelectorAll(`${tabGroup} > *`);
  const contents = document.querySelectorAll(`${tabContent} > *`);

  // if (tabs.length === 0) {
  //   return;
  // }
  // if (contents.length === 0) {
  //   return;
  // }

  if (tabs.length === 0 || contents.length === 0) {
    return;
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      // 1. 탭메뉴 클릭하면 클릭하지 않은것은 비활성화
      tabs.forEach((el) => {
        el.querySelector("button").classList.remove("active");
      });

      // 2. 탭메뉴 클릭하면 활성화
      e.target.classList.add("active");

      console.log(index);

      // 3. 탭메뉴 클릭하면 그에 모든 내용이 비활성화
      contents.forEach((el) => {
        el.classList.remove("active");

        // 4. 탭메뉴 클릭하면 그에 맞는 내용이 활성화
        contents[index].classList.add("active");
      });
    });
  });
};
