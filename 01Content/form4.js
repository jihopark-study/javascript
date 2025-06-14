// 체크박스 전체 체크 / 해제
const allCheck = () => {
  const allCheckBoxs = document.querySelectorAll(".check-list .all");

  allCheckBoxs.forEach((allCheckBox) => {
    allCheckBox.addEventListener("click", () => {
      const checkBoxs = allCheckBox.closest(".check-list").querySelectorAll("input");

      if (allCheckBox.checked) {
        checkBoxs.forEach((checkBox) => {
          checkBox.checked = true;
        });
      } else {
        checkBoxs.forEach((checkBox) => {
          checkBox.checked = false;
        });
      }
    });
  });
};

allCheck();
