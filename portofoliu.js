const projects = document.querySelectorAll('.project');

function checkSlide() {
    projects.forEach(project => {
        const slideInAt = (window.scrollY + window.innerHeight) - project.clientHeight / 2;
        const projectBottom = project.offsetTop + project.clientHeight;
        const isHalfShown = slideInAt > project.offsetTop;
        const isNotScrolledPast = window.scrollY < projectBottom;

        if (isHalfShown && isNotScrolledPast) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkSlide);
