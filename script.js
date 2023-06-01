window.addEventListener("scroll", function(){
    let header = document.querySelector('.navegacao')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

const lista = document.querySelectorAll('.lista')

function ativaLink(){
    for(let i of lista){
        i.classList.remove('ativo')
    }
    this.classList.add('ativo')
}

for(let i of lista) {
    i.addEventListener('click', ativaLink)
}

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 55){
            $('.navegacao').addClass("ativo");
        }else{
            $('.navegacao').removeClass("ativo");
        }
        
        
// botão de rolagem para cima mostra/oculta o script
        if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
       // removendo a rolagem suave ao clicar no botão deslizante
        $('html').css("scrollBehavior", "auto");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Para você! ", "Adorar a Deus"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".digitando", {
        strings: ["JESUS"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
    // carrossel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
