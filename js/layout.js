document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const hamBtn = document.querySelector("header .ham_btn");
  const pcMenu = document.querySelector("header .pc_menu");
  const pcHamMenu = document.querySelector("header .ham_btn");
  let scrollTop = 0;

  const handleScroll = () => {
    scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= 40) {
      //
      header.classList.add("bw");
    } else {
      header.classList.remove("bw");
    }
  };

  let consultClick = () => {
    const consultBtn = document.querySelector(".consult_btn_wrap .btn");
    const consultEl = document.querySelector(".consult_btn_wrap");
    consultBtn.addEventListener("click", () => {
      consultEl.classList.toggle("active");
    });
  };

  let menuClick = () => {
    header.classList.toggle("active");
    pcMenu.classList.toggle("active");
    pcHamMenu.classList.toggle("active");
  };

  let pcMenuWrap = document.querySelectorAll(".pc_menu .menu_wrap");
  pcMenuWrap.forEach((cont) => {
    let menus = cont.querySelectorAll(".menu");
    let imgs = cont.querySelectorAll(".img_wrap img");

    menus.forEach((menu, idx) => {
      menu.addEventListener("mouseenter", () => {
        imgs.forEach((img) => {
          img.classList.remove("active");
        });
        imgs[idx].classList.add("active");
      });
    });
  });

  setTimeout(consultClick, 200);
  window.addEventListener("scroll", handleScroll);
  hamBtn.addEventListener("click", menuClick);
});
