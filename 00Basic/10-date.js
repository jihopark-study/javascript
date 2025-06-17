/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 날짜                           */
/* -------------------------------------------------------------------------- */
const date = new Date();
// console. log(date);
// 년
// console. log(date-getFullYear());
// date.setFullYear (2023);
// console. log(date);

// 월
// console. log(date-getMonth());
// date.setMonth(0);
// console. log(date);

// 일
// console. log(date.getDate());
// date.setDate(16);
// console. log(date);

// 시
// console. log(date.getHours());
// date.setHours (9);
// console. log(date);

// 분
// console. log(date-getMinutes());
// date.setMinutes (30);
// console. log(date);

// 초
// console. log(date.getSeconds);
// date. setSeconds (25) ;
// console. log(date) ;

const copyrightYear = () => {
  const date = document.querySelector("footer date");
  const thisYear = new Date() - getFullYear();
  console.log(thisYear);
  date.innerHTML = thisYear;
};
copyrightYear();
