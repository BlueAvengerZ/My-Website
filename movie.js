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




// creating play button script Start


 // lager funksjon som gjør at, man kan klikke på play icon/play teksten og kryss icon til video.
 // så hvis man klikker play icon/play teksten da popper opp video og hvis man klikker kryss icon da tar det bort video.


 // lager variabel for play icon/play teksten og sier at ta fram, den videoen som er valgt.
 // Deretter aktivere kode, så man klikke på de.

function toggle() {

  var film = document.querySelector('.film')
  film.classList.toggle('active')


// lager variabel for video og sier at ta det bort, den videoen som er valgt.
// Deretter stopper videoen, når man klikker på kryss icon.
// når man klikker igjen på play icon/play teksten, så er tiden til videoen tilbake til 0.

  var video = document.querySelector('video')
  video.pause()
  video.currentTime = 0;
}
// creating play button script End
