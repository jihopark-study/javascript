/* --------------------------------- 1주차 과제 --------------------------------- */

// 팝업 열기
const popOpen = (el) => {
  const popup = document.querySelector(el);
  popup.showModal();
};

// 팝업 닫기
const popClose = () => {
  const closeBtns = document.querySelectorAll(".popup .btn-close");

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".popup").close();
    });
  });
};

popClose();
