
document.querySelector('html').classList.remove('no-js');
if (!window.Cypress) {
  const scrollCounter = document.querySelector('.js-scroll-counter');

  AOS.init({
    mirror: true
  });

  document.addEventListener('aos:in', function(e) {
    console.log('in!', e.detail);
  });

  window.addEventListener('scroll', function() {
    scrollCounter.innerHTML = window.pageYOffset;
  });
}


const btn=document.getElementById("open-btn");
const navbar=document.querySelector("#responsiveNavbar")
btn.addEventListener("click", (e)=>{
 e.preventDefault()
    navbar.style.display='flex'
// console.log('lk');
})

let closeBtn=document.getElementById("close-btn").addEventListener("click",()=>{
    navbar.style.display='none'
})
