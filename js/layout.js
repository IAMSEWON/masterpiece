const handleScroll = () => {
    const header = document.querySelector('header');
    scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= 40) { // 
        header.classList.add("bw");
    } else {
        header.classList.remove("bw");
    }
};

window.addEventListener("scroll", handleScroll);
