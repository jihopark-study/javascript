/* --------------------------------- 1주차 과제 --------------------------------- */

// 추천인 아이디 유효성 확인
const checkRefId = () => {
  const btn = document.querySelector(".btn-ref");
  const input = document.querySelector("#txt7_2_1");
  const message = document.querySelector("#message");

  btn.addEventListener("click", () => {
    const refId = input.value.trim();

    if (refId === "") {
      message.style.color = "red";
      message.textContent = "추천인 아이디를 입력해주세요.";
    } else {
      message.style.color = "blue";
      message.textContent = `${refId}님을 추천하였습니다.`;
    }
  });
};

checkRefId();

// 이메일 옵션 컨트롤
const emailStateChange = () => {
  const select = document.querySelector(".email select");
  const options = select.querySelectorAll("option");
  const input = document.querySelector(".domain");

  const checkOption = () => {
    options.forEach((option) => {
      if (option.selected) {
        input.value = option.textContent;
        input.setAttribute("readonly", "true");

        if (option.textContent === "직접입력") {
          input.removeAttribute("readonly");
          input.focus();
          input.value = "";
        }
      }
    });
  };

  // [내가 작성한 코드]
  // select.addEventListener("change", () => {
  //   checkOption();
  // });

  // [쌤 피드백]
  select.addEventListener("change", checkOption);

  checkOption();
};

emailStateChange();
