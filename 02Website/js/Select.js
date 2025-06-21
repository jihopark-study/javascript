export const Select = (onSelect) => {
  const selects = document.querySelectorAll(".select-box");

  if (selects === 0) {
    return;
  }

  /* ---------------------------------- 토글 버튼 --------------------------------- */
  const ToggleActive = (select) => {
    const btn = select.querySelector("button");

    // 버튼 클릭 시 접힘 펼침
    btn.addEventListener("click", () => {
      select.classList.toggle("active");
    });
  };

  const handleList = (select) => {
    const btn = select.querySelector("button");
    const listWrapper = select.querySelector("div");
    const list = select.querySelectorAll("li");

    // list의 top 위치 자동 계산
    const height = btn.offsetHeight;
    console.log(height);
    listWrapper.style.setProperty("--top", `${height}px`);

    // // 버튼 클릭 시 접힘 펼침
    // btn.addEventListener("click", () => {
    //   select.classList.toggle("active");
    // });

    // 리스트 클릭 시 해당 텍스트를 버튼으로 복제
    list.forEach((li) => {
      li.addEventListener("click", (e) => {
        const text = e.target.textContent;
        const value = e.target.value;
        // console.log(text, value);
        btn.textContent = text;

        typeof onSelect === "function"
          ? onSelect(value)
          : console.error("반드시 함수로 전달해야 합니다.");

        // 리스트를 누르면 셀렉트의 active 클래스 제거
        select.classList.remove("active");
      });
    });
  };

  selects.forEach((select) => {
    ToggleActive(select);
    handleList(select);
  });
};
