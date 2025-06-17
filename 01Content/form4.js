// 체크박스 전체 체크 / 해제
const allCheck = () => {
  const allCheckBoxs = document.querySelectorAll(".check-list .all");

  allCheckBoxs.forEach((allCheckBox) => {
    allCheckBox.addEventListener("click", () => {
      const checkBoxs = allCheckBox.closest(".check-list").querySelectorAll("input");

      // [내가 작성한 코드]
      // if (allCheckBox.checked) {
      //   checkBoxs.forEach((checkBox) => {
      //     checkBox.checked = true;
      //   });
      // } else {
      //   checkBoxs.forEach((checkBox) => {
      //     checkBox.checked = false;
      //   });
      // }

      // [쌤 피드백]
      checkBoxs.forEach((checkBox) => {
        checkBox.checked = allCheckBox.checked;
      });
    });
  });
};

allCheck();
