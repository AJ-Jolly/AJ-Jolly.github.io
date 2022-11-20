// Create the observer
/*const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
       const title = entry.target.querySelector('.title');
        
        if (entry.isIntersecting) {
        title.classList.add('title-animation');
        return;
        }
        
        title.classList.remove('title-animation');
    });

});

// Tell the observer which elements to track
observer.observe(document.querySelector('.titleWrapper'));*/

let options = {
    root: document.querySelector('.titleWrapper'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(

    let target = document.querySelector('.title');
    observer.observe(target);

    if (target.isIntersecting) {
        title.classList.add('title-animation');
        return;
    }

    title.classList.remove('title-animation');
);