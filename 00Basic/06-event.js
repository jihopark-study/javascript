const message = document.querySelector('.message');
const click = document.querySelector('.click');
const enter = document.querySelector('.enter');
const leave = document.querySelector('.leave');
const inputText = document.querySelector('.input input');
const change = document.querySelector('.change select');
const submit = document.querySelector('.submit');
const submitID = document.querySelector('.submit .id');
const submitNickname = document.querySelector('.submit .nickname');
const target = document.querySelector('.target .parent');

const log = function (text) {
  const div = document.createElement('div');
  div.innerHTML = text;

  message.appendChild(div);
  message.scrollTop = message.scrollHeight;
};

click.addEventListener('click', function () {
  log('click');
});

enter.addEventListener('mouseenter', function () {
  log('mouseenter');
});

leave.addEventListener('mouseleave', function () {
  log('mouseleave');
});

inputText.addEventListener('input', function (e) {
  log(e.target.value);
});
// 실시간으로 작동
change.addEventListener('change', function (e) {
  log(e.target.value);
});
// 포커스가 나갔을 때

submit.addEventListener('submit', function (e) {
  console.log(e);
  e.preventDefault();
  // const id = submitID.value;
  // const nickname = submitNickname.value;
  // if (id === '' || nickname === '') {
  //   log('아이디 또는 닉네임을 입력하세요.');
  //   return;
  // }
  // log('아이디:' + id + ' / 닉네임:' + nickname);
});
// e를 쓰는 이유는 암묵적인 룰

const link = document.querySelector('.link');

link.addEventListener('click', function (e) {
  console.log(e);
  e.preventDefault();
});

target.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);

  const isTarget = e.target.id;
  // e.target은 event 등록한 요소의 하위 요소에 다 이벤트가 적용된다.

  const isCurrentTarget = e.currentTarget.id;
  // e.currentTarget은 event 등록한 요소에만 이벤트가 일어난다
  // 뭘 눌러도 .target이 덮고 있으니까 하위요소는 클릭이 X

  log(isTarget);
  // log(isCurrentTarget);
});
