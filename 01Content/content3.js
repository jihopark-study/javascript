const obj = {
  badge: "박지호",
  text: "바로가기",
};

const { badge, text } = obj;
console.log(badge);

const notice = document.querySelector(".notice");
const badgeTag = document.querySelector(".badge green");
const textTag = document.querySelector(".text mart");

notice.badgeTag.textContent = badge;
