
document.addEventListener('DOMContentLoaded', function() {

    // Inicializa la página con el contenido predeterminado en el idioma especificado
    var idiomaUser
    var tmp_idioma = "contenidos_esp"

    //checkeo idioma + render template
    if(sessionStorage.getItem('userLanguage')){

      idiomaUser = sessionStorage.getItem('userLanguage')
      tmp_idioma = idiomaUser === "es" ? "contenidos_esp" : "contenidos_eng"
      document.getElementById('ch-lang').checked = idiomaUser === "es" ? false : true;

      /**ejecutamos fc que carga template */
      tmpCargaProy(tmp_idioma)
      changeLanguage(idiomaUser);

    } else {
      /**ejecutamos fc que carga template */
      tmpCargaProy(tmp_idioma)
      changeLanguage('es');
    }


    //cargamos el maximo para el input range de certificados
    let maxCertif = document.getElementById('mis_cert').querySelectorAll('.card').length
    document.getElementById('rangeCertif').setAttribute('max', maxCertif)

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


  document.getElementById('resumeImg2').addEventListener("click", function(){

    let hrefResume="public/assets/files/cv_martinb_esp_202309.pdf";

    window.open(hrefResume, '_blank')

})


document.getElementById('resumeImg3').addEventListener("click", function(){

  let hrefResume="public/assets/files/res_martinb_202309.pdf";

  window.open(hrefResume, '_blank')

})

//la siguiente fc oculta o muestra proyectos segun lo que indique el usuario
document.getElementById('rangePorta').addEventListener('input', rg => {

  var cantDejar = document.getElementById('rangePorta').value
  var contPortaRows = document.getElementById('mi_porta').querySelectorAll('.card')
  var numItems = 1

  contPortaRows.forEach( card => {
    
    if (numItems > cantDejar){

      // Ocultar la tarjeta
      card.classList.add('hide');

    }else{

      // Mostrar la tarjeta
      card.classList.remove('hide');
    }
    
    numItems += 1
  })
})

//la siguiente fc oculta o muestra certificados segun lo que indique el usuario
document.getElementById('rangeCertif').addEventListener('input', rg => {

  var cantDejar = document.getElementById('rangeCertif').value
  var contCertifRows = document.getElementById('mis_cert').querySelectorAll('.card')
  var numItems = 1
  contCertifRows.forEach( card => {
    
    if (numItems > cantDejar){

      // Ocultar la tarjeta
      card.classList.add('hide');

    }else{

      // Mostrar la tarjeta
      card.classList.remove('hide');
    }
    
    numItems += 1
  })
})


/**
 * Función que carga un template de Handlebars.
 * 
 * @param {string} clave_lang - clave idioma para ejecutar traducciones
 * 
 * @returns {void}
 */
function tmpCargaProy(clave_lang){

  // Cargar los datos desde el archivo JSON
  fetch('public/data/index-proyectos.json')
      .then(response => response.json())
      .then(data => {

          // Buscar el proyecto con el id correspondiente
          const proyecto = data[clave_lang]

          if(proyecto){
          
            // Seleccionar el template de Handlebars desde el HTML
            const templateSource = document.getElementById('contenido-template').innerHTML;
            
            // Compilar el template
            const template = Handlebars.compile(templateSource);
            
            // Generar el HTML con los datos
            const html = template(proyecto);
            
            // Insertar el HTML generado en el contenedor
            document.getElementById('contenido-container').innerHTML = html;
            
            // Inicializar los componentes de Materialize después de renderizar el contenido

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
            var instScrol = M.ScrollSpy.init(elemScrl, {
              throttle: 100
            });

             //inicializamos feature discovery
            var elemsFeat = document.querySelectorAll('.tap-target');
            var instances = M.TapTarget.init(elemsFeat, {});
            var feat = document.querySelector('.tap-target')
            var elemFeat = M.TapTarget.getInstance(feat);


            //cargamos el maximo para el input range de portafolio
            let maxPorta = document.getElementById('mi_porta').querySelectorAll('.card').length
            console.log(maxPorta)
            document.getElementById('rangePorta').setAttribute('max', maxPorta)
            document.getElementById('rangePorta').value = maxPorta

            setTimeout(function(){elemFeat.open()}, "1500") //después de 1,5 seg se muestra
            

          } else {

              alert("error en la deteccion de royectos del portafolio.")

            
          }
      })
      .catch(error => console.error('Error cargando los datos:', error));

      // Registrar el helper de Handlebars
      Handlebars.registerHelper("link", function(text, vermas) {
          var url = Handlebars.escapeExpression(vermas.link),
              text = Handlebars.escapeExpression(text),
              icono = Handlebars.escapeExpression(vermas.icono),
              clase = Handlebars.escapeExpression(vermas.clase);
              
          return new Handlebars.SafeString(
              "<a class='" + clase + "' href='" + url + "'><i class='material-icons left'>" + icono + "</i>" + text +"</a>"
          );
      });


}
