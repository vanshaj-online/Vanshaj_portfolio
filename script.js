var nav = document.querySelector('.top')
var section = document.querySelector('.section')
var menu = document.querySelector('.img')
var main = document.querySelector('.main')

menu.addEventListener('click',function(){
    section.classList.toggle('active')
    nav.classList.toggle('active')
    main.classList.toggle('active')
    
})

document.querySelector('#unclick').addEventListener('click',function(){
    section.classList.remove('active')
    nav.classList.remove('active')
    main.classList.toggle('active')
})



// gsap.from('.name > *',{
//     x : -200,
//     opacity : 0,
//     stagger : .3,
//     duration : .9,
//     delay : .5
// })

// gsap.from('.image img',{
//     x : 200,
//     opacity : 0,
//     delay : .5,
//     duration : .9
// })

// gsap.from('.about > div',{
//     opacity : 0,
//     duration : 1,
//     delay : 1.5
// })
// gsap.from('.about > p',{
//     opacity : 0,
//     stagger : .5,
//     duration : 1,
//     delay : 1.8
// })

// var tl = gsap.timeline({
//     scrollTrigger : {
//         trigger : '.name',
//         scroller : 'body',
//         start : 'top top',
//         scrub : 1
//     }
// })

// gsap.from('.details',{
//     x : -200,
//     opacity : 0,
//     scrollTrigger : {
//     trigger :'.details',
//     scrub : 1,
//     start : 'bottom top',
//     // markers : true
//     }
// })
// gsap.to('.details',{
//     x : 0,
//     scrollTrigger : {
//     trigger :'.details',
//     scrub : 1
//     }
// })

// tl.to('.name',{
//     opacity : 0
// })

// tl.to('.about',{
//     opacity : 0
// })

