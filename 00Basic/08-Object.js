/* -------------------------------------------------------------------------- */
/*                                    객체생성                                 */
/* -------------------------------------------------------------------------- */
const user = {
  name: "박지호",
  description: "안녕하세유!",
  infomation: {
    age: 36,
    city: "seoul",
    contury: "korea",
  },
  hello: function () {
    console.log("hi");
  },
};

/* -------------------------------------------------------------------------- */
/*                                    객체접근                                 */
/* -------------------------------------------------------------------------- */
// console.log(user.infomation.age);
// user.hello();
// user.image = "./images/002.jpg";
// console.log(user.image);

// const nickName = document.querySelector(".nick-name");
// nickName.textContent = user.name;

const profile = document.querySelector(".profile");
profile.innerHTML = /* html */ `
    <img src="${user.image}" alt="사용자 아바타" class="avatar">
    <h2 class="hello">안녕하세요, ${user?.name || "사용자"}입니다!</h2>
    <p class="short-description">
        ${user?.description || "등록된 인사말이 없습니다."}
    </p>
    <h3 class="title">기본 정보</h3>
    <ul class="infomation">
        <li><span>${user?.infomation?.age || "-"}</span><strong>나이</strong></li>
        <li><span>${user?.infomation?.city || "-"}</span><strong>도시</strong></li>
        <li><span>${user.infomation?.contury || "-"}</span><strong>국가</strong></li>
    </ul>
`;

/* -------------------------------------------------------------------------- */
/*                                   선택적 체이닝                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  배열 구조분해할당                           */
/* -------------------------------------------------------------------------- */
// const arry = ["나이", "이름", "사는 곳"];
// const arry1 = arry[0];
// const arry2 = arry[1];
// const arry3 = arry[2];

// // console.log(arry3);

// const [a, b, c] = arry;
// console.log(a);

const objData = {
  name: "홍길동",
  age: 10,
  city: "seoul",
  image: "./images/001.jpg",
  login: true,
};

// console.log(objData.name);
// ctrl + i
const { age, image, city, login, name } = objData;

console.log(image);

/* -------------------------------------------------------------------------- */
/*                                  객체 구조분해할당                            */
/* -------------------------------------------------------------------------- */
