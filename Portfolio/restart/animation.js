let options = {
    root: document.querySelector('.titleWrapper'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(); {

    let target = document.querySelector('.title');
    observer.observe(target);

    if (target.isIntersecting) {
        title.classList.add('title-animation');
        return;
    }

    title.classList.remove('title-animation');
};
