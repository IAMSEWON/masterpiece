document.addEventListener("DOMContentLoaded", () => {
    const handleScroll = () => {
        const header = document.querySelector('header');
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    
        if (scrollTop >= 40) { // 
            header.classList.add("bw");
        } else {
            header.classList.remove("bw");
        }
    };
    
    let consultClick = () =>{

        const consultBtn = document.querySelector('.consult_btn_wrap .btn');
        const consultEl = document.querySelector('.consult_btn_wrap');
        consultBtn.addEventListener('click', () => {
            consultEl.classList.toggle('active');
        });
    }
    setTimeout(consultClick, 200);

    window.addEventListener("scroll", handleScroll);

})


