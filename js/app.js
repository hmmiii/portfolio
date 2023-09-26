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
};

const updateCursorCircle = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    document.querySelector('.cursor-circle').style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
};

window.addEventListener('scroll', updateNavOnScroll);
window.addEventListener('mousemove', updateCursorCircle);
