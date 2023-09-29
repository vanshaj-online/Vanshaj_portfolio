    var init = function () { var t = document.querySelector(".top"), e = document.querySelector(".section"), r = document.querySelector(".img"), o = document.querySelector(".add"); r.addEventListener("click", function () { e.classList.add("active"), t.classList.add("active"), o.classList.add("show"), document.querySelector(".menu").style.opacity = 1 }), document.querySelector("#unclick").addEventListener("click", function () { e.classList.remove("active"), t.classList.remove("active"), o.classList.remove("show"), document.querySelector(".menu").style.opacity = 0 }) }; init(); var clutter = "", pbreak = document.querySelector(".about-me>p"); pbreak.textContent.split(" ").forEach(function (t) { clutter += `<span>${" " + t}</span>`, pbreak.innerHTML = clutter }), gsap.registerPlugin(ScrollTrigger); const locoScroll = new LocomotiveScroll({ el: document.querySelector(".main"), smooth: !0, smartphone: { smooth: !0 }, tablet: { smooth: !0 } }); locoScroll.on("scroll", ScrollTrigger.update), ScrollTrigger.scrollerProxy(".main", { scrollTop(t) { return arguments.length ? locoScroll.scrollTo(t, 0, 0) : locoScroll.scroll.instance.scroll.y }, getBoundingClientRect: () => ({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }), pinType: document.querySelector(".main").style.transform ? "transform" : "fixed" }), ScrollTrigger.addEventListener("refresh", () => locoScroll.update()), ScrollTrigger.refresh(); var tl = gsap.timeline(); tl.to(".image", { opacity: 0, scrollTrigger: { trigger: ".image ", scroller: ".main", start: "bottom center", scrub: 1 } }), tl.to(".banner h1", { x: -1e3, duration: .5, scrollTrigger: { trigger: ".banner h1", scroller: ".main", start: "top 90%", scrub: .5 } }), tl.from(".about-me h2", { opacity: 0, stagger: !0, scrollTrigger: { trigger: ".about-me h2", scroller: ".main", start: "top 100%", end: "bottom 80%", scrub: !0 } }), tl.to(".about-me>p>span", { color: "white", opacity: 1, stagger: .5, scrollTrigger: { trigger: ".about-me>p>span", scroller: ".main", start: "top bottom", end: "bottom top", scrub: 1.5 } }), tl.to(".about-me", { opacity: 1, scrollTrigger: { trigger: ".about-me", scroller: ".main", start: "top bottom", end: "bottom top" } });

gsap.timeline({
    scrollTrigger: {
        trigger : '.gate-main',
        scroller: '.main',
        start: '50% 50%',
        end: 'bottom top',
        scrub : true,
        pin : true,
    }
})
.to('.top-close',{
    x : "-100%"
},'a')
.to('.bottom-close',{
    x : '100%'
},'a')
.to('#ttext',{
    x : '30%'
},'a')
.to('#btext',{
    x : '-30%'
},'a')

gsap.timeline({
    scrollTrigger :{
        trigger : '.top-close',
        scroller: '.main',
        start : 'bottom 40%',
        end : 'bottom 22%',
        scrub: 1,
        // markers : true
    }
})
.from('.skills > *',{
    opacity : 0,
    y : '50%',
},'b')
.from('.social > h1 ',{
    opacity: 0,
    y : '20%',
},'b')

