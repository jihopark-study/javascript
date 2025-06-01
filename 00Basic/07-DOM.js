/* -------------------------------------------------------------------------- */
/*                                   DOM 선택자                                */
/* -------------------------------------------------------------------------- */
// document.querySelector('CSS 선택자');
// document.querySelector('.select');
// console.log(document.querySelector('.select'));
// const li = document.querySelector('.select li');
const lis = document.querySelectorAll('.select li');
// console.log(lis[2]);

lis.forEach((item, index) => {
  console.log(item, index);
  item.style.border = '1px solid magenta';
  item.style.backgroundColor = 'sky';
  //   item.classList.add('active' + index);
  //   item.classList.add('active' + (index + 1));
  console.log(typeof index);

  item.classList.add(`active${index + 1}`);
});

// const 함수 = (인수)=>{}
// const 함수 = function(인수){}
// function(인수){}
// (인수)=>{}
/* -------------------------------------------------------------------------- */
/*                                 DOM 클래스 제어                              */
/* -------------------------------------------------------------------------- */
const tabsButton = document.querySelectorAll('.tabs button');

tabsButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    // e.target.classList.add('active');
    // button.classList.remove('active');
    // button.classList.toggle('active');

    // 1. 클릭한 것은 추가 그 외 삭제
    // 2. 모두 삭제 후 클릭한 것 추가

    tabsButton.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});

/* -------------------------------------------------------------------------- */
/*                                 DOM 텍스트 제어                              */
/* -------------------------------------------------------------------------- */
const textButton = document.querySelectorAll('.text-list button');

// textButton.forEach((btn, idx) => {
//   btn.addEventListener('click', () => {
//     const text = btn.textContent;
//     console.log(btn.textContent);
//     // alert(text + ' 버튼을 눌러, 수강신청되었습니다.');
//     alert(`버튼의 ${idx + 1}번째 눌러 ${text} 수강신청되었습니다.`);
//   });
// });

// console.log(btn.previousElementSibling.previousElementSibling);
// console.log(btn.closest("li").querySelector(".name"));

// 누구누구님이 신청하셧습니다.
textButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    const userName = btn.closest('li').querySelector('.name');
    const userNameContent = userName.textContent;
    alert(`${userNameContent}님이 신청하였습니다.`);

    btn.textContent = '수강완료';
    // btn.textContent = userNameContent;
    const btnParent = btn.closest('li');

    btnParent.style.border = '1px solid magenta';
  });
});

/* -------------------------------------------------------------------------- */
/*                                  DOM 속성 제어                              */
/* -------------------------------------------------------------------------- */
const rating = document.querySelector('.ratings input');
console.log(rating);
// rating.setAttribute(속성명, 속성값);
rating.setAttribute('disabled', 'true'); //스크립트에서는 꼭 boolean 값을 넣어줘야 한다.

const 변수명 = document.querySelectorAll('선택자');

// ${1:선택자}.forEach((${2:아이템명}, ${3:인덱스값})=>{
//     $4
// });

const disabledButton = document.querySelector('.btn-disabled');
const radios = document.querySelectorAll('.ratings input');

disabledButton.addEventListener('click', () => {
  radios.forEach((radio) => {
    radio.setAttribute('disabled', 'true');
  });
});

// 눈을 클릭하면 input 타입을 text로 바꿈
// class active
const btnPassword = document.querySelector('.password button');
const passwordInput = document.querySelector('.password input');

let toggleAttr = true;

btnPassword.addEventListener('click', () => {
  if (toggleAttr) {
    passwordInput.setAttribute('type', 'text');
    btnPassword.classList.add('active');
  } else {
    passwordInput.setAttribute('type', 'password');
    btnPassword.classList.remove('active');
  }
  toggleAttr = !toggleAttr;
});

const changeInput = document.querySelector('.change-name input');
const changeButton = document.querySelector('.change-name button');

let toggle = true;
changeButton.addEventListener('click', () => {
  if (toggle) {
    changeInput.removeAttribute('readonly');
  } else {
    changeInput.setAttribute('readonly', 'true');
  }
  toggle = !toggle;
});

const image = document.querySelector('.header img');
const imageSrc = image.getAttribute('src');
const imageAlt = image.hasAttribute('alt');
console.log(imageSrc);
// console.log(imageAlt);

const ratingsList = document.querySelectorAll('.ratings input');
const ratingsButton = document.querySelector('.btn-check-count');

ratingsButton.addEventListener('click', () => {
  let isValid = false;
  //   클릭이 안된 것을 초기값으로 저장
  ratingsList.forEach((input) => {
    // console.log(input.checked);
    if (input.checked) {
      console.log(input.value);
      isValid = true;
    }
  });
  if (!isValid) {
    alert('선택해주세요');
  }
});

const addFile = document.querySelector('.file');
const addFileName = document.querySelector('.filename');
const addFileSize = document.querySelector('.filesize');

addFile.addEventListener('change', (e) => {
  const filename = e.target.files[0].name;
  const filesize = e.target.files[0].size;
  const result = filesize / 1024;

  console.log(filesize / 1024);

  addFileName.textContent = `파일명 : ${filename}`;
  addFileSize.textContent = `파일크기 : ${result.toFixed(2)}kb`;
  //   https://rebehayan.notion.site/1175344e9c918077849df5abc16b7ffc
  //   lastModified 현재 날짜
  //   console.log(new Date(e.target.files[0].lastModified));
});

//
// 팝업 이벤트
//
const openPopup = document.querySelector('.btn-avatar');
const popup = document.querySelector('.dialog');
const closePopup = document.querySelector('.dialog .close');

openPopup.addEventListener('click', () => {
  // show와 showModal은 dimed 차이
  //   popup.show();
  popup.showModal();
});

closePopup.addEventListener('click', () => {
  popup.close();
});

/* -------------------------------------------------------------------------- */
/*                                 DOM CSS 제어                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   DOM 탐색                                  */
/* -------------------------------------------------------------------------- */
const routineButton = document.querySelectorAll('.routine-list button');
routineButton.forEach((button) => {
  button.addEventListener('click', () => {
    // button.nextElementSibling.style.display = 'block';
    routineButton.forEach((btn) => {
      btn.parentElement.classList.remove('active');
    });
    button.parentElement.classList.add('active');
  });
});

const itmes = document.querySelectorAll('.routine-list > li');
itmes.forEach((item) => {
  const depth = item.querySelector('.detail-list');
  console.log(item.contains(depth));
  if (!item.contains(depth)) {
    const button = item.querySelector('button');
    button.setAttribute('role', 'link');
    button.addEventListener('click', () => {
      window.location.href = 'https://naver.triptopaz.com';
    });
  }
});

// depth가 없는 경우 페이지 이동
/* -------------------------------------------------------------------------- */
/*                                   DOM 삽입                                  */
/* -------------------------------------------------------------------------- */
