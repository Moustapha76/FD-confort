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
let menu = document.querySelector('.navbar ul');
let closeBtn = document.querySelector('button.close');
let openMenu = document.querySelector('input[type="checkbox"]');
let header = document.querySelector('header');

let section = document.querySelector('section.section-2');
let stats = document.querySelectorAll('section.section-2 .item .number');
let start = false;

window.addEventListener('scroll',function(e){
    let x = window.scrollY
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
closeBtn.addEventListener('click',function(){
    menu.style.display = 'none';
})
openMenu.addEventListener('click',function(){
    menu.style.display = 'flex';
})


let links = document.querySelectorAll('.navbar ul li a');
links.forEach(element => {
    element.addEventListener('click', () => {
        links.forEach(element => {
            element.classList.remove('active')
        });
        element.classList.add('active')
    })
})