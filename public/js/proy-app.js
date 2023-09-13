
document.addEventListener('DOMContentLoaded', function() {


    //inicializamos el parallax
    var elemsParall = document.querySelectorAll('.parallax');
    var intParall = M.Parallax.init(elemsParall, {});

    //inicializamos materialbox img certif
    var eleMbox = document.querySelectorAll('.materialboxed');
    var insMbox = M.Materialbox.init(eleMbox, {});

    //inicializamos action button
    var elaccBut = document.querySelectorAll('.fixed-action-btn');
    var instaccBut = M.FloatingActionButton.init(elaccBut, {
        hoverEnabled: false
    });

    //inicializamos tooltips
    var elemTtip = document.querySelectorAll('.tooltipped');
    var instTtip = M.Tooltip.init(elemTtip, {});

    //inicializamos scrollspy
    
    var elemScrl = document.querySelectorAll('.scrollspy');
    var instScrol = M.ScrollSpy.init(elemScrl, {throttle:300});
    
    //quitamos el preloader
    setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")
    
  });


document.getElementById('resumeImg3').addEventListener("click", function(){

  let hrefResume="/public/assets/files/resume-mbat1.pdf";

  window.open(hrefResume, '_blank')

})
 