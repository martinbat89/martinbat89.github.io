
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

var footerCambia = document.getElementById('pieCont')
footerCambia.addEventListener("click", function(ev){
      if(ev.target.id === "resumeImg2"){
        let hrefResume="/public/assets/files/cv_martinb_esp_202309.pdf";
        console.log("entro")
        window.open(hrefResume, '_blank')

      }
    })
 
    footerCambia.addEventListener("click", function(ev2){

  if(ev2.target.id === "resumeImg3"){
    let hrefResume="/public/assets/files/res_martinb_202309.pdf";
    console.log("entro")
    window.open(hrefResume, '_blank')

  }



})
 