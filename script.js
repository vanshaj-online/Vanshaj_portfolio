var nav = document.querySelector('.top')
var section = document.querySelector('.section')
var menu = document.querySelector('.img')

menu.addEventListener('click',function(){
    section.classList.toggle('active')
    nav.classList.toggle('active')
    console.log('click')
})

document.querySelector('#unclick').addEventListener('click',function(){
    section.classList.remove('active')
    nav.classList.remove('active')
})


gsap.from('.name > *',{
    x : -200,
    opacity : 0,
    stagger : .3,
    duration : .9,
    delay : .5
})

gsap.from('.image img',{
    x : 200,
    opacity : 0,
    delay : .5,
    duration : .9
})

gsap.from('.about > div',{
    opacity : 0,
    duration : 1,
    delay : 1.5
})
gsap.from('.about > p',{
    opacity : 0,
    stagger : .5,
    duration : 1,
    delay : 1.8
})

var check = 0;

var social = document.querySelector('#social');
var logo = document.querySelector('.menu');
social.addEventListener('click',function(){
    if(check == 0){
        logo.classList.add('show')
        check = 1
    }
    else{
        logo.classList.remove('show')
        check = 0
    }
})