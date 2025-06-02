/* -------------------------------------------------------------------------- */
/*                                     if                                     */
/* -------------------------------------------------------------------------- */
const login = (isLogin) => {
  if (isLogin) {
    alert("로그인 하였습니다.");
  }
};

const getName = () => {
  const myName = prompt("이름을 입력하세요.");
  console.log(myName);
  if (myName) {
    // if라는 것은 참을 의미하고, 참이라는 것은 데이터가 있는 경우를 의미
    alert(`${myName}님 안녕하세요.`);
  }
};
/* -------------------------------------------------------------------------- */
/*                                   if/else                                  */
/* -------------------------------------------------------------------------- */
let isDark = false;

const theme = () => {
  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  isDark = !isDark;
};

let isShow = false;

const toggle = () => {
  if (isShow) {
    document.querySelector(".toggle").classList.remove("active");
  } else {
    document.querySelector(".toggle").classList.add("active");
  }
  isShow = !isShow;
  console.log(isShow);
};
/* -------------------------------------------------------------------------- */
/*                               if/else if/else                              */
/* -------------------------------------------------------------------------- */
const age = () => {
  const isAge = document.querySelector(".age").value;
  const text = document.querySelector(".text-age");

  console.log(isAge);
  if (isAge <= 13) {
    text.innerText = "어린이입니다.";
  } else if (isAge <= 19) {
    text.innerText = "청소년입니다.";
  } else {
    text.innerText = "성인입니다.";
  }
};
/* -------------------------------------------------------------------------- */
/*                                   물음표연산자                               */
/* -------------------------------------------------------------------------- */
const promotion = () => {
  const code = Number(document.querySelector(".code").value);
  const text = document.querySelector(".text-code");
  //   if (code === 'abc') {
  //     text.innerText = '프로모션 코드가 적용되었습니다.';
  //   } else {
  //     text.innerText = '유효하지 않은 프로모션 코드입니다.';
  //   }
  const discount =
    code === 123
      ? (text.innerText = "프로모션 코드가 적용되었습니다.")
      : (text.innerText = "유효하지 않은 프로모션 코드입니다.");
};
