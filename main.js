function startCount(el){
    let max = el.dataset.goal;
    let count = setInterval(() => {
       el.textContent++;
       if(el.textContent == max){
            clearInterval(count)
       }    
    }, 2000 / stats);
}

let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

let section = document.querySelector('section.section-2');
let stats = document.querySelectorAll('section.section-2 .item .number');
let start = false;

window.addEventListener('scroll',function(e){
    let x = window.scrollY
    console.log(x)
    if(x > 0){
        navbar.classList.add('navbarFixed')
        header.classList.add('headerFixed')
    }
    else{
        navbar.classList.remove('navbarFixed')
        header.classList.remove('headerFixed')
    }
    let topOffset = section.offsetTop - 400
    if(x > topOffset){
        if(!start){
            stats.forEach(stat => startCount(stat));
        }
        start = true;
    }
})