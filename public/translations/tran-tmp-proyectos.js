  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "introd": "Introducción",
            'detalle': "Proyecto Detallado",
            "conclu": "Conclusión",
            "ttip-subir": "Subir",
            "ttip-volver": "Volver al Inicio",
            "paracaidas": "PROYECTO DE BUSINESS INTELLIGENCE",
            "pieComp": ` <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">¡Antes que nada...Gracias!</h5>
                <p class="grey-text text-lighten-4">Si llegaste hasta acá, es porque te tomaste el tiempo para ver mi portafolio. En estos tiempos tan acelerados, en los que nos cuesta parar un poco, solamente puedo decirte gracias por tu visita.</p>
                <text class="right" id="mi_mirm"><b>Martin.</b></text>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links de Interés</h5>
                <ul>
                  <li>
                    <div id="icon-redes22">
                      <a class="white-text" href="https://www.linkedin.com/in/martin-batarev-9a48b849/" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg></a>
                      <a class="white-text" href="https://github.com/martinbat89" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                    </div>
                  </li>
                  <li><h6><a class="grey-text text-lighten-3 teal darken-2 btn tooltipped" id="resumeImg2" data-position="bottom" data-tooltip="Descargá mi Curriculum Vitae en formato PDF (Español)"><i class="material-icons left">file_download</i>Descarga Mi CV En Español</a></h6></li>
                  <li><h6><a class="grey-text text-lighten-3 teal darken-2 btn tooltipped" id="resumeImg3" data-position="bottom" data-tooltip="Descargá mi Curriculum Vitae en formato PDF (Inglés)"><i class="material-icons left">file_download</i>Descarga Mi CV En Inglés</a></h6></li>
                </ul>
              </div>
              
            </div>
          </div>
          <div class="footer-copyright teal darken-3">
            <div class="container">
            Portafolio de Martin Batarev
            <b><a class="grey-text text-lighten-4 right" href="#par_inicio">Volver al Principio</a></b>
            </div>
          </div>`  
            
        }
      },
      en: {
          translation: {
            "ttip-subir": "Scroll Up",
            "ttip-volver": "Home",
            "pieComp": `<div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">First and Foremost...Thank You!</h5>
                    <p class="grey-text text-lighten-4">If you've made it this far, it's because you've taken the time to look at my portfolio. In these fast-paced times, where it's hard to pause for a moment, I can only say thank you for your visit.</p>
                    <text class="right" id="mi_mirm"><b>Martin.</b></text>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links of Interest</h5>
                    <ul>
                        <li>
                            <div id="social-icons">
                                <a class="white-text" href="https://www.linkedin.com/in/martin-batarev-9a48b849/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                                <a class="white-text" href="https://github.com/martinbat89" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2.00 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12 .51 .56 .82 1.27 .82 2.15 0 3.07-1.87 3.75-3.65 3.95 .29 .25 .54 .73 .54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21 .15 .46 .55 .38 A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </li>
                        <li>
                            <h6><a class="grey-text text-lighten-3 teal darken-2 btn tooltipped" id="resumeImg2" data-position="bottom" data-tooltip="Download my Curriculum Vitae in PDF format (Spanish)"><i class="material-icons left">file_download</i>Download My CV In Spanish</a></h6>
                        </li>
                        <li>
                            <h6><a class="grey-text text-lighten-3 teal darken-2 btn tooltipped" id="resumeImg3" data-position="bottom" data-tooltip="Download my Curriculum Vitae in PDF format (English)"><i class="material-icons left">file_download</i>Download My CV In English</a></h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright teal darken-3">
            <div class="container">
                Martin Batarev's Portfolio
                <b><a class="grey-text text-lighten-4 right" href="#par_inicio">Back to the Top</a></b>
            </div>
        </div>
        `

          }
      }
  }
});

// Función para cambiar el idioma
function changeLanguage(language) {
    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('Error al cambiar el idioma', err);
        
        if(document.getElementById('ttip-subir')){

          document.getElementById('ttip-subir').setAttribute("data-tooltip", t('ttip-subir'));
          document.getElementById('ttip-volver').setAttribute("data-tooltip", t('ttip-volver'));

        }
        
        document.getElementById('pieCont').innerHTML = t('pieComp')
    });
}

document.getElementById('ch-lang').addEventListener('click', ev => {

    //Aparece cargador
    document.getElementById('contenedorCargador').className = "contpreloader"

    if(ev.target.checked === true){

        //traduccion genérica
        changeLanguage('en');
        M.AutoInit();

        //cargamos idioma session
        sessionStorage.setItem('userLanguage', "en");

        //traducción puntual handlebars
        // Obtener el parámetro `id` de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const id_proy = urlParams.get('id');

        tmpCargaProy("contenidos_eng", id_proy)

        //quitamos el preloader
        setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")
        
    }else if(ev.target.checked === false){

      //traduccion genérica
      changeLanguage('es');
      M.AutoInit();
      
      //cargamos idioma session
      sessionStorage.setItem('userLanguage', "es");

      //traducción puntual handlebars
      // Obtener el parámetro `id` de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const id_proy = urlParams.get('id');

      tmpCargaProy("contenidos_esp", id_proy)

      //quitamos el preloader
      setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")

    }
})