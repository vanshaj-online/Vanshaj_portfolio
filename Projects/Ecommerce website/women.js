let scroller = document.querySelector('.cat-prod'); 
const btn = document.querySelectorAll('.btn');
btn.forEach((elem)=>{
    elem.addEventListener('click',function(){
        scroller.style.transform = 'translateX(-100%)';
    })
})
const observer = new IntersectionObserver(entries =>{
    entries.forEach(last => {
        if(last.isIntersecting === true){
            console.log('yes',last.target)
        }else{
            console.log('no',last.target)
        }
    }),{
        threshold : 1
    }
})

let lastelem = document.querySelector('#last');

observer.observe(lastelem);