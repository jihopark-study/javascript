export const Select = (onSelect, options = {}) => {
  const config = {
    parent: ".select",
    activeClassName: "active",
    topVariableName: "--top",
    ...options,
  };
  // 구조분해할당 또는 점표기법으로 작성한다
  const selects = document.querySelectorAll(config.parent);

  if (selects === 0) {
    return;
  }

  /* ---------------------------------- 토글버튼 ---------------------------------- */
  const ToggleList = (select) => {
    const button = select.querySelector("button");

    // 버튼을 누르면 접힘펼침 - .select.active
    button.addEventListener("click", () => {
      select.classList.toggle(config.activeClassName);
    });
  };

  /* --------------------------------- 리스트 제어 --------------------------------- */
  const handleList = (select) => {
    const button = select.querySelector("button");
    const list = select.querySelectorAll("li");
    const listWrapper = select.querySelector("div");

    const height = button.offsetHeight;
    console.log(height);
    // listWrapper.setproperty(변수명,값);
    listWrapper.style.setProperty("--top", `${height}px`);

    // 리스트를 누르면 해당 텍스트를 버튼으로 복제
    list.forEach((li) => {
      li.addEventListener("click", (e) => {
        const text = li.textContent;
        const value = e.target.value;
        // console.log(value);
        button.textContent = text;

        typeof onSelect == "function"
          ? onSelect(value)
          : console.error("반드시 함수로 전달해야 합니다.");

        // 리스트를 누르면 리스트가 접힘힘 .select removeClass
        select.classList.remove(config.activeClassName);
      });
    });
  };

  selects.forEach((select) => {
    ToggleList(select);
    handleList(select);
  });
};
