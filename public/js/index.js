
document.addEventListener('DOMContentLoaded', function() {

    //inicializamos el slider 
    var elemsSlid = document.querySelectorAll('.slider');
    var instSli = M.Slider.init(elemsSlid, {
        height:610,
        interval:4000
    });
   

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

// Función para animar un elemento cuando entra al viewport

function animarElementoOnScroll(elementoId) {
    const elemento = document.querySelector(elementoId);
  
    // Verificar si el elemento está dentro del viewport
    if (elemento.getBoundingClientRect().top < window.innerHeight) {
      // Iniciar la animación
      elemento.classList.add("animado");
    } else if (elemento.getBoundingClientRect().top > window.innerHeight) {
      // Quitar la clase "animado"
      elemento.classList.remove("animado");
    }
  }
  
  // Agrega un event listener al evento scroll para cada elemento
  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#sec_acerca");
  });
  
  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#sec_ss");
  });

  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#mis_cert");
  });

  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#mis_hab");
  });

  
  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#mi_porta");
  });

  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#contacto_form");
  });
  
  document.getElementById("cop_mail").addEventListener('click', () => {
    
    const mailCo = 'martin.batarev@gmail.com' 

    navigator.clipboard.writeText(mailCo).then(() => {
      
      M.toast({html: 'Dirección de correo copiada.', classes: "red lighten-2 rounded"})

    }, (error) => {
      console.error(error);
    });
  
  })


  document.getElementById('resumeImg').addEventListener("click", function(){

    let hrefResume="public/assets/files/resume-mbat1.pdf";

    window.open(hrefResume, '_blank')

})


document.getElementById('resumeImg2').addEventListener("click", function(){

  let hrefResume="public/assets/files/resume-mbat1.pdf";

  window.open(hrefResume, '_blank')

})

 