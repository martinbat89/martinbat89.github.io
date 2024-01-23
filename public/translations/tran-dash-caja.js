  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "titu1": "Dashboard Para Gestión De Cajas",
            "subtitu1": "Dashboard para conocer el cierre de Cajas y la fecha estimada de cierre administrativo mensual.",
            "btnMas": "Ver Mas",
            "herram": "Herramientas:",
            "paracaidas": "PROYECTO DE ANÁLISIS DE DATOS",
            "ttip-subir": "Subir",
            "ttip-volver": "Volver al Inicio",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
              <h5 class="header" id="introTit-p1">Introducción:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>El proyecto consistió en la creación de un tablero para visualizar el estado mensual de la gestión administrativa de cajas de diferentes locales de una empresa de retail. La empresa quería contar con información acerca de la disponibilidad de la papelería que se envía desde cada local a la oficina central y, además, saber en qué estado se encontraba el control administrativo de cada local para cumplir con las fechas de cierre.<br><br> 
                    Para esto, la organización contaba con dos reportes. El primero muestra por local el día operativo, si se controló la papelería y quién la controló. El segundo muestra el detalle de la papelería que se envió desde cada local, indicando local, fecha y si ya llegó la misma. Con ambos reportes, la tarea consistió en desarrollar un tablero que permita conocer el estado de la documentación y del control administrativo. </p>
                </div>
              </div>
             </div>
          <div class="divider"></div>
            <div class="section">
              <h5 class="header">Importación de la información:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>El tablero se dividió en dos grupos:</p>
                    <ol>
                      <li><p>Control administrativo de cajas.</p></li>
                      <li><p>Estado de la papelería o documentación.</p></li>
                    </ol>
                    <br>
                    <p><b>Primer paso: </b>Leer los reportes y transformarlos a un formato que permita procesar la información.</p>
                    <p>El reporte de control administrativo de cajas se encontraba en formato .csv. Utilizando la herramienta PapaParse, 
                    se procesó el archivo CSV para obtener los datos en un formato que permita luego procesarlos. 
                    A continuación, parte del código utilizado. Al completarse la lectura del reporte, se ejecuta una función que procesará la información, la cual se incluye en los parámetros de la misma:</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa1.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>El reporte de confirmación de papelería en oficina central se encontraba en formato XLS (versión 1997-2003). Para leer este archivo, se utilizó el objeto FileReader. A continuación, se muestra la función a partir de la cual se cargan los datos del archivo en una variable objeto llamada "result".</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa2.png">
               </div>
              </div>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p><b>Segundo paso: </b>Procesamiento de datos con Danfo.js para visualización y estimaciones:</p>
                  <p> Se procesó la información utilizando la librería Danfo.js, que permitió agrupar y manipular
                     los datos necesarios para su visualización en el mapa y en los gráficos del dashboard.
                     Danfo.js es una herramienta de manipulación de datos en JavaScript que ofrece funcionalidades
                      como filtrado, agrupamiento, unión y transformación de datos, lo que facilitó la preparación 
                      y organización de los datos. A través de la creación de DataFrames, se pudo procesar la 
                      información estadística en formatos como JSON, arreglos y objetos para su posterior visualización 
                      en formato web. Se incluye un ejemplo de código en el que se crea un DataFrame con información de 
                      confirmación de papelería y se agrupan los datos por sucursal utilizando la operación de conteo para
                       obtener la cantidad de papelería que llegó por sucursal:</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa3.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Con la ayuda de Danfo.js, se agruparon los datos por local y se calcularon los promedios y la 
                    cantidad de cajas controladas por cada administrativo. Estos datos se tomaron con posterioridad 
                    para el armado de la visualización.</p>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p><b>Tercer Paso: </b>Procesamiento de datos con Danfo.js para visualización y estimaciones:</p>
                  <p> Se buscó estimar la fecha de cierre contable del sector, la cual debe cumplir con una fecha
                     límite mensual establecida por la organización. Para lograrlo, se decidió utilizar la herramienta
                      Brain.js para entrenar los datos de confirmación. Una vez que se tenían los datos de las cajas 
                      administrativas controladas en una fecha determinada y las que quedaban pendientes, se utilizó
                       la mencionada librería para predecir la fecha de cierre estimada. De esta manera, la jefatura 
                       pudo anticiparse y tomar medidas preventivas en caso de ser necesario para asegurarse de cumplir
                        con la fecha límite establecida.</p>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p><b>Cuarto Paso: </b>Visualización de datos clara y atractiva. Se desarrolla en la siguiente sección.</p>
                </div>
              </div>
             </div>
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Visualización de Datos</h5>
              <p>El dashboard se dividió en dos secciónes:</p>
              <div class="row">
                    <div class="col s12 m12 l12">
                      <p><b>a) Sección de Cajas Controladas:</b></p>
                      <p>Para presentar los datos de manera más clara y visual, al inicio de esta sección se ha creado una 
                        tarjeta con información relevante referida al control administrativo de cajas. A continuación, se 
                        presentan los valores principales:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj1.png">
                    </div>
                    <div class="col s12 m12 l12">
                      <p>Esta visualización proporciona una descripción completa y concisa de los datos de cajas controladas, 
                        permitiendo una fácil comprensión y análisis de los mismos. La fecha estimada de cierre explicada en 
                        el <b>paso cuatro</b> se refleja en esta parte.<br><br>
                        Después de eso, se creó un gráfico de líneas que representa la evolución diaria de las cajas controladas,
                        mostrando dos series: la serie real y una serie suavizada utilizando el promedio de los valores. La serie 
                        suavizada se utilizó para entrenar la red que estima la fecha de cierre. </p>
                    </div> 
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                      <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj2.png">
                    </div>
                    <div class="col s12 m12 l12">
                      <p>En tercer lugar, se creó un mapa utilizando la librería de código abierto <b>Leaflet</b>. Se incluyeron marcadores que 
                        indicaban la cantidad de cajas que se estaban controlando en cada local, con el tamaño de la burbuja del marcador
                        aumentando a medida que se controlaban más cajas.<br><br> Se utilizó un sistema de colores para indicar el progreso del 
                        trabajo. Las burbujas se pintaban en rojo si se había completado menos de un tercio del trabajo, amarillo si se 
                        había completado entre un tercio y dos tercios, y verde si se había completado más de dos tercios. Dado que los 
                        datos ya habían sido agrupados en la etapa de preprocesamiento, sólo se necesitaba crear y configurar el mapa. <br><br>
                        Esta funcionalidad permitió una rápida visualización del progreso del trabajo en cada local. A continuación se
                        muestra un extracto del código que configura el mapa: </p>
                    </div>  
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                      <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa4.png">
                  </div> 
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <br><br>
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj3.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>En cuarto lugar, se creó un gráfico de Polar Area Chart que muestra la cantidad de cajas realizadas por cada administrativo. 
                      A continuación se presentará una imagen del mencionado gráfico.<br><br>
                      En quinto lugar, y como último gráfico del apartado de control administrativo de cajas, se diseñó un gráfico de doughnut para 
                      ilustrar la relación entre el total de cajas pendientes y el total de cajas confirmadas.  </p>
                  </div> 
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj10.png">
                  </div>    
              </div>
              <br>
              <div class="row">
                <div class="col s12 m12 l12">
                    <p><b>b) Papelería recibida en oficina central:</b></p>
                </div>
                <div class="col s12 m12 l6">
                  <p>El apartado de "Papelería recibida en oficina central" sigue un diseño similar al apartado de "Cajas controladas", 
                    pero con información diferente. En este caso, se muestra si la papelería está llegando a tiempo. Los datos del reporte
                     ya están procesados, por lo que se agruparon según la necesidad de cada opción de visualización utilizando danfo.js.<br><br>
                    En primer lugar, se generó un gráfico de torta que muestra el total de documentación recibida y la documentación que
                     aún está pendiente. Cada etiqueta muestra el valor numérico y el porcentaje que representa del total. A continuación 
                     se presenta una imagen del gráfico mencionado.<br><br>
                   </p>
                </div>
                <div class="col s10 offset-s1 m10 offset-m1 l4 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj6.png">
                </div>
                <div class="col s12 m12 l12">
                  <p> El reporte de documentación recibida incluye la fecha de la papelería y la fecha de confirmación en la oficina central. 
                    A partir de esta información, se agregó un campo de "demora" para obtener estadísticas de las sucursales con mayores retrasos.
                    A continuación se presenta el código utilizado para calcular la demora:  </p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l2">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa5.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Con la información de la demora, se generó una tabla que muestra las 14 sucursales con mayor retraso, incluyendo
                     el promedio de demora en días, el desvío estándar y la cantidad de cajas confirmadas. Se muestra una imagen de la 
                     tabla con las 5 peores sucursales.</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l2">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj11.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>En tercer lugar se agregó un histograma que muestra las sucursales con mas documentación pendiente, ordenadas de mayor
                     a menor.</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj8.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Por último, en esta sección también se agregó un mapa que muestra el estado de confirmación de documentación de cada local,
                     con la misma escala de colores y los mismos marcadores. Se utilizó Leaflet también y lo único que cambia es el valor numérico,
                      que se refiere a la documentación confirmada en la oficina central.</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj9.png">
                </div> 
              </div>
            </div>
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Conclusión del Proyecto</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>El dashboard desarrollado para la gestión administrativa de cajas en la empresa de retail fue una herramienta valiosa 
                    que permitió una mejor visualización del progreso del trabajo en cada local y en la oficina central, así como también 
                    identificar rápidamente áreas de mejora. La inclusión de un mapa web con marcadores y un sistema de colores para indicar
                     el cumplimiento de los objetivos fue una funcionalidad innovadora y efectiva. Además, los gráficos generados con Chart.js 
                     proporcionaron una visualización clara y rápida del rendimiento de cada administrativo y del progreso general del trabajo.</p>
                      <p>La estimación de fechas de cierre con Brain.js también agregó valor, permitiendo una gestión de recursos más eficiente 
                      en caso de que la fecha estimada no se cumpliera.</p>
                    <p>En resumen, el proyecto fue un éxito y demostró cómo el análisis de datos puede ser una herramienta poderosa para mejorar la eficiencia y productividad de una empresa, brindando una mejor experiencia al cliente y aumentando la rentabilidad. </p>
                </div>
              </div>
              
            </div> <div class="divider">
              
            </div>
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
            "titu1": "Cash Management Dashboard",
            'subtitu1': "Dashboard for tracking the status of cash registers and estimating the monthly administrative closing date.",
            "btnMas": "Read More",
            "herram": "Tools:",
            "paracaidas": "DATA ANALYSIS PROJECT",
            "ttip-subir": "Scroll Up",
            "ttip-volver": "Home",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
                <h5 class="header" id="introTit-p1">Introduction:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>The project consisted of creating a dashboard to visualize the monthly status of the administrative management of cash registers at various retail company locations. The company wanted to have information about the availability of stationery sent from each location to the central office and also to know the status of the administrative control at each location to meet the closing dates.<br><br>
                        For this, the organization had two reports. The first report displays, by location, the operational day, whether the stationery was checked, and who checked it. The second report displays the details of the stationery sent from each location, indicating the location, date, and whether it has arrived. Using both reports, the task was to develop a dashboard that allows knowing the status of the documentation and administrative control.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Data Import:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>The dashboard was divided into two sections:</p>
                        <ol>
                            <li><p>Administrative control of cash registers.</p></li>
                            <li><p>Status of stationery or documentation.</p></li>
                        </ol>
                        <br>
                        <p><b>First step:</b> Read the reports and transform them into a format that allows data processing.</p>
                        <p>The report on administrative control of cash registers was in .csv format. Using the PapaParse tool, the CSV file was processed to obtain data in a format that could be processed later. Below is part of the code used. After reading the report, a function that processes the information is executed, which is included as parameters:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa1.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>The report on confirmation of stationery at the central office was in XLS format (1997-2003 version). To read this file, the FileReader object was used. Below is the function from which the data from the file is loaded into an object variable called "result".</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa2.png">
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p><b>Second step:</b> Data processing with Danfo.js for visualization and estimates:</p>
                        <p>The information was processed using the Danfo.js library, which allowed grouping and manipulating the necessary data for visualization on the map and in the dashboard charts. Danfo.js is a JavaScript data manipulation tool that offers features such as filtering, grouping, joining, and data transformation, making data preparation and organization easier. By creating DataFrames, information could be processed statistically in formats like JSON, arrays, and objects for later web-based visualization. An example of code is included in which a DataFrame is created with information about confirmation of stationery, and the data is grouped by branch using the counting operation to obtain the amount of stationery that arrived per branch:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa3.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>With the help of Danfo.js, the data was grouped by location, and averages and the number of controlled registers per administrator were calculated. This data was later used for visualization.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p><b>Third Step:</b> Data processing with Danfo.js for visualization and estimates:</p>
                        <p>The project aimed to estimate the closing date for the accounting sector, which must meet a monthly deadline set by the organization. To achieve this, the decision was made to use Brain.js to train the confirmation data. Once the data of the controlled registers on a specific date and the registers pending confirmation were available, the Brain.js library was used to predict the estimated closing date. This way, management could plan and take preventive measures if the estimated date was not met.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p><b>Fourth Step:</b> Clear and attractive data visualization. This will be developed in the next section.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Data Visualization</h5>
                <p>The dashboard was divided into two sections:</p>
                <div class="row">
                  <div class="col s12 m12 l12">
                    <p><b>a) Controlled Boxes Section:</b></p>
                    <p>To present the data in a clearer and more visual manner, a card with relevant information related to the administrative control of boxes was created at the beginning of this section. Here are the key values presented:</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj1.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>This visualization provides a complete and concise description of the controlled boxes data, allowing for easy understanding and analysis. The estimated closing date explained in <b>step four</b> is reflected in this part.<br><br> After that, a line chart was created to represent the daily evolution of controlled boxes, showing two series: the actual series and a smoothed series using the average of values. The smoothed series was used to train the network that estimates the closing date.</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj2.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>Thirdly, a map was created using the open-source library <b>Leaflet</b>. Markers indicating the number of controlled boxes at each location were included, with the marker bubble size increasing as more boxes were controlled.<br><br> A color system was used to indicate the progress of the work. Bubbles were colored red if less than a third of the work was completed, yellow if between one third and two thirds were completed, and green if more than two thirds were completed. Since the data had already been grouped in the preprocessing stage, only map creation and configuration were needed. <br><br> This functionality allowed for a quick visualization of work progress at each location. Below is an excerpt of the code that configures the map:</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa4.png">
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <br><br>
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj3.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>Fourthly, a Polar Area Chart was created to show the number of boxes completed by each administrator. An image of this chart will be presented below.<br><br> Fifthly, as the last chart in the administrative box control section, a doughnut chart was designed to illustrate the relationship between the total pending boxes and the total confirmed boxes.</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj10.png">
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col s12 m12 l12">
                    <p><b>b) Paperwork Received at Central Office:</b></p>
                  </div>
                  <div class="col s12 m12 l6">
                    <p>The "Paperwork Received at Central Office" section follows a similar design to the "Controlled Boxes" section, but with different information. In this case, it shows whether paperwork is arriving on time. The report data has already been processed, so it was grouped as needed for each display option using danfo.js.<br><br> First, a pie chart was generated to show the total received documentation and the documentation that is still pending. Each label displays the numeric value and the percentage it represents of the total. An image of the mentioned chart is presented below.<br><br></p>
                  </div>
                  <div class="col s10 offset-s1 m10 offset-m1 l4 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj6.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>The received documentation report includes the date of the paperwork and the confirmation date at the central office. Based on this information, a "delay" field was added to obtain statistics on branches with the highest delays. The code used to calculate the delay is presented below:</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l2">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/mapa5.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>With the delay information, a table was generated to display the 14 branches with the greatest delay, including the average delay in days, the standard deviation, and the number of confirmed boxes. An image of the table with the 5 worst branches is shown below.</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l2">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj11.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>Thirdly, a histogram was added to show branches with the most pending documentation, ordered from highest to lowest.</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj8.png">
                  </div>
                  <div class="col s12 m12 l12">
                    <p>Lastly, in this section, a map was also added to show the status of documentation confirmation at each location, with the same color scale and markers. Leaflet was used for this as well, with the only difference being the numeric value, which refers to the confirmed documentation at the central office.</p>
                  </div>
                  <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASH HTML CON MAPA/dashCaj9.png">
                  </div>
                </div>
                </div>
                <div class="divider"></div>
                <div class="section">
             <h5 class="header">Project Conclusion</h5>
             <div class="row">
                <div class="col s12 m12 l12">
                    <p>The dashboard developed for the administrative management of cash registers in the retail company proved to be a valuable tool. It allowed for a better visualization of the work progress at each store and at the central office, as well as a quick identification of areas for improvement. The inclusion of a web map with markers and a color-coding system to indicate goal achievement was an innovative and effective feature. Furthermore, the charts generated using Chart.js provided a clear and rapid visualization of each administrator's performance and the overall progress of the work.</p>
                    <p>The estimation of closing dates using Brain.js also added value, enabling more efficient resource management in case the estimated dates were not met.</p>
                    <p>In summary, the project was a success and demonstrated how data analysis can be a powerful tool for improving a company's efficiency and productivity, providing a better customer experience, and increasing profitability.</p>
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
        document.getElementById('herram-p1').innerHTML = `<b>${t('herram')}</b>  Html - Javascript - CSS - Leaflet - Chart.js - Danfo.js - Papaparse.` ;
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