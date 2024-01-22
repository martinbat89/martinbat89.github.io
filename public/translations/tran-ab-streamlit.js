  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "titu1": "Prueba A/B Marketing En Streamlit",
            "subtitu1": "Análisis Riguroso de la Influencia Publicitaria en Decisiones de Compra: Datos, Pruebas Estadísticas y Resultados.",
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
                  <p>Este proyecto tuvo como finalidad desarrollar una aplicación en Streamlit que
                    permita identificar si una campaña publicitaria puede ser exitosa, y en que medida
                    ese éxito se puede atribuir a los avisos recibidos por los clientes. <br><br>
    
                    
                    La base de datos empleada (Fuente : 
                    <a href="https://www.kaggle.com/datasets/faviovaz/marketing-ab-testing?resource=download" target="_blank">Kaggle - Marketing A/B Testing</a>) proviene de un experimento donde los participantes se dividieron 
                    en dos grupos:
                    <ol>
                      <li>Aquellos expuestos a anuncios (Grupo AD). </li>
                      <li>Aquellos que solo recibieron anuncios públicos (PSA) o ninguno. A estos últimos los llamamos grupo de control.</li>
                    </ol> 
                     <br>
    
                    La elección de realizar una prueba de hipótesis Z de proporciones se basa en la 
                    necesidad de comparar la proporción de personas que realizaron compras en ambos grupos.
                     Es esencial determinar si la campaña publicitaria genera efectos significativos en la 
                     conversión de clientes.
    
                     </p>
                </div>
              </div>
            </div>
          <div class="divider"></div>
            <div class="section">
              <h5 class="header">Análisis Exploratorio Y Limpieza de Datos:</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                 <p>Antes de crear el modelo test A/B y desplegarlo en Streamlit, se llevó a cabo un análisis preliminar y 
                  limpieza de la tabla usando Jupyter Notebook.</p>
                  <p> Durante el análisis exploratorio, se realizaron tareas como la revisión de registros, 
                    la detección de tipos de datos, evaluación de estadísticas principales y la identificación
                    de valores nulos. No se detectaron valores nulos en este proceso.</p> 
                  <p> A continuación mostramos la información principal del Data Frame: </p>
                </div>
                <div class="col s12 m6 offset-m3 l6 offset-l3">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-3-tit.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Además se realizaron distintos agrupamientos por campo para conocer, de forma preliminar,
                    la proporción de clientes que recibieron anuncios respecto a los que no recibieron,
                    los porcentajes de conversión (compra) de los clientes, y la combinacion de ambas relaciones.
                  </p>
                  <p>
                    A continuación se muestra un gráfico de torta con una de las relaciones 
                    antes mencionadas:<br>
                  </p>
                </div>
                <div class="col s12 m6 offset-m1 l4 offset-l2">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-7-tit.png">
                </div>
                <div class="col s12 m5 l6">
                  <i><span><b>Ad:</b> Clientes que recibieron aviso. <br> <b>Psa:</b> Clientes con avisos públicos o sin avisos.</span></i>
                </div>
                <div class="col s12 m12 l12">
                  <p>Para crear el gráfico se uso la librería <b>Matplotlib.</b>
                  </p>
                  <p>La limpieza de la tabla incluyó principalmente el renombramiento de algunas columnas 
                    para mejorar la legibilidad y la eliminación de la columna <i>unnamed:_0</i>, que coincidía
                     con los índices del Data Frame, es decir, estaba duplicada. </p>
                    <p>Estas acciones se llevaron a cabo utilizando la librería Pandas y las propiedades del 
                      objeto DataFrame. A conntinuación se muestran algunos registros de la tabla luego de su limpieza:
                    </p>
                </div>
                <div class="col s12 m10 offset-m1 l10 offset-l1">
                  <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-4-tit.png">
                </div>
                <div class="col s12 m12 l12">
                  <p>Durante esta etapa se buscó asegurar que los datos estén en condiciones de 
                    ser utilizados en la prueba de hipótesis. También se buscaron conclusiones 
                    iniciales o preliminares que permitieron desarrollar el modelo A/B que se explicará a continuación.</p>
                </div>
              </div>  
            </div>
            <div class="section">
              <h5 class="header">Análisis A/B (Modelo de Prueba de Hipótesis)</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>Para llevar a cabo el análisis A/B, dentro del notebook antes utilizado, se siguieron los siguientes pasos:</p>
                  <p><b>1-Definición de Hipótesis:</b><br><br>H0: No existen diferencias de conversión entre realizar o 
                    no realizar campañas publicitarias.<br> H1: Existen diferencias de conversión al realizar 
                    campañas o no.</p>
                  <p><b>2-Definición del Nivel de Confianza:</b><br><br>Durante el desarrollo del modelo, se 
                    definió un nivel de confianza del 95%, lo que implica un alpha del 5%. En la aplicación
                     desplegada en Streamlit, se agregó la opción de cambiar este valor.</p>
                  <p><b>3-Cálculos, Estadístico de Contraste y P-Valor:</b><br><br>Para este paso, se utilizó 
                    el módulo proportions_ztest de Statsmodel para obtener el p-valor. Comparar este valor 
                    con el alpha determina si se acepta o rechaza la hipótesis nula. Se detalla el código:<br><br>
                  </p>
                </div>
                 <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-5-tit.png">
                 </div>
              </div> 
              <i>Al final de esta página se dejará el link al repositorio de Github del proyecto donde se encuentra el Jupyter Notebook completo.</i> 
            </div>  
            <div class="section">
              <h5 class="header">Despliegue En Streamlit</h5>
              <div class="row">
                <div class="col s12 m12 l12">
                  <p>Finalmente, el proyecto se desplegó en Streamlit, permitiendo a cualquier persona 
                    detectar los resultados de la prueba al ajustar los niveles de confianza y el tamaño 
                    de la muestra. Un slider permite variar el tamaño de la población, mientras que un 
                    checkbox de tres posiciones ajusta el nivel de confianza a valores del 99%, 95% y 90%</p>
                  <p>La prueba de hipótesis se lleva a cabo considerando estos parámetros ajustables. 
                    La aplicación no solo informa sobre la superación de la prueba, confirmando la 
                    presencia de efectos positivos de la campaña, sino que también presenta visualmente 
                    los resultados. Gráficos de torta muestran la distribución de personas expuestas a la 
                    publicidad y tasas de conversión correspondientes.</p>
                  <p>La aplicación también ofrece una interpretación detallada del resultado, proporcionando
                    una conclusión clara sobre si se rechaza o no la hipótesis nula. Este enfoque holístico 
                    brinda a los usuarios una comprensión profunda de la efectividad de las campañas 
                    publicitarias mediante datos experimentales y análisis estadístico riguroso.<br><br>
                  A continuación se muestra la visualización inicial de la aplicación:</p>
                </div>
                 <div class="col s12 m10 offset-m1 l10 offset-l1">
                   <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-6-tit.png">
                 </div>
              </div>  
            </div>     
            <div class="divider"></div>
            <div class="section">
              <h5 class="header">Conclusión del Proyecto</h5>
              <div class="row">
                <div class="col s12 m10 offset-m1 l12">
                  <p>En resumen, este proyecto ha examinado de manera exhaustiva la influencia de la 
                    campaña publicitaria en la decision de compra de los clientes. Desde la limpieza
                     y análisis inicial de datos hasta la aplicación de pruebas A/B mediante una prueba de
                      hipótesis Z de proporciones, el estudio buscó determinar la efectividad de la 
                      campaña.</p>
                               
                   <p>La implementación en Streamlit ofreció una experiencia interactiva, permitiendo a 
                    cualquier usuario explorar los resultados ajustando parámetros clave. La presentación 
                    visual mediante gráficos de torta complementó la información numérica, brindando una 
                    comprensión completa de la distribución y tasas de conversión entre los grupos.</p>
                    
                    <p>Además de confirmar el éxito de la campaña, la aplicación proporciona una 
                      interpretación detallada, ofreciendo a los usuarios una visión profunda respaldada 
                      por datos experimentales y análisis estadístico riguroso. En última instancia, este 
                      proyecto no solo responde a la pregunta inicial, sino que también establece un 
                      sólido marco para futuros análisis y decisiones basadas en datos.</p>
                    
                </div>
              </div>
              <div class="divider"></div><br>
              <div class="row">
                <div class="col s12 m10 offset-m1 l12">
                <i>A continuación se dejan los accesos al repositorio de Github y a la aplicación 
                  desplegada en Streamlit:</i><br><br><br>
                  <div class="row" style="display: flex; gap: 10px; justify-content: center;">
                    <a class="waves-effect waves-light grey darken-4 btn-large center btn tooltipped" data-position="bottom" id="btn-github-Large" data-tooltip="Ver repositorio de Github." href="https://github.com/martinbat89/Proyecto-AB-Con-Streamlit" target="_blank">
                      <svg id="btnContBoostrp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      <span style="margin-left: 1rem;">Github</span></a>
                      <a target="_blank" href="https://proyecto-ab-con-app.streamlit.app/" class="waves-effect waves-light red darken-1 btn-large tooltipped" data-position="bottom" data-tooltip="Ver app en Streamlit."><i class="material-icons left">ads_click</i>Streamlit</a>
                  </div>  
                  </div>
              </div>
            </div> 
            <div class="divider"></div>
            
            <a class="waves-effect waves-teal btn-flat right" href="/index.html"><b>Volver al Home</b></a>
          </div>
          <div class="col s12 m10 offset-m1 l10 offset-l1">
    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-6-tit.png">
</div>
</div>  
</div>     
<div class="divider"></div>
<div class="section">
    <h5 class="header">Project Conclusion</h5>
    <div class="row">
        <div class="col s12 m10 offset-m1 l12">
            <p>In summary, this project has thoroughly examined the influence of the advertising campaign on customers' purchase decisions. From the initial data cleaning and analysis to the implementation of A/B tests using a Z-test of proportions, the study sought to determine the effectiveness of the campaign.</p>
                               
            <p>The implementation in Streamlit offered an interactive experience, allowing any user to explore the results by adjusting key parameters. Visual presentation through pie charts complemented numerical information, providing a complete understanding of the distribution and conversion rates between groups.</p>
                    
            <p>In addition to confirming the success of the campaign, the application provides a detailed interpretation, offering users a deep insight backed by experimental data and rigorous statistical analysis. Ultimately, this project not only answers the initial question but also establishes a solid framework for future data-driven analyses and decisions.</p>
        </div>
    </div>
    <div class="divider"></div><br>
    <div class="row">
        <div class="col s12 m10 offset-m1 l12">
            <i>Below are the links to the Github repository and the application deployed on Streamlit:</i><br><br><br>
            <div class="row" style="display: flex; gap: 10px; justify-content: center;">
                <a class="waves-effect waves-light grey darken-4 btn-large center btn tooltipped" data-position="bottom" id="btn-github-Large" data-tooltip="View Github repository" href="https://github.com/martinbat89/Proyecto-AB-Con-Streamlit" target="_blank">
                    <svg id="btnContBoostrp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span style="margin-left: 1rem;">Github</span></a>
                    <a target="_blank" href="https://proyecto-ab-con-app.streamlit.app/" class="waves-effect waves-light red darken-1 btn-large tooltipped" data-position="bottom" data-tooltip="View app on Streamlit."><i class="material-icons left">ads_click</i>Streamlit</a>
                </div>  
            </div>
        </div> 
    </div>
    <div class="divider"></div>
    
    <a class="waves-effect waves-teal btn-flat right" href="/index.html"><b>Back to Home</b></a>
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
            "titu1": "A/B Test Marketing In Streamlit",
            'subtitu1': "Comprehensive Analysis of the Influence of Advertising on Purchasing Decisions: Data, Statistical Tests and Conclusions.",
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
                        <p>
                        This project had the goal of creating a Streamlit application to assess the effectiveness of an advertising campaign and determine how much of that success can be attributed to customer-exposed ads. <br><br>
        
                        The database used (Source: <a href="https://www.kaggle.com/datasets/faviovaz/marketing-ab-testing?resource=download" target="_blank">Kaggle - Marketing A/B Testing</a>) comes from an experiment where participants were divided into two groups:
                        <ol>
                            <li>Those exposed to ads (AD Group).</li>
                            <li>Those who only received public service ads (PSA) or none. These are referred to as the control group.</li>
                        </ol>
                        <br>
        
                        The choice to perform a Z-test is based on the need to compare the proportion of people who made purchases in both groups. It is essential to determine if the advertising campaign generates significant effects on customer conversion.</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5 class="header">Exploratory Data Analysis and Data Cleaning:</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>Before creating the A/B test model and deploying it in Streamlit, a preliminary analysis and table cleaning were performed using Jupyter Notebook.</p>
                        <p>During exploratory analysis, tasks such as record review, data type detection, main statistics evaluation, and identification of null values were performed. No null values were detected in this process.</p>
                        <p>Below is the main information from the Data Frame:</p>
                    </div>
                    <div class="col s12 m6 offset-m3 l6 offset-l3">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-3-tit.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>Various groupings were also performed by field to preliminarily understand the proportion of customers who received ads versus those who did not, the conversion percentages (purchase) of customers, and the combination of both relationships.</p>
                        <p>Below is a pie chart graph with one of the aforementioned relationships:<br></p>
                    </div>
                    <div class="col s12 m6 offset-m1 l4 offset-l2">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-7-tit.png">
                    </div>
                    <div class="col s12 m5 l6">
                        <i><span><b>Ad:</b> Customers who received an ad. <br> <b>Psa:</b> Customers with public service ads or without ads.</span></i>
                    </div>
                    <div class="col s12 m12 l12">
                        <p>The <b>Matplotlib</b> library was used to create the chart.</p>
                        <p>Table cleaning mainly involved renaming some columns to improve readability and removing the "unnamed:_0" column, which coincided with the DataFrame indices, meaning it was duplicated.</p>
                        <p>These actions were carried out using the Pandas library and DataFrame object properties. The following shows some records from the table after cleaning:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-4-tit.png">
                    </div>
                    <div class="col s12 m12 l12">
                        <p>During this stage, the goal was to ensure that the data was suitable for the hypothesis test. Initial or preliminary conclusions were also sought to develop the A/B model explained below.</p>
                    </div>
                </div>
            </div>
            <div class="section">
                <h5 class="header">A/B Analysis (Hypothesis Test Model)</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>To carry out the A/B analysis, the following steps were followed within the previously used notebook:</p>
                        <p><b>1-Definition of Hypotheses:</b><br><br>H0: There are no differences in conversion between carrying out advertising campaigns or not. <br> H1: There are differences in conversion when conducting campaigns or not.</p>
                        <p><b>2-Definition of Confidence Level:</b><br><br>During the development of the model, a confidence level of 95% was defined, implying an alpha of 5%. In the application deployed in Streamlit, the option to change this value was added.</p>
                        <p><b>3-Calculations, Contrast Statistic, and P-Value:</b><br><br>For this step, the proportions_ztest module from Statsmodel was used to obtain the p-value. Comparing this value with alpha determines whether to accept or reject the null hypothesis. The code is detailed below:<br><br></p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                        <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-5-tit.png">
                    </div>
                </div>
                <i>At the bottom of this page, the link to the project's Github repository containing the complete Jupyter Notebook will be provided.</i>
            </div>
            <div class="section">
                <h5 class="header">Deployment on Streamlit</h5>
                <div class="row">
                    <div class="col s12 m12 l12">
                        <p>Finally, the project was deployed on Streamlit, allowing anyone to detect test results by adjusting confidence levels and sample size. A slider allows varying the population size, while a three-position checkbox adjusts the confidence level to values of 99%, 95%, and 90%.</p>
                        <p>The hypothesis test is carried out considering these adjustable parameters. The application not only reports on passing the test, confirming the presence of positive effects from the campaign, but also visually presents the results. Pie charts show the distribution of people exposed to advertising and corresponding conversion rates.</p>
                        <p>The application also offers a detailed interpretation of the result, providing a clear conclusion on whether to reject the null hypothesis. This holistic approach gives users a deep understanding of the effectiveness of advertising campaigns based on experimental data and rigorous statistical analysis.<br><br>
                            Below is the initial visualization of the application:</p>
                    </div>
                    <div class="col s12 m10 offset-m1 l10 offset-l1">
                    <img class="responsive-img materialboxed" src="/public/assets/img/portafolio-img/prueba-ab-strmlit/img-6-tit.png">
                </div>
                </div>  
                </div>     
                <div class="divider"></div>
                <div class="section">
                    <h5 class="header">Conclusion of the project</h5>
                    <div class="row">
                        <div class="col s12 m10 offset-m1 l12">
                            <p>In summary, this project has examined in depth the influence of the advertising campaign on customer's purchase decisions. From the initial data cleaning and analysis, to the implementation of A/B tests using a Z-test of proportions, the study sought to determine the effectiveness of the campaign.</p>
                                               
                            <p>The implementation in Streamlit offered an interactive experience, allowing any user to explore the results by adjusting key parameters. Visual presentation through pie charts complemented numerical information, providing a complete understanding of the distribution and conversion rates between groups.</p>
                                    
                            <p>In addition to confirming the success of the campaign, the application provides a detailed interpretation, offering users a deep insight backed by experimental data and rigorous statistical analysis. Ultimately, this project not only answers the initial question, but also establishes a solid framework for future data-driven analysis and decisions.</p>
                        </div>
                    </div>
                    <div class="divider"></div><br>
                    <div class="row">
                        <div class="col s12 m10 offset-m1 l12">
                            <i>Below are the links to the Github repository and the application deployed on Streamlit:</i><br><br><br>
                            <div class="row" style="display: flex; gap: 10px; justify-content: center;">
                                <a class="waves-effect waves-light grey darken-4 btn-large center btn tooltipped" data-position="bottom" id="btn-github-Large" data-tooltip="View Github repository" href="https://github.com/martinbat89/Proyecto-AB-Con-Streamlit" target="_blank">
                                    <svg id="btnContBoostrp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                    <span style="margin-left: 1rem;">Github</span></a>
                                    <a target="_blank" href="https://proyecto-ab-con-app.streamlit.app/" class="waves-effect waves-light red darken-1 btn-large tooltipped" data-position="bottom" data-tooltip="View app on Streamlit."><i class="material-icons left">ads_click</i>Streamlit</a>
                                </div>  
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
        document.getElementById('herram-p1').innerHTML = `<b>${t('herram')}</b>  Jupyter Notebook - VS Code - Python - Streamlit - Pandas - Numpy - Matplotlib - Statsmodels.` ;
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