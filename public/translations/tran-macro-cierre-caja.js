  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "titu1": "Macro en Access Para Cerrar Caja Diaria",
            "subtitu1": "Automatización del cierre diario de caja mediante Macro en Access.",
            "btnMas": "Ver Mas",
            "herram": "Herramientas:",
            "ttip-subir": "Subir",
            "ttip-volver": "Volver al Inicio",
            "paracaidas": "PROYECTO DE AUTOMATIZACIÓN",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
              <h5 class="header">Introducción:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>Las macros son una función de programación que te permiten automatizar tareas 
                    repetitivas en un programa, como Excel o Access. <br><br>
    
                    En este caso, la macro se diseño para ayudar al cliente a realizar la apertura, arqueo y 
                    cierre de caja diario de una manera más eficiente y simple, utilizando Microsoft Access.
                    <br><br>
                    A continuación se muestra el formulario de Access vinculado a la Macro en cuestión:
                    </p>
                    <div class="col s12 m12 l10 offset-l1">
                      <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cierre-macro2.jpg">
                    </div>
                </div>
              </div>
            </div>
          <div class="divider"></div>
            <div class="section">
              <h5 class="header">Desarrollo:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p>Se preparo una macro con programación en VBA (Visual Basic Para Aplicaciones), para 
                  automatizar el proceso.</p>
                  <p> Al comenzar cada día el responsable de la caja abre la misma ingresando un importe
                    inicial en efectivo y en cuentas digitales:</p>
                </div> 
                     
                <div class="col s12 m10 offset-m1 l6 offset-l3">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita1.png">
                </div>
                <div class="col s12 m12 l12">
                    <p>
                    Al cierre del día operativo el operador debe realizar el arqueo de valores, 
                    el cual consiste en recontar e ingresar el importe en efectivo, en cuentas digitales,
                    ordenes de compra y otros valores. </p>
                </div>
                <div class="col s12 m10 offset-m1 l6 offset-l3">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita3.png">
               </div>
                <div class="col s12 m12 l12">
                    <p>
                    El código toma el saldo inicial de la caja, suma y resta los movimientos del día
                    y determina un saldo final. Este se compara con lo ingresado por el usuario al cierre
                    del día operativo en el arqueo de valores y determina el importe faltante o sobrante:
                    </p> 
                </div>
                <div class="col s12 m10 offset-m1 l6 offset-l3">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita4.png">
               </div>
    
            
                <div class="col s12 m12 l12">
                  <p>Una vez cerrada la caja, se genera automáticamente un reporte en PDF con la información que se
                     detalla a continuación:
                  </p>
                </div>  
                <div class="col s12 m12 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita5.png">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita6.png">
               </div>
               <div class="col s12 m12 l12">
                  <p>
                   El reporte muestra los movimientos de la caja del día, importes y cantidades de venta total,
                   cumplimiento del punto de equilibrio, horarios de apertura y cierre del local, mejor ticket en pesos,
                   ticket promedio, etc. Este reporte se puede guardar en un servicio de alojamiento en la nube como Drive 
                   o dropbox, para que el propietario del local de venta pueda visualizarlo independientemente del 
                   lugar en el que se encuentre.
                  </p>
                </div>
                
              </div>  
            </div>
                 
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Conclusión del Proyecto</h5>
              <div class="row">
                <div class="col s12 m10 offset-m1 l12">
                  <p>Este proyecto de automatización permite realizar el proceso de apertura, arqueo y 
                  cierre de caja de manera más eficiente  y sencilla. La macro desarrollada en VBA automatiza la recopilación de información relevante 
                     sobre los movimientos de caja, simplificando las tareas del responsable de la caja.</p>
                               
                   <p>Además, le generación de un reporte en PDF brinda al eventual propietario del local la 
                   capacidad de acceder a información diaria desde cualquier ubicación. </p>
                    
                    <p>En resumen, esta automatización optimiza el manejo de la caja mejorando la 
                      capacidad de seguimiento y control. </p>
                    
                </div>
              </div>
            </div> 
            <div class="divider"></div>
            
            <a class="waves-effect waves-teal btn-flat right" href="/index.html"><b>Volver al Home</b></a>
          </div>
          `,
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
            "titu1": "Macro in Access To Close Daily Cash Desk",
            'subtitu1': "Automation of the daily cash closing using Macro in Access.",
            "btnMas": "Read More",
            "herram": "Tools:",
            "paracaidas": "AUTOMATION PROJECT",
            "ttip-subir": "Scroll Up",
            "ttip-volver": "Home",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
                <h5 class="header">Introduction:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>Macros are a programming feature that allows you to automate repetitive tasks in a program, such as Excel or Access. <br><br>
        
                        In this case, the macro was designed to help the client efficiently and simply perform the daily opening, balancing, and closing of the cash register, using Microsoft Access.
                        <br><br>
                        Below is the Access form linked to the Macro in question:
                        </p>
                        <div class="col s12 m12 l10 offset-l1">
                            <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cierre-macro2.jpg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Development:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>A macro with VBA (Visual Basic for Applications) programming was prepared to automate the process.</p>
                        <p>At the beginning of each day, the cash handler opens it by entering an initial amount in cash and digital accounts:</p>
                    </div> 
                        
                    <div class="col s12 m10 offset-m1 l6 offset-l3">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita1.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>
                        At the end of the operational day, the operator must perform the balance of values, which involves recounting and entering the amount in cash, digital accounts, purchase orders, and other values.
                        </p>
                    </div>
                    <div class="col s12 m10 offset-m1 l6 offset-l3">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita3.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>
                        The code takes the initial cash balance, adds and subtracts the day's transactions, and determines a final balance. This is compared to what the user entered at the end of the operational day in the value balance and determines the missing or surplus amount:
                        </p> 
                    </div>
                    <div class="col s12 m10 offset-m1 l6 offset-l3">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita4.png">
                    </div>
        
                    <div class="col s12 m12 l12">
                        <p>Once the cash register is closed, a PDF report is automatically generated with the information detailed below:</p>
                    </div>  
                    <div class="col s12 m12 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita5.png">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/macro-cierre-caja/cajaVita6.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>
                        The report shows the day's cash movements, total sales amounts and quantities, compliance with the breakeven point, opening and closing times of the store, best ticket amount, average ticket, etc. This report can be saved to a cloud hosting service like Drive or Dropbox, so that the store owner can view it regardless of his location.
                        </p>
                    </div>
                    
                </div>  
            </div>
                    
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Project Conclusion</h5>
                <div class="row">
                    <div class="col s12 m10 offset-m1 l12">
                        <p>
                        This automation project streamlines the cash register opening, balancing, and closing process for a more efficient and straightforward experience.
                         The VBA-developed macro automates the collection of relevant information about cash movements, simplifying the tasks of the cash handler.</p>
                        
                        <p>In addition, the generation of a PDF report provides the eventual store owner with the ability to access daily information from any location.</p>
                        
                        <p>In summary, this automation optimizes cash handling by improving traceability and controllability.</p>
                    </div>
                </div>
            </div> 
            <div class="divider"></div>
            
            <a class="waves-effect waves-teal btn-flat right" href="/index.html"><b>Back to Home</b></a>
        </div>
        
        `,
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
        // Traduce el contenido según el idioma seleccionado
        document.getElementById('tit-uno-p1').textContent = t('titu1');
        document.getElementById('subtit-p1').textContent = t('subtitu1');
        let infoBtnMas = t('btnMas')
        document.getElementById('btnMas-p1').innerHTML = `<i class='material-icons left' >arrow_downward</i>${infoBtnMas}`; 
        document.getElementById('herram-p1').innerHTML = `<b>${t('herram')}</b>  Microsoft Access - Visual Basic for Applications (VBA).` ;
        document.getElementById('boxParaIco').textContent = t('paracaidas');
        document.getElementById('ttip-subir').setAttribute("data-tooltip", t('ttip-subir'));
        document.getElementById('ttip-volver').setAttribute("data-tooltip", t('ttip-volver'));
        document.getElementById('contCuerpo').innerHTML = t('cuerpoComp');
        document.getElementById('pieCont').innerHTML = t('pieComp')
    });
}

document.getElementById('ch-lang').addEventListener('click', ev => {

    //Aparece cargador
    document.getElementById('contenedorCargador').className = "contpreloader"

    if(ev.target.checked === true){
        changeLanguage('en');
        M.AutoInit();
        //quitamos el preloader
        setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")
    }else if(ev.target.checked === false){
        changeLanguage('es');
        M.AutoInit();
        //quitamos el preloader
        setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")
    }
})