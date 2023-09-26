var  init= function(){
    var nav = document.querySelector('.top')
    var section = document.querySelector('.section')
    var menu = document.querySelector('.img')
    var newTop = document.querySelector('.add')
    
    menu.addEventListener('click', function () {
        section.classList.add('active')
        nav.classList.add('active')
        newTop.classList.add('show')
        document.querySelector('.menu').style.opacity = 1
    })
    
    document.querySelector('#unclick').addEventListener('click', function () {
        section.classList.remove('active')
        nav.classList.remove('active')
        newTop.classList.remove('show')
        document.querySelector('.menu').style.opacity = 0
    })
}
init()

var clutter = '';
var pbreak = document.querySelector('.about-me>p')
pbreak.textContent.split(' ').forEach(function(dets){
  clutter += `<span>${' '+dets}</span>`

  pbreak.innerHTML = clutter
})





gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  smartphone:{
    smooth: true
  },
  tablet:{
    smooth: true
  }
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl = gsap.timeline()

tl.to('.image',{
  opacity : 0,
  scrollTrigger:{
    trigger : '.image ',
    scroller : '.main',
    start : 'bottom center',
    scrub : 1
  }
})

tl.to('.banner h1',{
  x : -1000,
  duration : .5,
  scrollTrigger:{
    trigger : '.banner h1',
    scroller : '.main',
    start : 'top 90%',
    scrub : .5
  }
})

tl.from('.about-me h2',{
  opacity : 0,
  stagger : true,
  scrollTrigger : {
    trigger : '.about-me h2',
    scroller : '.main',
    start : 'top 100%',
    end:'bottom 80%',
    scrub : true
  }
})

tl.to('.about-me>p>span',{
  color : 'white',
  opacity:1,
  stagger : .5,
  scrollTrigger : {
    trigger : '.about-me>p>span',
    scroller : '.main',
    start : 'top bottom',
    end:'bottom top',
    scrub : 1.5 
  }
})
