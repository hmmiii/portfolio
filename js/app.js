const updateNavOnScroll = () => {
    const navItems = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
    let activeIdx = 0;

    const scrollTop = window.scrollY;

    sections.forEach((section, idx) => {
        const offsetTop = section.offsetTop;
        const marginBottom = parseInt(getComputedStyle(section).marginBottom);

        if (scrollTop >= offsetTop - marginBottom) {
            activeIdx = idx;
        }
    });

    navItems.forEach((navItem, idx) => {
        navItem.classList.toggle('on', idx === activeIdx);
    });
}

window.addEventListener('scroll', updateNavOnScroll);

