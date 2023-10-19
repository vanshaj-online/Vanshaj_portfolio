    var init = function () { var t = document.querySelector(".top"), e = document.querySelector(".section"), r = document.querySelector(".img"), o = document.querySelector(".add"); r.addEventListener("click", function () { e.classList.add("active"), t.classList.add("active"), o.classList.add("show"), document.querySelector(".menu").style.opacity = 1 }), document.querySelector("#unclick").addEventListener("click", function () { e.classList.remove("active"), t.classList.remove("active"), o.classList.remove("show"), document.querySelector(".menu").style.opacity = 0 }) }; init(); 
    var clutter = "", pbreak = document.querySelector(".about-me>p"); pbreak.textContent.split(" ").forEach(function (t) { clutter += `<span>${" " + t}</span>`, pbreak.innerHTML = clutter }),
     gsap.registerPlugin(ScrollTrigger); const locoScroll = new LocomotiveScroll({ el: document.querySelector(".main"), smooth: !0, smartphone: { smooth: false }, tablet: { smooth: false } }); locoScroll.on("scroll", ScrollTrigger.update), ScrollTrigger.scrollerProxy(".main", { scrollTop(t) { return arguments.length ? locoScroll.scrollTo(t, 0, 0) : locoScroll.scroll.instance.scroll.y }, getBoundingClientRect: () => ({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }), pinType: document.querySelector(".main").style.transform ? "transform" : "fixed" }), ScrollTrigger.addEventListener("refresh", () => locoScroll.update()), ScrollTrigger.refresh(); var tl = gsap.timeline(); tl.to(".image", { opacity: 0, scrollTrigger: { trigger: ".image ", scroller: ".main", start: "bottom center", scrub: 1 } }),
    tl.to(".banner h1", { x: -1e3, duration: .5, scrollTrigger: { trigger: ".banner h1", scroller: ".main", start: "top 90%", scrub: .5 } })
    tl.from(".about-me h2", { opacity: 0, stagger: !0, scrollTrigger: { trigger: ".about-me h2", scroller: ".main", start: "top 100%", end: "bottom 80%"} })
    tl.to(".about-me>p>span", { color: "white", opacity: 1, stagger: .5, scrollTrigger: { trigger: ".about-me>p>span", scroller: ".main", start: "top bottom", end: "65% 70%",
    scrub: 1 } })
    tl.to(".about-me", { opacity: 1, scrollTrigger: { trigger: ".about-me", scroller: ".main", start: "top bottom", end: "bottom top" } });


// gsap.timeline({
//     scrollTrigger:{
//         trigger: '#page',
//         scroller:'.main',
//         start : 'top bottom',
//         end: 'bottom 70%',
//     }
// })
// .from('.about-me',{
//     width:'25%',
//     y : '50%'
// },'width')
// .from('.photo',{
//     width:'25%',
//     y : '50%'
// },'width') 

gsap.to('.main > *',{
    opacity : 1,
    duration : 1,
    delay : .6
})

var cursor = document.querySelector('.cursor')
window.addEventListener('mousemove',function(dets){
    cursor.style.transform = `translate(${dets.clientX - 30}px,${dets.clientY - 30}px)`
})


const arrOfImg = ['insta','github','twitter','linkedin'];

var insta = document.querySelector('#insta');
var twitter = document.querySelector('#twitter');
var linkedin = document.querySelector('#linkedin');
var github = document.querySelector('#github');
var container = document.querySelector('.container');


insta.addEventListener('mouseenter',function(){
    container.innerHTML = `<img src="./images/hover ${arrOfImg[0]}.svg" alt="">`;
})
twitter.addEventListener('mouseenter',function(){
    container.innerHTML = `<img src="./images/hover ${arrOfImg[2]}.svg" alt="">`
})
github.addEventListener('mouseenter',function(){
    container.innerHTML = `<img src="./images/hover ${arrOfImg[1]}.svg" alt="">`
})
linkedin.addEventListener('mouseenter',function(){
    container.innerHTML = `<img src="./images/hover ${arrOfImg[3]}.svg" alt="">`
})

document.querySelectorAll('#hover > a').forEach((elem) => {
    elem.addEventListener('mouseleave',function(){
    container.innerHTML = '';
})
})

gsap.timeline({
    scrollTrigger : {
        trigger: '.section-3',
        scroller:'.main',
        start: "top 40%",
        end : 'bottom 95%',
    }
})
.from('.skills > *',{
    opacity : 0,
    stagger : .5
},'eksath')
.from('.social h1',{
    opacity : 0,
    stagger : .5
},'eksath')
.from('.social h1 > *',{
    opacity : 0,
    stagger : .3
},'eksath')
.from('.svg > div',{
    opacity : 0,
    stagger : .5,
    y : '30%'
},'eksath')


const today = new Date();

const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
var dd = document.querySelector('#dd');
var mm = document.querySelector('#mm');

dd.textContent = day;
mm.textContent = month;