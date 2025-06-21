// 로그인페이지 서브메뉴 X
// 서브메뉴가 있는 지 고민이 필요함
import { data } from "./data/list11_data.js";

export const SNB = (option = {}) => {
  const config = {
    parent: ".snb",
    activeName: "active",
    depthClassName: "depth",
    ...option,
  };

  const { activeName, depthClassName, parent } = config;

  const snb = document.querySelector(config.parent);

  if (!snb) {
    return;
  }
  // if(!snb) return; 축약 버전

  /* --------------------------------- depth2 --------------------------------- */
  const Depth2 = (arry) => {
    return arry
      .map((itme2) => {
        return `
    <li><a href="${itme2.depth2Link}">- ${itme2.depth2Title}</a></li>
  `;
      })
      .join("");
  };

  /* ------------------------------- 서브메뉴 이벤트 제어 ------------------------------ */
  const hadleSNB = () => {
    const btns = snb.querySelectorAll("button");
    console.log(btns);

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle(activeName);
      });
    });
  };

  const SNBBind = () => {
    // 방법1
    const result = data
      .map((item) => {
        // map은 반드시 return이 필요함
        // console.log(item.depth1Title, item.depth1Link);

        // return `
        //   ${
        //     item.depth2
        //       ? `<li><button type="button"${item.depth1Title}</button></li>`
        //       : `<li><a href="${item.depth1Link}">${item.depth1Title}</a></li>`
        //   }
        // `;
        return `
          <li>
              ${
                item.depth2
                  ? `<button type="button">${item.depth1Title}</button>`
                  : `<a href="${item.depth1Link}">${item.depth1Title}</a>`
              }
              ${
                item.depth2
                  ? `
                      <ul class="${depthClassName}">
                      ${Depth2(item.depth2)}
                      </ul>
                    `
                  : ""
              }
          </li>
        `;
      })
      .join("");

    snb.innerHTML = result;
    hadleSNB();

    // 방법2
    // snb.innerHTML = data
    // .map((item) => {
    //   // map은 반드시 return이 필요함
    //   return `
    //   <li><a href="">보도자료</a></li>
    // `;
    // })
    // .join("");

    // console.log(result);
  };
  SNBBind();
};

// [쌤코드]
// import { data } from "./data/list11_data.js";

// const SNB = () => {
//   const snb = document.querySelector(".snb");

//   if (!snb) {
//     return;
//   }

//   //   방법1
//   //   ${item.depth2 ? "있음" : "없음"}
//   const result = data.map((item) => {
//     return `
//         <li>
//             ${
//               item.depth2
//                 ? `<button type="button">${item.depth1Title}</button>`
//                 : `<a href="${item.depth1Link}">${item.depth1Title}</a>`
//             }
//             ${
//               item.depth2
//                 ? `
//                 <ul class="depth">
//                     ${item.depth2
//                       .map((item2) => {
//                         return `
//                          <li><a href="${item2.depth2Link}">- ${item2.depth2Title}</a></li>
//                         `;
//                       })
//                       .join("")}
//                 </ul>
//                 `
//                 : ""
//             }
//         </li>
//     `;
//   });

//   snb.innerHTML = result.join("");

//   //   방법2
//   //   snb.innerHTML = data.map((item) => {
//   //     return `
//   //         <li><a href="">보도자료</a></li>
//   //     `;
//   //   }).join('');
// };

// SNB();
