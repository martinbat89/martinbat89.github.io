  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "titu1": "Dashboard y App de Cuentas Corrientes en GAS",
            "subtitu1": "Dashboard en Looker y Aplicación para el seguimiento de cuentas corrientes desarrollado con Google Apps Scripts.",
            "btnMas": "Ver Mas",
            "herram": "Herramientas:",
            "ttip-subir": "Subir",
            "ttip-volver": "Volver al Inicio",
            "paracaidas": "PROYECTO DE BUSINESS INTELLIGENCE Y ERP",
            "cuerpoComp":`
            <div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
              <h5 class="header">Introducción y Objetivo:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>El proyecto tenía por objetivo mejorar la gestión administrativa de las cuentas corrientes del cliente.
                    Antes del proyecto, la gestión se encontraba en multiples hojas de cálculo, con comentarios del personal
                     administrativo sueltos en cada uno lo cuál dificultaba su visualización. Además se trabajaba mes a més 
                     y al no contar con la información sobre la gestión agrupada en una sola fuente de información, no se 
                     conocía como evolucionaba la gestión. </p><p>La finalidad del proyecto entonces, se enfocó en lograr un unico 
                     punto donde consular la gestión de seguimiento de cuentas corrientes, y en desarrollar un dashboard donde
                     consultar el estado de la gestión a lo largo del tiempo.
                     </p>
                </div>
              </div>
            </div>
          <div class="divider"></div>
            <div class="section">
              <h5 class="header">Procesamiento de tabla de comentarios:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p>La organización descarga su reporte mensual en formato de hoja de cálculo. Debido a que el volúmen
                   de comentarios mensuales no supera los 500, se decidió armar una tabla detallada en Google Sheets
                    con los mismos campos que se venían usando y dos adicionales: uno con el id de comentario y otro
                     con el período en formato MM-AAAA (mes y año). </p>
                  <p>En primer lugar, se creó el script que conecta el proceso de importación con el reporte guardado en Google Drive:</p> 
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/cod1.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Con el arreglo final generado, solo se agregaron los datos en la hoja base de comentarios con la instrucción
                     "set values" de Apps Scripts.</p>
                    <p>Como la función usada recorría todos los registros se la utilizó, además, para generar las filas
                       que se agregarían a la hoja de estadísticas. Se fueron acumulando de manera que quedaran los 
                       siguientes campos: </p>
                   <ol>
                      <li>periodoEstad: Periodo mes-año cuyos datos se están agrupando. </li>
                      <li>id_total: Cantidad de clientes activos y con deuda en el periodo procesado. </li>
                      <li>id_comentarios: Cantidad de comentario de gestión realizados en el periodo procesado. </li>
                      <li>nombreTipo: Segmento dentro del que se encuentra el cliente al momento del procesamiento. </li>
                      <li>region22: Región dentro en la que se encuentra el cliente al momento del procesamiento. </li>
                      <li>Fecha_ahora: Fecha y hora en la que se genera la importación y procesamiento.  </li>
                    </ol>
                    <p>Con este proceso se logra importar los datos del reporte mensual que se esta analizando, a 
                      la base de comentarios de meses ya importados. Adicionalmente,se completa la base de 
                      estadísticas mensuales, que se usa como base para la creación del dashboard.</p>
                </div>
              </div>  
            </div>
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Visualización de Datos:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>La visualización de los comentarios benefició la gestión al permitir una visión global de el 
                    estado de las cuentas corrientes y su gestión.  La parte orientada al análisis
                     de datos, además del preprocesamiento detallado en el párrafo anterior,  incluyó la creación del
                      dashboard. Para este fin se utilizó Google Looker Studio. </p>
                  <p>Primero se creó la conexión con la base de comentarios. Se ingresó a la consola de Looker Studio
                     y se creó la nueva conexión a la hoja de cálculo de Google brindando los permisos respectivos. 
                     Creada la conexión, se procedió a generar la visualización. </p>    
                   <p>El dashboard constaba de dos páginas.</p> 
                   <br>
                  <h6>Página Uno:</h6>
                </div>
                <div class="col s12 m12 l6">
                  <p>Se crearon tres segmentaciones (periodo desde-hasta, región de análisis, y estado de vencimiento)
                     desde las que se podían modificar y actualizar dinámicamente las visualizaciones. </p>
                   
                </div>
                <div class="col s12 m10 offset-m1 l5 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi1Cment (1).png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Se desarrollaron tres KPI: uno que indicaba el total de clientes procesados, otro la cantidad de
                    comentarios realizados y, por último, el porcentaje de comentarios sobre el total de clientes procesados,
                     lo que se llamó porcentaje de gestión.</p>
                  <p>Se agregó un gráfico de barras (histograma). En el eje X se muestran los períodos bajo el formato mes-año. 
                    En el eje Y, se muestra la cantidad de comentarios y el total de clientes procesados, ambos valores en la 
                    misma barra para mostrar, del total, qué parte tenía gestión con comentarios.</p>
                </div>
                <div class="col s12 m10 offset-m1 l8 offset-l2">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi3Cment5.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Se creó un histograma adicional, donde mostrar la evolución de comentarios mes a mes.</p>
                </div>
                <div class="col s12 m10 offset-m1 l8 offset-l2">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi3Cment (1).png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Por último se agrego una tabla de datos, donde se resumen los datos que reflejan los
                     gráficos pero de una forma solo numérica.</p>
                </div>
                <div class="col s12 m10 offset-m1 l8 offset-l2">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi4Cment (1).png">
                  
                </div>
                <div class="col s12 m12 l12">
                  <br>
                  <h6>Página Dos:</h6>
                </div>
                <div class="col s12 m12 l6">
                  <p>La pagina dos se dejo para incorporar un mapa del país donde se encuentran las regiones de los diferentes 
                    clientes. Se marcó cada región con burbujas cuyo tamaño y color varian en función de la cantidad de 
                    clientes y la cantidad de comentarios que tenía cada una. Cuanto más grande la burbuja, más clientes, y
                     cuanto más intenso su color, mas comentarios existentes.</p> 
                </div>
                <div class="col s12 m10 offset-m1 l4 push-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi5Cment.png">
                </div>
                 
              </div>  
            </div>       
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Conclusión del Proyecto</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>De esta forma la organización cuenta con una herramienta que le permite visualizar 
                    la gestión de sus cuentas corrientes de forma global, identificando como se trabaja 
                    en el sector a lo largo del año.  </p>
                    <p>A partir del dashboard se pudo observar que el volumen de cuentas se intensifica 
                      en regiones como las de Bahía Blanca. Además, el bajo porcentaje de gestión refleja
                       una falta de personal de algunas regiones, y la urgente necesidad de valuar en términos
                        numéricos la pérdida generada por las deudas atrasadas. </p>
                    <p>Todas las herramientas utilizadas son de acceso gratuito, solo es necesario tener una cuenta de Google.</p>
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
            "titu1": "Dashboard and Current Accounts App in GAS",
            'subtitu1': "Dashboard in Looker and Application for Current Account Tracking developed with Google Apps Scripts.",
            "btnMas": "Read More",
            "herram": "Tools:",
            "paracaidas": "BUSINESS INTELLIGENCE AND ERP PROJECT",
            "ttip-subir": "Scroll Up",
            "ttip-volver": "Home",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
                <h5 class="header">Introduction and Objective:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>The project aimed to enhance the administrative management of the client's current accounts. Before the project, management was scattered across multiple spreadsheets with scattered administrative staff comments, making it difficult to visualize. Additionally, work was done on a monthly basis, and without having the management information consolidated in a single source, the evolution of management was unknown.</p>
                        <p>Therefore, the project's aim was to establish a single point for querying current account tracking management and to develop a dashboard for monitoring the management's status over time.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Comment Table Processing:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>The organization downloads its monthly report in spreadsheet format. Since the monthly comment volume is below 500, it was decided to create a detailed table in Google Sheets with the same fields that were previously used and two additional fields: one with the comment ID and another with the period in the format MM-YYYY (month and year).</p>
                        <p>First, a script was created to connect the import process with the report stored in Google Drive.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/cod1.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>With the final array generated, the data was added to the base comments sheet using the "set values" instruction from Apps Scripts.</p>
                        <p>Since the function used iterated through all the records, it was also used to generate the rows that would be added to the statistics sheet. They were accumulated so that the following fields remained:</p>
                        <ol>
                            <li>periodEstad: The month-year period for which the data was being aggregated.</li>
                            <li>id_total: The number of active clients with debt in the processed period.</li>
                            <li>id_comments: The number of management comments made in the processed period.</li>
                            <li>nombreTipo: The segment in which the client was located at the time of processing.</li>
                            <li>region22: The region in which the client was located at the time of processing.</li>
                            <li>Fecha_ahora: The date and time when the import and processing were generated.</li>
                        </ol>
                        <p>This process allowed the data from the monthly report under analysis to be imported into the base of comments from previous months. Additionally, it completed the monthly statistics base, which is used as a foundation for creating the dashboard.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Data Visualization:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>The visualization of the comments benefited management by allowing for a comprehensive view of the status of the current accounts and their management. In addition to the detailed preprocessing mentioned above, the data analysis part included the creation of a dashboard. Google Looker Studio was used for this purpose.</p>
                        <p>First, a connection was established with the comments base. Accessing Looker Studio's console, a new connection was created to the Google spreadsheet, with the necessary permissions granted. Once the connection was established, the visualization was generated.</p>
                        <p>The dashboard consisted of two pages.</p>
                        <br>
                        <h6>Page One:</h6>
                    </div>
                    <div class="col s12 m12 l6">
                        <p>Three segments were created (period from-to, analysis region, and due status) from which visualizations could be dynamically modified and updated.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l5 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi1Cment (1).png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>Three KPIs were developed: one indicating the total processed clients, another showing the number of comments made, and the last one representing the percentage of comments relative to the total processed clients, referred to as the management percentage.</p>
                        <p>A bar chart (histogram) was added. The X-axis displayed periods in the month-year format. The Y-axis showed the number of comments and the total number of processed clients, both values on the same bar to indicate what portion had comments related to management.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l8 offset-l2">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi3Cment5.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>An additional histogram was created to show the evolution of comments month by month.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l8 offset-l2">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi3Cment (1).png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>Finally, a data table was added to numerically summarize the data reflected in the charts.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l8 offset-l2">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi4Cment (1).png">
                    </div>
                    <div class="col s12 m12 l12">
                        <br>
                        <h6>Page Two:</h6>
                    </div>
                    <div class="col s12 m12 l6">
                        <p>The second page was left to incorporate a map of the country showing the regions of different clients. Each region was marked with bubbles whose size and color varied based on the number of clients and the number of comments in each. Larger bubbles represented more clients, and more intense colors indicated more comments.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l4 push-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/gestion-ctas-ctes/kpi5Cment.png">
                    </div>
                </div>
                </div>       
                <div class="divider"></div>
                <div class="section">
                    <h5 class="header">Project Conclusion</h5>
                    <div class="row">
                        <div class="col s12 m12 l12">
                            <p>In this way, the organization has a tool that allows it to visualize the management of its current accounts on a global scale, identifying how the sector operates throughout the year.</p>
                            <p>From the dashboard, it was observed that the volume of accounts intensifies in regions like Bahía Blanca. Additionally, the low management percentage reflects a lack of personnel in some regions and the urgent need to assess the losses generated by overdue debts in numerical terms.</p>
                            <p>All the tools used are freely accessible; you only need to have a Google account.</p>
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
        document.getElementById('herram-p1').innerHTML = `<b>${t('herram')}</b>  Google Apps Script - Google Sheets - HTML - CSS - Javascript - Google Looker Studio.` ;
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

        //cargamos idioma session
        sessionStorage.setItem('userLanguage', "en");
        //quitamos el preloader
        setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")
    }else if(ev.target.checked === false){
        changeLanguage('es');
        M.AutoInit();

        //cargamos idioma session
        sessionStorage.setItem('userLanguage', "es");
        //quitamos el preloader
        setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")
    }
})