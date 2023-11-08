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
    function removeHidden(){
        products.forEach(elem =>{
            if (elem.classList.contains('hidden')) {
                elem.classList.remove('hidden')
            }
        })
    }
    function tshirtFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('tshirt')) {
                elem.classList.add('hidden')
                console.log(elem)
            }
        })
    }
    function shirtFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('shirt')) {
                elem.classList.add('hidden')
                console.log(elem)
            }
        })
    }
    function jacketFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('jacket')) {
                elem.classList.add('hidden')
                console.log(elem)
            }
        })
    }
    function bottomwearFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('jeans')) {
                elem.classList.add('hidden')
                console.log(elem)
            }
        })
    }
    function shoesFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('shoes')) {
                elem.classList.add('hidden')
                console.log(elem)
            }
        })
    }
    function accessoriesFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('accessories')) {
                elem.classList.add('hidden')
                console.log(elem)
            }
        })
    }

    document.querySelector('#all').addEventListener('click', function () {
        removeHidden()
    })
    document.querySelector('#tshirt').addEventListener('click', function () {
        removeHidden()
        tshirtFilter()
    })
    document.querySelector('#shirt').addEventListener('click', function () {
        removeHidden()
        shirtFilter()
    })
    document.querySelector('#jacket').addEventListener('click', function () {
        removeHidden()
        jacketFilter()
    })
    document.querySelector('#jeans').addEventListener('click', function () {
        removeHidden()
        bottomwearFilter()
    })
    document.querySelector('#shoes').addEventListener('click', function () {
        removeHidden()
        shoesFilter()
    })
    document.querySelector('#accessories').addEventListener('click', function () {
        removeHidden()
        accessoriesFilter()
    })

}
filterProduct()