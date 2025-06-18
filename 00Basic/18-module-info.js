// export default function first() {
//   console.log("export default");
// }
export const first = (second) => {
  console.log("first");
};

const arrowDefault = () => {
  console.log("default2");
};
export default arrowDefault;
// default는 한 개 밖에 내보낼 수 없음
