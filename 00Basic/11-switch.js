const body = document.body;
const themeSelect = document.querySelector("#theme");
const content = document.querySelector("#content");

/* -------------------------------------------------------------------------- */
/*                                     if                                     */
/* -------------------------------------------------------------------------- */
// themeSelect.addEventListener("change", (e) => {
//   const value = e.target.value;
//   console.log(value);
//   if (value === "light") {
//     body.style.backgroundColor = "lightgray";
//   } else if (value === "dark") {
//     body.style.backgroundColor = "darkgray";
//   }
// });

/* -------------------------------------------------------------------------- */
/*                                   Switch                                   */
/* -------------------------------------------------------------------------- */
// switch는 일치 연산자만 작동
// 더 간결하게 작성 가능
themeSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  console.log(value);

  //   key: 기준이 되는 값
  //   switch (key) {
  //     case value:
  //       break;
  //   }

  switch (value) {
    case "light":
      body.style.backgroundColor = "lightgray";
      break;
    case "dark":
      body.style.backgroundColor = "darkgray";
      break;
  }
});
