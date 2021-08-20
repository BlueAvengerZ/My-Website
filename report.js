$(document).ready(function(){


// lager funksjon som gjør at, når blar ned så kommer det blå bakgrunn på menu bar.

    $(window).scroll(function(){

      // sticky menu-bar on scroll script Start


     // hvis scrollY er større enn 20, så skal menu bar få blå bakgrunn.

         if (this.scrollY > 20) {
             $('.menu-bar').addClass("sticky");
         }

    // hvis ikke scrollY er større enn 20, så skal bakgrunne til menu bar fjernes.

         else {
               $('.menu-bar').removeClass("sticky");
             }
       });

    // sticky menu-bar on scroll script End



    // creating menu-bar/menu-icon script Start

    // lager funksjon som gjør at, man kan klikke på menu icon og kryss icon til menu bar,
    // så hvis man klikker menu icon da popper opp menu bar og hvis man klikker kryss icon da tar det bort menu bar.
    // gjør menu icon om til kryss icon.

           $('.menu-icon').click(function(){
           $('.menu-bar .menu').toggleClass("active");
           $('.menu-icon i').toggleClass("active");
     });

    // creating menu-bar/menu-icon script End


});
