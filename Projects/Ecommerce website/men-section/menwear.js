function dropdown() {
    var hovers = document.querySelectorAll('.hover');
    var main = document.querySelector('.main')
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
}
dropdown()

function dropdownprofile() {
    var loginbtn = document.querySelector('.profile')
    var loginhvr = document.querySelector('.hvr')
    loginbtn.addEventListener('mousemove', () => {
        loginhvr.classList.add('active')
    })
    loginbtn.addEventListener('mouseleave', () => {
        loginhvr.classList.remove('active')
    })
}
dropdownprofile()

function filterProduct() {
    let products = document.querySelectorAll('.shop-card');
    let filter = '';
    let btns = document.querySelectorAll('.filter > span');
    function hoverToGetId(){
        btns.forEach(function(elem){
            elem.addEventListener('mouseenter',() =>{
                filter = elem.getAttribute('id')
            })
        })
    }
    function removeHidden(){
        products.forEach(elem =>{
            if (elem.classList.contains('hidden')) {
                elem.classList.remove('hidden')
            }
        })
    }
    function changeColor(){
        document.querySelector(`#${filter}`).style.color = '#639fa5'
    }
    function tshirtFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('tshirt')) {
                elem.classList.add('hidden')
                document.querySelector("#tshirt").style.color = '#639fa5'
            }
        })
    }
    function shirtFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('shirt')) {
                elem.classList.add('hidden')
            }
        })
    }
    function jacketFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('jacket')) {
                elem.classList.add('hidden')
            }
        })
    }
    function bottomwearFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('jeans')) {
                elem.classList.add('hidden')
            }
        })
    }
    function shoesFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('shoes')) {
                elem.classList.add('hidden')
            }
        })
    }
    function accessoriesFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('accessories')) {
                elem.classList.add('hidden')
            }
        })
    }

    document.querySelector('#all').addEventListener('click', function () {
        removeHidden()
        changeColor()
        console.log(filter)
        filter = 'all';
    })
    document.querySelector('#tshirt').addEventListener('click', function () {
        removeHidden()
        changeColor()
        console.log(filter)
        tshirtFilter()
        filter = 'tshirt'
    })
    document.querySelector('#shirt').addEventListener('click', function () {
        removeHidden()
        changeColor()
        console.log(filter)
        shirtFilter()
        filter = 'shirt'
    })
    document.querySelector('#jacket').addEventListener('click', function () {
        removeHidden()
        changeColor()
        console.log(filter)
        jacketFilter()
        filter = 'jacket'
    })
    document.querySelector('#jeans').addEventListener('click', function () {
        removeHidden()
        changeColor()
        console.log(filter)
        bottomwearFilter()
        filter = 'jeans'
    })
    document.querySelector('#shoes').addEventListener('click', function () {
        removeHidden()
        changeColor()
        console.log(filter)
        shoesFilter()
        filter = 'shoes'
    })
    document.querySelector('#accessories').addEventListener('click', function () {
        removeHidden()
        changeColor()
        console.log(filter)
        accessoriesFilter()
        filter = 'accessories'
    })
    hoverToGetId()
}
filterProduct()