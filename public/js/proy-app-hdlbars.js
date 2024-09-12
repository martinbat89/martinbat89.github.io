
document.addEventListener('DOMContentLoaded', function() {

  // Obtener el parámetro `id` de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const id_proy = urlParams.get('id');
  var idiomaUser
  var tmp_idioma = "contenidos_esp"

  //checkeo idioma + render template
  if(sessionStorage.getItem('userLanguage')){

    idiomaUser = sessionStorage.getItem('userLanguage')
    changeLanguage(idiomaUser);
    tmp_idioma = idiomaUser === "es" ? "contenidos_esp" : "contenidos_eng"
    document.getElementById('ch-lang').checked = idiomaUser === "es" ? false : true;
  } 

  /**ejecutamos fc que carga template */
  tmpCargaProy(tmp_idioma, id_proy)

  // Quitar el preloader después de un breve retraso
  setTimeout(function() {
      document.getElementById('contenedorCargador').className = "hide";
  }, 1000);

});

/**
 * Función que carga un template de Handlebars.
 * 
 * @param {string} clave_lang - clave idioma para ejecutar traducciones
 * @param {string} id - El ID del template a cargar.
 * 
 * @returns {void}
 */
function tmpCargaProy(clave_lang, id){

  // Cargar los datos desde el archivo JSON
  fetch('../data/data-proyectos.json')
      .then(response => response.json())
      .then(data => {

          // Buscar el proyecto con el id correspondiente
          const proyecto = data[clave_lang].find(p => p.id == id);

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
            var elemsParall = document.querySelectorAll('.parallax');
            M.Parallax.init(elemsParall);

            var eleMbox = document.querySelectorAll('.materialboxed');
            M.Materialbox.init(eleMbox);

            var elaccBut = document.querySelectorAll('.fixed-action-btn');
            M.FloatingActionButton.init(elaccBut, {
                hoverEnabled: false
            });

            var elemTtip = document.querySelectorAll('.tooltipped');
            M.Tooltip.init(elemTtip);

            var elemScrl = document.querySelectorAll('.scrollspy');
            M.ScrollSpy.init(elemScrl, { throttle: 300 });

          } else {

            if(clave_lang == "contenidos_esp"){

              document.getElementById("contenido-container").innerHTML = `<div class="no-data-container" style="text-align: center; padding: 50px; background-color: #e0f2f1; color: #004d40;">
                                                                            <i class="material-icons" style="font-size: 72px; color: #004d40;">search_off</i>
                                                                            <h5 style="margin-top: 20px; color: #004d40;">No se encontró el proyecto buscado</h5>
                                                                            <p style="color: #607d8b;">Por favor, verifica la información ingresada.</p>
                                                                            <a href="/index.html"  class="btn waves-effect waves-light teal" style="margin-top: 20px;">Volver a la página principal</a>
                                                                        </div>
                                                                            `

            }else{

              document.getElementById("contenido-container").innerHTML = `<div class="no-data-container" style="text-align: center; padding: 50px; background-color: #e0f2f1; color: #004d40;">
              <i class="material-icons" style="font-size: 72px; color: #004d40;">search_off</i>
              <h5 style="margin-top: 20px; color: #004d40;">Project Not Found</h5>
              <p style="color: #607d8b;">Please check the information you are looking for.</p>
              <a href="/index.html"  class="btn waves-effect waves-light teal" style="margin-top: 20px;">Back to Home</a>
          </div>
              `

            }

            
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


var footerCambia = document.getElementById('pieCont')
footerCambia.addEventListener("click", function(ev){
      if(ev.target.id === "resumeImg2"){
        let hrefResume="/public/assets/files/cv_martinb_esp_202309.pdf";
        
        window.open(hrefResume, '_blank')

      }
    })
 
    footerCambia.addEventListener("click", function(ev2){

  if(ev2.target.id === "resumeImg3"){
    let hrefResume="/public/assets/files/res_martinb_202309.pdf";
    
    window.open(hrefResume, '_blank')

  }



})
 