var hovers = document.querySelectorAll('.hover');
var main = document.querySelector('.hero')
var s2 = document.querySelector('.section-2')
var s3 = document.querySelector('.section-3')
var s4 = document.querySelector('.section-4')
var footer = document.querySelector('footer')
hovers.forEach(elem => {
    elem.addEventListener('mousemove',function(){
        elem.classList.add('show')
        main.style.filter = 'blur(2px)'
        footer.style.filter = 'blur(2px)'
        s2.style.filter = 'blur(2px)'
        s3.style.filter = 'blur(2px)'
        s4.style.filter = 'blur(2px)'
    })
    elem.addEventListener('mouseleave', function () {
        elem.classList.remove('show')
        main.style.filter = 'blur(0)'
        footer.style.filter = 'blur(0)'
        s2.style.filter = 'blur(0)'
        s3.style.filter = 'blur(0)'
        s4.style.filter = 'blur(0)'
    })
})