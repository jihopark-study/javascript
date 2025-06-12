/* --------------------------------- 1주차 과제 --------------------------------- */

// 로그인
const login = () => {
  const loginBtn = document.querySelector(".submit");
  const popup = document.querySelector(".popup");
  const message = document.querySelector("#popup-message");

  loginBtn.addEventListener("click", (e) => {
    const user = document.querySelector("#txt1_1").value || "사용자";

    e.preventDefault();
    popup.showModal();
    message.textContent = `${user}님이 로그인 하셨습니다.`;
  });
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

// input value 삭제
const valueDelete = () => {
  const inputs = document.querySelectorAll(".login input");
  const btns = document.querySelectorAll(".btn-del");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.nextElementSibling.style.display = "block";
    });
  });

  btns.forEach((btn) => {
    btn.style.display = "none";

    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      input.value = "";
      btn.style.display = "none";
    });
  });
};

login();
popClose();
valueDelete();
