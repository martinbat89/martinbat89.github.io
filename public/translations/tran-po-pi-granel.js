  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "titu1": "Modelado y Visualización de Negocio de venta a Granel",
            "subtitu1": "Preprocesamiento, modelado y visualización de datos de comercio a granel utilizando Power BI Desktop.",
            "btnMas": "Ver Mas",
            "herram": "Herramientas:",
            "ttip-subir": "Subir",
            "ttip-volver": "Volver al Inicio",
            "paracaidas": "PROYECTO DE BUSINESS INTELLIGENCE",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
              <h5 class="header">Introducción:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>En este proyecto, creamos un dashboard con Power BI para una tienda natural 
                    que le permitió tomar decisiones informadas sobre su inventario y sus ventas. 
                    Utilizamos dos tablas generadas a partir del sistema de la empresa. 
                    Una con la información del inventario y otra con las ventas diarias por artículo 
                    en unidades y en pesos. 
                     </p>
                </div>
              </div>
            </div>
          <div class="divider"></div>
            <div class="section">
              <h5 class="header">Preprocesamiento y modelado de Datos:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p>Los datos se encontraban en formato .csv y se importaron utilizando <b>Power Query.</b> 
                  No fue necesario modificar en gran medida las tablas. Solo se ajustaron formatos y 
                  se agregaron campos calculados para reflejar por ejemplo, el margen porcentual de ganancias.</p> 
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/model1.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Para mostrar una evolución histórica de la información, se incorporó una tabla de fechas con la función DAX Calendar. 
                    Con las tres tablas importadas al modelo de datos se crearon las relaciones necesarias.</p>
                    <p>Por un lado se relaciono la tabla de stock con las ventas por artículo, con el campo 
                     común id de artículo. Por otro lado, se relacionó la tabla de fechas con la de ventas 
                     diarias por artículo con el campo común fecha:</p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/model2.png">
                </div>
              </div>  
            </div>
            <div class="section">
              <h5 class="header">Visualización de Datos:</h5>
              <div class="row">
                
                <div class="col s12 m12 l6">
                  <p>El dashboard final cuenta con diferentes elementos que muestran información relevante.  
                    A continuación se detallan los mismos:</p>
                    <p><b>Segmentación de fechas: </b>con la tabla de fechas y su relación se creó una segmentación 
                      de fechas que permite definir rangos que se conectan con todas las vizualizaciones de 
                      forma dinámica:</p>
                </div>
                <div class="col s12 m10 offset-m1 l5 offset-l1">
                  <br>
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/fecha_sel.png ">
                </div>
                <div class="col col s12 m12 l12">
                  <p><b>KPIs principales: </b>Cuatro indicadores principales que reflejan margen de ganancia promedio por 
                    artículo (Con una marca de objetivo establecida en el 50% del valor de venta), Kg vendidos 
                    (Para artículos de venta al peso), unidades vendidas(Para artículos de venta unitaria) y, 
                    por último, ventas totales en pesos.</p> 
                 </div>
                 <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi1.png">
                 </div>
                 <div class="col col s12 m12 l12">
                  <p><b>Grafico burbujas: </b>El mismo brinda un top 10 de artículos vendidos en pesos. Cada burbuja 
                    representa un artículo, y el tamaño de la burbuja se agranda para reflejar la participación 
                    del artículo respecto al total.</p> 
                 </div>
                 <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi2.png">
                 </div>
                 <div class="col col s12 m12 l12">
                  <p><b>Mapa de árbol: </b>Este gráfico refleja la participación 
                    de ventas en pesos de cada familia. Solo se incluyen las 15 principales familias:</p> 
                 </div>
                 <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi3.png">
                 </div>
                 <div class="col col s12 m12 l12">
                  <p><b>Grafico de lineas históricas:: </b>muestra la evolución a lo largo del tiempo de las ventas en pesos. Dependiendo
                     de la amplitud de tiempo fijada en la segmentación de fechas establecida por el usuario, se ajustan
                      las fechas del eje x en días, meses o trimestres para facilitar la visualización.</p> 
                 </div>
                 <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi4.png">
                 </div>
                 <div class="col s12 m12 l12">
                  <p><b>Gráfico de doughnut estado inventario: </b> El mismo refleja el estado del stock según el reporte de 
                    inventario. Permite identificar la participación del stock para verificar que artículos están con 
                    existencias apropiadas o si se deben definir ordenes de compra inmediatas o futuras:</p> 
                 </div>
                 <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi5.png">
                   </div>
                 <div class="col s12 m12 l12">
                  <br><br>
                  <p><b><i>Conexión de visualizaciones:</i> </b>Al existir relaciones entre las tablas del modelo de datos, 
                    todo el dashboard se muestra de forma dinámica. Por ejemplo, si el usuario selecciona una 
                    familia, los KPIs y los gráficos se filtran automáticamente la información en función de la 
                    selección.</p> 
                 </div>
              </div>  
            </div>       
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Conclusión del Proyecto</h5>
              <div class="row">
                <div class="col s12 m10 offset-m1 l12">
                  <p>El dashboard creado permitió a la tienda natural tomar decisiones más informadas y 
                    eficientes en cuanto a su inventario y ventas. La utilidad más destacada del dashboard 
                    radica en la combinación de datos de stock y ventas, lo que permitió a la empresa identificar
                     las existencias sobre las cuales las acciones tienen un mayor impacto. Por ejemplo, si se 
                     selecciona una familia de artículos que tiene una amplia representación en el gráfico de 
                     mapa de árbol y se detecta que algunos de estos artículos tienen un nivel de inventario 
                     por debajo del punto de pedido, es fundamental solicitar al área de compras que libere 
                     los pedidos lo antes posible. </p>
                    <p>Si estás interesado en saber más sobre cómo creamos este dashboard y cómo podemos ayudar 
                      a tu empresa a tomar mejores decisiones, no dudes en contactarme.</p>
                    
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
            "titu1": "Bulk Sales Business Modeling and Visualization",
            'subtitu1': "Preprocessing, modeling, and visualization of bulk trade data using Power BI Desktop.",
            "btnMas": "Read More",
            "herram": "Tools:",
            "paracaidas": "BUSINESS INTELLIGENCE PROJECT",
            "ttip-subir": "Scroll Up",
            "ttip-volver": "Home",
            "cuerpoComp":`<div class="col s12 m12 l12">
            <div class="divider"></div>
            <div class="section scrollspy" id="seccion1">
                <h5 class="header">Introduction:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>In this project, we created a Power BI dashboard for a natural store that enabled them to make informed decisions about their inventory and sales. We used two tables generated from the company's system. One contains inventory information, and the other tracks daily sales by item in both units and currency.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Data Preprocessing and Modeling:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>The data was in .csv format and was imported using <b>Power Query.</b> There was no need for significant table modifications. We only adjusted formats and added calculated fields to reflect, for example, the percentage margin of profit.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/model1.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>To showcase historical data, a date table was incorporated using DAX Calendar function. Necessary relationships were established among the three tables imported into the data model.</p>
                        <p>On one hand, the stock table was related to item sales using the common item ID. On the other hand, the date table was related to daily item sales with the common date field:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/model2.png">
                    </div>
                </div>
            </div>
            <div class="section">
                <h5 class="header">Data Visualization:</h5>
                <div class="row">
                    <div class="col s12 m12 l6">
                        <p>The final dashboard features different elements displaying relevant information. Here are the details:</p>
                        <p><b>Date Slicing: </b>With the date table and its relationships, a date slicer was created, allowing dynamic range selection that connects with all visualizations:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l5 offset-l1">
                        <br>
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/fecha_sel.png ">
                    </div>
                    <div class="col s12 m12 l12">
                        <p><b>Main KPIs: </b>Four main indicators reflect average profit margin per item (with a target set at 50% of the sale value), kilograms sold (for weight-based items), units sold (for individual items), and total sales in currency.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi1.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p><b>Bubble Chart: </b>This chart presents the top 10 items sold in currency. Each bubble represents an item, and its size expands to reflect the item's share of the total.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi2.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p><b>Tree Map: </b>This chart illustrates the sales distribution in currency for each family. It includes the top 15 primary families:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi3.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p><b>Historical Line Chart: </b>This chart displays the evolution of sales in currency over time. Depending on the time range set in the date slicer by the user, the x-axis dates are adjusted in days, months, or quarters for better visualization.</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi4.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p><b>Inventory Status Doughnut Chart: </b>This chart reflects the state of inventory based on the inventory report. It allows identification of stock contributions to verify if items have appropriate stocks or if immediate or future purchase orders need to be defined:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/DASHBOARDS POWERBI/dash-kpi5.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <br><br>
                        <p><b>Visualization Interconnection: </b>As relationships exist between the data model tables, the entire dashboard is displayed dynamically. For example, if a user selects a family, KPIs and charts automatically filter the information based on the selection.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Project Conclusion</h5>
                <div class="row">
                    <div class="col s12 m10 offset-m1 l12">
                        <p>The created dashboard enabled the natural store to make more informed and efficient decisions regarding their inventory and sales. The dashboard's most prominent feature is the combination of inventory and sales data, allowing the company to identify the stocks with the greatest impact. For instance, if a family of items is selected with a significant representation in the tree map chart and it's detected that some of these items have inventory levels below the reorder point, it's crucial to request immediate purchase orders from the procurement department.</p>
                        <p>If you're interested in learning more about how we created this dashboard and 
                        how we can help your company make better decisions, don't hesitate to contact us.</p>
                    </div>
                </div>
                </div> 
            <div class="divider"></div>
            <a class="waves-effect waves-teal btn-flat right" href="/index.html"><b>Return To Home</b></a>
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
        document.getElementById('herram-p1').innerHTML = `<b>${t('herram')}</b>  Power query - Power BI.` ;
        document.getElementById('boxParaIco').textContent = t('paracaidas');
        document.getElementById('ttip-subir').setAttribute("data-tooltip", t('ttip-subir'));
        document.getElementById('ttip-volver').setAttribute("data-tooltip", t('ttip-volver'));
        document.getElementById('contCuerpo').innerHTML = t('cuerpoComp');
        document.getElementById('pieCont').innerHTML = t('pieComp')
    });
}

document.getElementById('ch-lang').addEventListener('click', ev => {

    if(ev.target.checked === true){
        changeLanguage('en');
        M.AutoInit();
        console.log(ev.target.checked)
    }else if(ev.target.checked === false){
        changeLanguage('es');
        M.AutoInit();
        console.log(ev.target.checked)
    }
})