/* -------------------------------------------------------------------------- */
/*                                   Return                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------- return을 사용하는 경우 ---------------------------- */
// 결과값을 반환해야 할 때
// return으로 보내고 변수(sumNumber)로 받는다.
const sum = () => {
  const button = document.querySelector(".sum button");
  const resultValue = document.querySelector(".sum p");

  const result = () => {
    const number1 = document.querySelector(".sum .number1");
    const number2 = document.querySelector(".sum .number2");
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    return value1 + value2;
  };

  button.addEventListener("click", (e) => {
    e.preventDefault();
    // input은 모두 문자이기 때문에
    // const value1 = number1.value;
    // const value2 = number2.value;

    const sumNumber = result();

    resultValue.textContent = sumNumber;
  });
};
sum();

// 조건에 따라 함수 실행을 종료해야 할 때
const message = () => {
  const button = document.querySelector(".message button");
  const input = document.querySelector(".message input");
  const output = document.querySelector(".message p");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    // trim()은 문자와 앞과 뒤의 공백을 제거해준다.
    if (input.value.trim() === "") {
      console.log("입력해주세요.");
      return;
    }

    output.textContent = input.value;
    console.log("메시지가 발송되었습니다.");
  });
};
message();

// 절차적인 작업을 수행할 때
// const handleValid = () => {
//   const private = document.querySelector(".private");
//   const inputs = private.querySelectorAll("input");
//   const button = private.querySelector("button");
//   const warning = document.querySelector(".warning");

//   const name = private.querySelector(".name");
//   const email = private.querySelector(".email");
//   const age = private.querySelector(".age");

//   button.addEventListener("click", (e) => {
//     // 전송클릭 후 기능
//     e.preventDefault();
//     if (name.value.trim() === "") {
//       warning.textContent = "이름을 입력해주세요";
//       return;
//     }
//     if (email.value.trim() === "") {
//       warning.textContent = "이메일을 입력해주세요";
//       return;
//     }
//     if (age.value.trim() === "") {
//       warning.textContent = "나이를 입력해주세요";
//     }
//   });
// };

// handleValid();

const handleValid = () => {
  const private = document.querySelector(".private");
  const inputs = private.querySelectorAll("input");

  private.addEventListener("submit", (e) => {
    e.preventDefault();
    // 전송클릭 후 기능
    let data = {};
    let text = "";

    inputs.forEach((input) => {
      const value = input.value.trim();
      const name = input.name;
      console.log(name);
      // text = 123;

      // 빈객체에 데이터를 넣고싶으면 대괄호로 쓴다
      // let data = {};
      // data[키] = 값;
      data[name] = value;
    });

    console.log(data);
    console.log(text);

    if (data.name === "") {
      console.log("이름을 입력하세요");
      return;
    }
    if (data.email === "") {
      console.log("이메일을 입력하세요");
      return;
    }
    if (data.age === "") {
      console.log("나이를 입력하세요");
      return;
    }

    console.log("회원가입이 완료되었습니다.");
  });
};

handleValid();

/* ------------------------- return을 사용하지 않아도 되는 경우 ------------------------- */
// 이벤트 헨들러 함수를 사용할 때z
const myName = () => {
  const button = document.querySelector(".event button");
  const input = document.querySelector(".event input");
};
myName();

// 상태변경할 때
const title = () => {
  const heading = document.querySelector(".change-title");
};
title();

// 콘솔에 로그 출력할 때
const consoleCheck = () => {
  //   console.log(`콘솔메세지 :`);
};
consoleCheck();

// DOM을 조작할 때
const listDOM = () => {
  const lis = document.querySelectorAll(".list li");
};
listDOM();

/* -------------------------------------------------------------------------- */
/*                                    호이스팅                                 */
/* -------------------------------------------------------------------------- */
hellow();

function hellow() {
  console.log("text");
}

// const hellow2 = hellow2();

// function hellow2() {
//   console.log("text");
// }

/* -------------------------------------------------------------------------- */
/*                                   호출 스케줄링                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------ setTimeout ----------------------------- */
function showNotification(text) {
  const dialog = document.querySelector("dialog");
  dialog.textContent = text;
  dialog.show();
  const timeout = setTimeout(() => {
    dialog.close();
  }, 2000);
  return timeout;
}

// 알림 호출
const toast = showNotification("쪽지가 도착했습니다.");

let seconds = 0;
/* ------------------------------- setInterval ------------------------------ */
function updateTimer() {
  const timmer = document.querySelector("#timer");
  timmer.innerText = `Timer : ${seconds++}초`;
}

// 1초마다 타이머 업데이트
const interval = setInterval(updateTimer, 1000);

/* ------------------------------ clearTimeout ------------------------------ */
const btnStopToast = document.querySelector(".stop-toast");
btnStopToast.addEventListener("click", () => {
  clearTimeout(toast);
});

/* ------------------------------ clearInterval ----------------------------- */
const btnStopTimer = document.querySelector(".stop-timer");
btnStopTimer.addEventListener("click", () => {
  clearInterval(interval);
});

/* -------------------------------------------------------------------------- */
/*                                    This                                    */
/* -------------------------------------------------------------------------- */
const user = {
  nickName: "Rebehayan",
  firstName: "Ha",
  lastName: "SungPil",
  age: 30,
  getFullName: function () {
    // console.log("메서드");
    console.log(this.firstName);
    // function(기명함수)로 쓰면 내가 속한 객체 기준으로 데이터를 찾음
  },
  // 기명함수 축약
  // getFullName() {} 이렇게 써도 됨

  getName: () => {
    console.log(this.lastName);
  },
  // 화살표 함수는 부모 기준으로 데이터를 찾음
};

user.getFullName();
user.getName();

/* -------------------------------------------------------------------------- */
/*                                  CallBack                                  */
/* -------------------------------------------------------------------------- */
const hi = (callback) => {
  console.log("함수 실행");
  callback("지호");
};

const isCallback = (name) => {
  console.log(`${name}callback 함수가 실행.`);
};
// hi(() => {
//   console.log("callback 함수가 실행.");
// });
hi(isCallback);
