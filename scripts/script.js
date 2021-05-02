
const img = document.querySelector('img'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    dots = document.querySelectorAll('.dot'),
    navLinks = document.querySelectorAll('.navbar>li>a'),
    images = ['images/river.jpg', 'images/road.jpg',
        'images/tree.jpg', 'images/drop-of-water.jpg', 'images/butterflies.jpg'];

//slider

let currentImage = 0;
img.src = images[currentImage];

prevBtn.addEventListener('click', () => {
    if (currentImage > 0) {
        currentImage--;
        img.src = images[currentImage];

    } else {
        currentImage = images.length - 1;
        img.src = images[currentImage];
    }
    dots.forEach((dot,index)=> {
        index === currentImage ? dot.classList.add('active') : dot.classList.remove('active')
    });
})
nextBtn.addEventListener('click', () => {
    if (currentImage < images.length - 1) {
        currentImage++;
        img.src = images[currentImage];
    } else {
        currentImage = 0;
        img.src = images[currentImage];
    }
    dots.forEach((dot,index)=> {
        index === currentImage ? dot.classList.add('active') : dot.classList.remove('active')
    });
})
//dots
dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        img.src = images[index];
        dots.forEach(dot=>dot.classList.remove('active'));
        dot.classList.add('active');
        currentImage = index;
    })
})

//add active class to navbar items
navLinks.forEach(a=>{
    a.addEventListener('click',()=>{
        navLinks.forEach(el=> el.classList.remove('active'))
        a.classList.add('active');
    })
})