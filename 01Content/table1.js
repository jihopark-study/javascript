/* --------------------------------- 1주차 과제 --------------------------------- */
// 데이터 바인딩
const boardData = [
  {
    no: 1,
    category: "보상",
    group: "수도권수도건설단",
    title: "한강하류권(3차)급수체계조정사업(우선시행구간) 수도권수도건설단 사업 최초 시행구간",
    file: true,
    writer: "박종환",
    date: "2025-05-05",
    hit: 5990,
  },
  {
    no: 2,
    category: "점검",
    group: "경기도수도건설단",
    title: "급수체계조정사업(우선시행구간) 수도권수도건설단 사업 최초 시행구간",
    file: true,
    writer: "박지호",
    date: "2025-01-05",
    hit: 12,
  },
  {
    no: 3,
    category: "보상",
    group: "강원수도건설단",
    title: "강원 수도권수도건설단 사업 최초 시행구간",
    file: false,
    writer: "김태형",
    date: "2024-03-05",
    hit: 55,
  },
];

const table = document.querySelector(".table-type1 tbody");

// 이렇게도 가능
// const result = boardData.map(({ no, category, date, file, group, hit, title, writer }, index) => {

const result = boardData.map((item, index) => {
  // 구조분해 할당을 사용하면 반복적인 item.no 과 같은 형태로 작성하지 않아도 된다.
  // 구조분해할당 조회할 때 command + i로 빠르게 입력
  const { no, category, date, file, group, hit, title, writer } = item;

  if (file === true) {
    console.log(3);
  }
  return `
        <tr>
            <td>${no}</td>
            <td>${category}</td>
            <td>${group}</td>
            <td>
                <a href="">
                ${title}
                <img src="" alt="" />
                </a>
            </td>
            <td>
                <a href="">${file ? '<img src="./images/ico_file.svg" alt="" />' : "-"}</a>
            </td>
            <td>${writer}</td>
            <td>${date}</td>
            <td>${hit.toLocaleString()}</td>
        </tr>
    `;
});
table.innerHTML = result.join("");

if (boardData.length === 0) {
  table.innerHTML = `
        <tr>
            <td colspan="8">현재 게시물이 존재하지 않습니다.</td>
        </tr>
    
    `;
}

if (boardData.length >= 1) {
  const count = document.querySelector(".count");
  count.textContent = `현재게시물 ${boardData.length}개`;
}

// 세자리마다 쉼표 찍기
// 현재 게시물이 없습니다
// 첨부파일

// [쌤 코드]
const boardData = [
  {
    no: 0,
    category: "보상",
    group: "수도권수도건설단",
    title: "한강하류권(3차)급수체계조정사업(우선시행구간) 수도권수도건설단 사업 최초 시행구간",
    file: true,
    writer: "박종환",
    date: "2025-05-05",
    hit: 1234,
  },
  {
    no: 1,
    category: "기타",
    group: "광주전남지역본부",
    title: "[장흥수도관리단]관로시설 긴급 복구 협력업체 지원 사업",
    file: true,
    writer: "박종환",
    date: "2025-05-05",
    hit: 5,
  },
  {
    no: 2,
    category: "기타",
    group: "경남부산지역본부",
    title: "[장흥수도관리단]관로시설 긴급 복구",
    file: false,
    writer: "관리자",
    date: "2025-05-05",
    hit: 12,
  },
];

const table = document.querySelector(".table-type1");
const tbody = table.querySelector("tbody");
const count = document.querySelector(".count");
count.textContent = `현재게시물 ${boardData.length}개`;

if (boardData.length === 0) {
  tbody.innerHTML = `
    <tr>
        <td colspan="8">현재 게시물이 존재하지 않습니다.</td>
    </tr>
    `;
} else {
  tbody.innerHTML = boardData
    .map((item) => {
      const { category, date, file, group, hit, no, title, writer } = item;
      return /*html */ `
        <tr>
            <td>${no}</td>
            <td>${category}</td>
            <td>${group}</td>
            <td class="text-left">
                <a href="">
                ${title}
                </a>
            </td>
            <td>
                <a href="">${file ? '<img src="./images/ico_file.svg" alt="" />' : "-"}</a>
            </td>
            <td>${writer}</td>
            <td>${date}</td>
            <td>${hit.toLocaleString()}</td>
        </tr>
      `;
    })
    .join("");
}
