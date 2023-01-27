const scrollActive = document.querySelectorAll('.scroll');
const current  = document.querySelector('.current')
const humburger  = document.querySelector('.mob-menu');
const mobNav  = document.querySelector('.mob-nav');
const body  = document.querySelector('body');
const mobLink = document.querySelectorAll('.mob-link');
window.addEventListener('scroll',()=>{
    
    scrollActive.forEach(elem=>{
        var rect = elem.getBoundingClientRect();
        if(rect.top<800){
             elem.classList.add('active')
        }
      
       
    })
})
humburger.addEventListener('click', ()=>{
    humburger.classList.toggle('active');
    mobNav.classList.toggle('active');
    body.classList.toggle('active');
})
mobLink.forEach(link=>{
    link.addEventListener('click',()=>{
        humburger.classList.remove('active');
        mobNav.classList.remove('active');
        body.classList.remove('active');
    })
})


$(function(){
    $("#type1").typed({
      strings: ["broker business"],
      typeSpeed: 100
    });
});
var titleMain  = $(".slider-body");
titleMain.slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    centerPadding: "10px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    onAfterChange:function(){
        console.log("hello")
    }
    // onAfterChange: function(){
       
    // }
    // onInit: function(){
    //     $('.current').text('1');
    //     console.log('test');
    //   },
    //     onAfterChange: function(){
    //     $('.current').text($('.slides').slickCurrentSlide()+1);
        
    //   }
  });
  
  titleMain.on('afterChange', function(event, slick, currentSlide, nextSlide){
    current.innerHTML = `0${currentSlide + 1}` 
    
});