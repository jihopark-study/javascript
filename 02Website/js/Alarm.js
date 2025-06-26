import { data } from "../data/alarm_data.js";

export const Alarm = () => {
  const config = {
    parent: ".alarm",
  };

  const { parent } = config;

  const alarm = document.querySelector(parent);

  if (!alarm) return;

  // 알람 데이터 유무에 따른 알람수 UI 노출 제어
  const handleCounter = () => {
    const counter = document.querySelector(".profile__alarm");
    const lis = alarm.querySelectorAll("ul li");
    lis.length === 0 ? counter.remove() : (counter.innerHTML = lis.length);
  };

  // 알람 삭제 클릭 시 DOM 삭제
  const delAlarm = () => {
    const btns = document.querySelectorAll(".alarm__del");
    btns.forEach((btn) => {
      const li = btn.closest("li");
      btn.addEventListener("click", () => {
        const lis = alarm.querySelectorAll("ul li");
        // console.log(lis.length);
        li.remove();
        handleCounter();
        if (lis.length <= 1) {
          setTimeout(() => {
            alarm.hidePopover();
          }, 500);
        }
      });
    });
  };

  // 알람 리스트 데이터 바인딩
  const alarmBind = () => {
    const list = alarm.querySelector("ul");
    const result = data
      .map((item) => {
        const { date, writer, content } = item;
        return `
          <li>
            <div class="alarm__date">${date}</div>
            <div class="alarm__writer">${writer}</div>
            <button class="alarm__del">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M8.22787 6.99535L13.737 1.495C13.9016 1.33033 13.9941 1.107 13.9941 0.874131C13.9941 0.641261 13.9016 0.417929 13.737 0.253265C13.5723 0.0886011 13.349 -0.00390625 13.1161 -0.00390625C12.8832 -0.00390625 12.6599 0.0886011 12.4952 0.253265L6.99489 5.76236L1.49454 0.253265C1.32987 0.0886011 1.10654 -0.00390604 0.87367 -0.00390604C0.6408 -0.00390604 0.417468 0.0886011 0.252804 0.253265C0.0881403 0.417929 -0.00436681 0.641261 -0.00436681 0.874131C-0.00436682 1.107 0.0881403 1.33033 0.252804 1.495L5.7619 6.99535L0.252804 12.4957C0.170843 12.577 0.105788 12.6737 0.0613928 12.7803C0.0169977 12.8868 -0.00585938 13.0011 -0.00585938 13.1166C-0.00585938 13.232 0.0169977 13.3463 0.0613928 13.4529C0.105788 13.5594 0.170843 13.6561 0.252804 13.7374C0.334097 13.8194 0.430813 13.8844 0.537374 13.9288C0.643935 13.9732 0.758231 13.9961 0.87367 13.9961C0.98911 13.9961 1.10341 13.9732 1.20997 13.9288C1.31653 13.8844 1.41324 13.8194 1.49454 13.7374L6.99489 8.22834L12.4952 13.7374C12.5765 13.8194 12.6732 13.8844 12.7798 13.9288C12.8864 13.9732 13.0007 13.9961 13.1161 13.9961C13.2315 13.9961 13.3458 13.9732 13.4524 13.9288C13.559 13.8844 13.6557 13.8194 13.737 13.7374C13.8189 13.6561 13.884 13.5594 13.9284 13.4529C13.9728 13.3463 13.9956 13.232 13.9956 13.1166C13.9956 13.0011 13.9728 12.8868 13.9284 12.7803C13.884 12.6737 13.8189 12.577 13.737 12.4957L8.22787 6.99535Z"
                  fill="#999999" />
              </svg>
            </button>
            <div class="alarm__content">${content}</div>
          </li>
        `;
      })
      .join("");
    list.innerHTML = result;
    handleCounter();
    delAlarm();
  };
  alarmBind();
};
