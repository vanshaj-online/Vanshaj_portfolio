var hovers = document.querySelectorAll('.hover');
var main = document.querySelector('#main')
var footer = document.querySelector('footer')
hovers.forEach(elem => {
    elem.addEventListener('mousemove', function () {
        elem.classList.add('show')
        main.style.filter = 'blur(2px)'
        footer.style.filter = 'blur(2px)'
    })
    elem.addEventListener('mouseleave', function () {
        elem.classList.remove('show')
        main.style.filter = 'blur(0)'
        footer.style.filter = 'blur(0)'
    })
})