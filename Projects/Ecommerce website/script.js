var hovers = document.querySelectorAll('.hover');
var main = document.querySelector('.hero')
hovers.forEach(elem => {
    elem.addEventListener('mousemove',function(){
        elem.classList.add('show')
        main.style.filter = 'blur(2px)'
    })
    elem.addEventListener('mouseleave', function () {
        elem.classList.remove('show')
        main.style.filter = 'blur(0)'
    })
})