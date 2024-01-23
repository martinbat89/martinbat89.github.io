  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "titu1": "Aplicación GAS Para Gestión De Comprobantes",
            "subtitu1": "Aplicación en Google Apps Scripts para gestionar clientes y comprobantes.",
            "btnMas": "Ver Mas",
            "herram": "Herramientas:",
            "ttip-subir": "Subir",
            "ttip-volver": "Volver al Inicio",
            "paracaidas": "PROYECTO DE AUTOMATIZACIÓN DE PROCESOS",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
              <h5 class="header">Introducción y evaluación del proceso:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>Creamos una solución para la carga y envío de comprobantes a clientes. Antes de este desarrollo,
                     el negocio imprimía sus comprobantes y los enviaba de forma presencial a sus clientes. <br><br>
                    Se analizó el proceso administrativo, y se acordó que era necesario comenzar con el envío por 
                    correo electrónico de los comprobantes. Desde el área administrativa consultaron si no era posible
                     mantener la impresión de comprobantes y enviar de forma masiva los mismos. En base a esto se 
                     decidió que lo mejor era desarrollar una pequeña aplicación que permita el escaneo de los 
                     comprobantes y el envío por lotes por mail.
                     </p>
                </div>
              </div>
            </div>
          <div class="divider"></div>
            <div class="section">
              <h5 class="header">Desarrollo del proyecto:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p>Con Google Apps Script, HTML, CSS y JavaScript, se creó una interfaz de usuario atractiva y fácil
                  de usar para que permitió cargar, eliminar y enviar facturas de manera rápida y automatizada a 
                  cada cliente:</p> 
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/comprob2.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Cada coprobante escaneado y muestra datos del cliente, del coprobante y el número 
                  de veces que se envió. El usuario cuenta con la posibilidad de hacer envios masivos, tildando mas
                   de un comprobante:</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/comprob3.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Para asegurar el envío correcto de los comprobantes fue necesario crear un ABM (Altas, bajas y modificaciones)
                     de clientes, para asegurar que se cuente con una dirección de mail para cada uno.</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/comprob15.jpg">
                </div>
                <div class="col s12 m12 l12">
                  <p>Dado el volumen de registros, la información se decidió guardar los datos en Google Spreadsheets. Se creó una 
                    tabla de comprobantes a enviar, donde se registraban cada uno de los comprobantes que se escaneaban para 
                    enviar y el estado en el que se encontraban. Además, se creo una tabla de clientes donde se registraban los 
                    datos de los mismos.<br><br>
                    El proceso para utilizar la aplicación es el siguiente: El responsable administrativo del negocio escanea 
                    con su teléfono celular cada comprobante que quiera subir y lo guarda en Google Drive. Desde la interfaz
                     principal sube cada comprobante. Selecciona los que quiere enviar y presiona una vez el botón enviar.<br><br>
                    Cada comprobante cargado se convierte a pdf utilizando el objeto File Reader de Javascript y Blob 
                    de Google Apps Script. A continuación se vuelvan las principales funciones utilizadas:</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/cod_1.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Con ambas funciones se logra convertir la imagen escaneada de cada comprobante a pdf y con el 
                    servicio de DriveApp lo guardamos en una carpeta de Google Drive. </p>
                </div>
              </div>  
            </div>      
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Conclusión del Proyecto</h5>
              <div class="row">
                <div class="col s12 m10 offset-m1 l12">
                  <p>Esta solución resultó muy útil para la empresa ya que permitió ahorrar tiempo y aumentar la 
                    eficiencia en el proceso de envío de comprobantes. Además se logró que los comprobantes se 
                    envíen a los clientes de manera oportuna y profesional, lo que incrementó la satisfacción 
                    del cliente.</p>
                    <p>Este desarrollo es una excelente muestra de cómo la tecnología puede mejorar la eficiencia y 
                    efectividad de los procesos empresariales.</p>
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
            "titu1": "GAS Application for Invoice Management.",
            'subtitu1': "Google Apps Script application for managing clients and invoices",
            "btnMas": "Read More",
            "herram": "Tools:",
            "paracaidas": "PROCESS AUTOMATION PROJECT",
            "ttip-subir": "Scroll Up",
            "ttip-volver": "Home",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
                <h5 class="header">Introduction and Process Evaluation:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>We created a solution for the loading and sending of invoices to customers. Prior to this development,
                            the business printed its invoices and delivered them to customers in person.<br><br>
                            The administrative process was analyzed, and it was agreed that it was necessary to start sending
                            invoices by email. From the administrative department, there was a query regarding whether it was
                            possible to maintain invoice printing and send them in bulk. Based on this, it was decided that the
                            best approach was to develop a small application that allows the scanning of invoices and batch
                            emailing.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Project Development:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>Using Google Apps Script, HTML, CSS, and JavaScript, we created an attractive and user-friendly user
                            interface that allowed for quick and automated loading, deletion, and sending of invoices to each
                            customer:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/comprob2.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>Each scanned invoice displays customer data, invoice information, and the number of times it has been sent.
                            Users have the option to perform mass mailings by selecting multiple invoices:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/comprob3.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>To ensure the correct delivery of invoices, it was necessary to create a CRM (Customer Relationship
                            Management) system to ensure that each customer had an email address on record.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/comprob15.jpg">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>Due to the volume of records, the decision was made to store data in Google Spreadsheets. A table of
                            invoices to be sent was created to register each of the scanned invoices for sending and to track their
                            status. Additionally, a customer table was created to store customer data.<br><br>
                            The process to use the application is as follows: The administrative head of the business scans each
                            invoice they want to upload with their smartphone and saves it to Google Drive. From the main interface,
                            they upload each invoice, select those they want to send, and press the send button.<br><br>
                            Each loaded invoice is converted to PDF using the JavaScript File Reader and Google Apps Script Blob
                            object. Below are the main functions used:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/COMP ELECTR ADRI/cod_1.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>With these functions, we were able to convert scanned images of each invoice to PDF and save them to a
                            Google Drive folder using the DriveApp service.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Project Conclusion</h5>
                <div class="row">
                    <div class="col s12 m10 offset-m1 l12">
                        <p>This solution proved very useful for the company as it saved time and increased efficiency in the invoice
                            sending process. In addition, it ensured that invoices were sent to customers in a timely and professional
                            manner, increasing customer satisfaction.</p>
                        <p>This development is an excellent example of how technology can improve the efficiency and effectiveness of
                            business processes.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <a class="waves-effect waves-teal btn-flat right" href="/index.html"><b>Return to Home</b></a>
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
        document.getElementById('herram-p1').innerHTML = `<b>${t('herram')}</b>  Google Apps Script - Google Sheets - HTML - CSS - Javascript.` ;
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