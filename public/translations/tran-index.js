  
// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma predeterminado
  resources: {
      es: {
          translation: {
            "titu1": "¡Gracias por visitar mi portafolio!",
            "titu2": "Análisis de Datos",
            "titu3": "Procesar, analizar y visualizar datos.",
            "titu4": "Inteligencia de Negocios",
            "titu5": "Decisiones inteligentes con los datos de tu negocio.",
            "titu6": "Procesos internos",
            "titu7": "Mejora tus procesos internos con el uso de las nuevas tecnologías.",
            "ttip-1": "Acerca de mi",
            "ttip-2": "Servicios",
            "ttip-3": "Certificados",
            "ttip-4": "Herramientas",
            "ttip-5": "Portafolio",
            "ttip-6": "Contacto",
            "ttip-7": "Subir",
            "yo-1": "Acerca De Mi",
            "yo-2": "<b>Hola, soy Martin! 🙌</b>",
            "yo-3": "Contador Público con nueve años de experiencia en el sector <b>retail</b> dentro de el ambito del control interno y procesamiento de pagos.",
            "yo-4": "En los últimos años me he centrado en el <b>análisis de datos</b> e <b>inteligencia de negocios</b>, adquiriendo dominio en una variedad de lenguajes y herramientas de programación. 👩‍💻📲",
            "yo-5": "Me gusta mucho aprender nuevas habilidades y ver cómo se pueden aplicar en la práctica, más aún si me ayudan a hacer mi trabajo más fácil y rápido. Aprende, prueba, comete errores y vuelve a aprender. Este es mi lema de todos los días.",
            "yo-6": "Me gusta estar al aire libre y pasar tiempo con mi familia y amigos. Me encanta viajar para desconectar. Si puedo elegir, prefiero el sol y la montaña. 🏔️⛺",
            "parax-1": "Análisis de datos: el corazón del emprendimiento moderno.",
            "miss-1": "Mis Servicios",
            "miss-2": "Limpieza de Datos",
            "miss-3": "Cuando tenemos datos provenientes de diversas fuentes, es necesario someterlos a un proceso de preparación antes de sacar conclusiones. Esta fase de limpieza de datos comprende una serie de tareas, como la normalización de formatos, la identificación y corrección de valores nulos o atípicos, entre otras.",
            "miss-4": "Exploración de Datos",
            "miss-5": "La etapa de exporación es un proceso fundamental, donde nos adentramos en los datos para descubrir patrones, tendencias y relaciones ocultas. Este proceso implica la utilización de herramientas y técnicas que nos permiten comprender mejor la información analizada.",
            "miss-6": "Visualización de Datos",
            "miss-7": "A través de gráficos, tablas y otros recursos visuales, transformamos la información en representaciones comprensibles. Esto no solo hace que los datos sean accesibles, sino que también facilita la comunicación de resultados y la comprensión de los usuarios finales. ",
            "miss-8": "Automatización de Procesos",
            "miss-9": "La automatización de procesos emplea tecnología para simplificar tareas repetitivas, acelerar operaciones y reducir errores. Cuando se integra con la gestión de flujo de datos, optimiza la eficiencia empresarial y la toma de decisiones informadas y oportunas.",
            "miss-10": "Pequeños ERP para Negocios",
            "miss-11": "Las pequeñas aplicaciones administrativas, son soluciones tecnológicas que simplifican la gestión empresarial. Estas herramientas automatizan procesos, mejoran la eficiencia y facilitan el control operativo.",
            "miss-12": "Asesoramiento de Negocios",
            "miss-13": "Con experiencia en retail, auditoría, control interno y análisis de datos, ofrezco asesoramiento en procesos de negocio. Mi enfoque como Contador impulsa la eficiencia financiera y la gestión de datos, contribuyendo a la optimización operativa en diversas áreas del negocio.",
            "parax-2": "Convertir los datos en oportunidades de negocio.",
            "porta-Tit": "Portafolio",
            "slid-porta": "Mostrar/Ocultar Proyectos",
            "porta-ver": "Ver Proyecto Completo",
            "porta-2": "Dashboard Gestión Cajas<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-Res": "Resumen del Proyecto<i class='material-icons right'>close</i>",
            "porta-3": "Descubre cómo un dashboard en HTML creado con papaparse y Chart.js permitió a una empresa de retail conocer el estado mensual de la gestión administrativa de cajas en diferentes locales.  <br> <br> Con Leaflet, se creó un mapa web que mostraba el progreso del trabajo y se utilizó una pequeña red neuronal para predecir la fecha de finalización.  <br> <br> Además, se incluyen gráficos de torta y doughnut para un análisis más detallado. <br> <br> ¡Entra para ver los detalles y visualizaciones!",
            "porta-4": "Con ayuda de Google Apps Scripts, se desarrolló un sistema automatizado para enviar facturas y comprobantes a los clientes.<br><br> Con esta herramienta, es posible cargar los datos de los nuevos clientes y escanear las facturas desde el celular para enviarlas automáticamente al correo electrónico previamente cargado. <br><br>Esto significa que no hay necesidad de preocuparse por el envío manual de facturas, lo que ahorra tiempo y reduce errores. <br> <br> Si te interesa este apartado, dale click para ver mas.",
            "porta-5": "Creación de un panel de control utilizando Power BI para una tienda de productos naturales.<br><br>Este panel muestra información importante sobre las ventas y el inventario para tomar decisiones informadas sobre la gestión de productos.",
            "porta-6": "En este proyecto se utilizó Google Apps Script para procesar y agrupar comentarios sobre la gestión de cuentas corrientes, eliminando los registros sin información relevante y generando totales por región y estado de cuentas corrientes. <br><br>Los datos procesados se visualizaron en un panel de control creado en Google Looker (Data Studio), lo que permitió una gestión eficiente y atractiva de los datos.",
            "porta-7": "Envío Automático de Comprobantes <i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-8": "Dashboard Power BI Tienda Granel<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-9": "Gestión En Cuentas Corrientes<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-10": "Prueba A/B Marketing En Streamlit<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-11": "A través de un conjunto de datos obtenidos de Kaggle, se realiza una prueba Z de proporciones, para evaluar la influencia de una campaña publicitaria en las conversiones de clientes de una empresa. <br><br> La aplicación, implementada en Streamlit, permite al usuario ajustar parámetros como el tamaño de la muestra y el nivel de confianza, visualizando resultados detallados y gráficos informativos.",
            "porta-12": "Macro Cierre Diario de Caja<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-13": "Se desarrolló una herramienta que permitó realizar el cierre y arqueo de caja diario de forma automatizada utilizando Microsoft Access. ¿Qué significa esto?<br><br>Que podes conocer el faltante o sobrante de tu caja en tiempo real, ahorrando tiempo y evitando errores humanos. <br><br> Además, al existír un registro de cada movimiento, fue posible preparar un reporte automátivo diario en PDF para la revisión de los clientes internos.",
             "parax-3": "Las decisiones basadas en datos impulsan el éxito empresarial.",
             "certif-tit": "Mis Certificados",
             "slid-cert": "Mostrar/Ocultar Certificados",
             "certif-ver": "Ver Certificado",
             "certif-1": "Introducción a la programación",
             "certif-2": "Introducción a Machine Learning",
             "certif-3": "Pandas",
             "certif-4": "Machine Learning Intermedio",
             "certif-5": "Visualización de datos",
             "certif-6": "Introducción a SQL",
             "certif-7": "First Certificate In English (Cambridge)",
             "certif-8": "Título Universitario",
             "certif-9": "Codo a Codo 4.0 - Big Data / Data Analytics",
             "tit-ver": "Ver Título",
             "parax-4": "Automatización: Acelerar tareas, reducir errores y potenciar la productividad.",
             "titConoc-1": "Conocimientos",
             "parax-5" : "Los pequeños ERP potencian negocios y simplifican la administración.",
             "contact-tit": "¡Trabajemos juntos!",
             "det-Contacto": "Tenés una idea o querés hacer una consulta, te dejo mis canales de contacto:",
             "tit-foot1": "¡Antes que nada...Gracias!",
             "tit-foot2": "Si llegaste hasta acá, es porque te tomaste el tiempo para ver mi portafolio. En estos tiempos tan acelerados, en los que nos cuesta parar un poco, solamente puedo decirte gracias por tu visita.",
             "links-Int": "Links de Interés",
             "cv-esp": "<i class='material-icons left'>file_download</i>Mi CV En Español",
             "cv-ing": "<i class='material-icons left'>file_download</i>Mi CV En Inglés",
             "pie-izq": "Portafolio de Martin Batarev<b><a class='grey-text text-lighten-4 right' href='#ppio_sli'>Volver al Principio</a></b>",
             "featureMenu":`  <h5>Navegación Rápida</h5>
             <p>Dale un toque al botón de menú y navegá fácilmente por mi portafolio.</p>`
             

            
        }
      },
      en: {
          translation: {
            "titu1": "¡Thanks for visiting my portfolio!",
            "titu2": "Data Analysis",
            "titu3": "Process, analyze and visualize data.",
            "titu4": "Business Intelligence",
            "titu5": "Smart decisions with your business data.",
            "titu6": "Internal Processes",
            "titu7": "Improve your internal processes with the use of new technologies.",
            "ttip-1": "About Me",
            "ttip-2": "Services",
            "ttip-3": "Certificates",
            "ttip-4": "Tools",
            "ttip-5": "Portfolio",
            "ttip-6": "Contact",
            "ttip-7": "Scroll Up",
            "yo-1": "About Me",
            "yo-2": "<b>Hi, I´m Martin! 🙌</b>",
            "yo-3": "Accountant with nine years of experience in the <b>retail</b> sector within the field of internal control and payment processing.",
            "yo-4": "In recent years I have focused on <b>data analysis</b> and <b>business intelligence</b>, becoming proficient in a variety of programming languages ​​and tools. 👩‍💻📲",
            "yo-5": "I really like learning new skills and discovering how they can be applied in practice, even more so if they help me do my job easier and faster. Learn, try, make mistakes and learn again. This is my everyday motto.",
            "yo-6": "I like being outdoors and spending time with my family and friends. I love traveling to disconnect. If I can choose, I prefer the sun and the mountains. 🏔️⛺",
            "parax-1": "Data analytics: the heart of modern entrepreneurship.",
            "miss-1": "My Services",
            "miss-2": "Data Cleaning",
            "miss-3": "When we have data from various sources, a preparation process is necessary before drawing conclusions. This data cleaning phase includes a series of tasks, such as format normalization, identification and correction of null or outlier values, among others.",
            "miss-4": "Data Exploration",
            "miss-5": "The exploration stage is a fundamental process, where we delve into the data to discover hidden patterns, trends and relationships. This process involves the use of tools and techniques that allow us to better understand the information analyzed.",
            "miss-6": "Data Visualization",
            "miss-7": "Through graphs, tables and other visual resources, we transform information into understandable representations. This makes the data accessible, but also makes it easier to communicate results and understand them to end users.",
            "miss-8": "Process automation",
            "miss-9": "Process automation uses technology to simplify repetitive tasks, speed up operations, and reduce errors. When it´s integrated with data flow management, it optimizes business efficiency and informed, timely decision making.",
            "miss-10": "Small ERP for Business",
            "miss-11": "Small administrative applications are technological solutions that simplify business management. These tools automate processes, improve efficiency and facilitate operational control.",
            "miss-12": "Business Consulting",
            "miss-13": "With experience in retail, auditing, internal control and data analysis, I offer advice on business processes. My approach as an Accountant drives financial efficiency and data management, contributing to operational optimization in various areas of the business.",
            "parax-2": "Turn data into business opportunities.",
            "porta-Tit": "Portfolio",
            "slid-porta": "Show/Hide Projects",
            "porta-ver": "Read Complete Project",
            "porta-2": "Admnistrative Dashboard <i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-Res": "Project Summary<i class='material-icons right'>close</i>",
            "porta-3": "Discover how an HTML dashboard created with PapaParse and Chart.js allowed a retail company to track the monthly status of cash management in different locations. <br> <br> With Leaflet, a web map was created to display the progress of the work, and a small neural network was used to predict the completion date. <br> <br> In addition, pie and doughnut charts are included for a more detailed analysis. <br> <br> ¡Enter to see the details and visualizations!",
            "porta-4": "With the help of Google Apps Script, an automated system was developed to send invoices and receipts to customers.<br><br>With this tool, it is possible to enter the data of new customers and scan invoices from a mobile device to send them automatically to the previously loaded email address.<br><br>This means there is no need to worry about manually sending invoices, saving time and reducing errors.<br><br>If you are interested in this section, click to learn more.",
            "porta-5": "Creating a dashboard using Power BI for a natural products store.<br><br>This dashboard displays important information about sales and inventory to make informed decisions about product management.",
            "porta-6": "In this project, Google Apps Script was used to process and group feedback on current customers account management, removing records without relevant information and generating totals by region and current account status. <br><br>The processed data was visualized on a dashboard created in Google Looker (Data Studio), enabling efficient and engaging data management.",
            "porta-7": "Automatic Invoice Sending <i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-8": "Dashboard Natural Store<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-9": "Customers Accounts Management<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-10": "A/B Test Marketing In Streamlit<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-11": "Through a dataset from Kaggle, a proportions Z-test is conducted to assess the impact of an advertising campaign on a company's customer conversions. <br><br> The application, deployed on Streamlit, enables users to adjust parameters such as sample size and confidence level, presenting detailed results and informative graphics.",
            "porta-12": "Macro for Daily Cash Closing<i class='material-icons right' id='flecha-porta'>arrow_upward</i>",
            "porta-13": "A tool was developed to automate the daily cash register closure and reconciliation using Microsoft Access. What does this mean?<br><br>It allows you to track your cash surplus or shortage in real-time, saving time and avoiding human errors.<br><br>Furthermore, with a record of each transaction, it was possible to generate a daily automated PDF report for internal client review.",
            "parax-3": "Data-based decisions drive business success.",
            "slid-cert": "Show/Hide Certificates",
            "certif-tit": "My Certificates",
            "certif-ver": "View Certificate",
            "certif-1": "Introduction to programming",
            "certif-2": "Introduction to Machine Learning",
            "certif-3": "Pandas",
            "certif-4": "Machine Learning Intermediate",
            "certif-5": "Data Visualization",
            "certif-6": "Introduction to SQL",
            "certif-7": "First Certificate In English (Cambridge)",
            "certif-8": "University degree",
            "certif-9": "Codo a Codo 4.0 - Big Data / Data Analytics",
            "tit-ver": "View degree",
            "parax-4": "Automation: Speeding up tasks, reducing errors, and enhancing productivity.",
            "titConoc-1": "Skills",
            "parax-5": "Small ERPs empower businesses and simplify management.",
            "contact-tit": "¡Let's work together!",
            "det-Contacto": "Do you have an idea or want to make a question? Here are my contact channels:",
            "tit-foot1": "¡First and foremost...Thanks!",
            "tit-foot2": "If you've made it this far, it's because you took the time to view my portfolio. In these fast-paced times, when it's hard for us to pause for a moment, all I can say is thank you for your visit.",
            "links-Int": "Links of Interest",
            "cv-esp": "<i class='material-icons left'>file_download</i>My Resume in Spanish",
            "cv-ing": "<i class='material-icons left'>file_download</i>My Resume in English",
            "pie-izq": "Martin Batarev's Portfolio<b><a class='grey-text text-lighten-4 right' href='#ppio_sli'>Start Again</a></b>",
            "featureMenu":`  <h5>Simple Navigation</h5>
             <p>Click on the menu button and easily explore my portfolio.</p>`
            

          }
      }
  }
});

// Función para cambiar el idioma
function changeLanguage(language) {
    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('Error al cambiar el idioma', err);
        // Traduce el contenido según el idioma seleccionado
        document.getElementById('tit-uno').textContent = t('titu1');
        document.getElementById('tit-dos').textContent = t('titu2');
        document.getElementById('tit-tres').textContent = t('titu3');
        document.getElementById('tit-cuatro').textContent = t('titu4');
        document.getElementById('tit-cinco').textContent = t('titu5');
        document.getElementById('tit-seis').textContent = t('titu6');
        document.getElementById('tit-siete').textContent = t('titu7');
        document.getElementById('ttp-1').setAttribute("data-tooltip", t('ttip-1'));
        document.getElementById('ttp-2').setAttribute("data-tooltip", t('ttip-2'));
        document.getElementById('ttp-3').setAttribute("data-tooltip", t('ttip-3'));
        document.getElementById('ttp-4').setAttribute("data-tooltip", t('ttip-4'));
        document.getElementById('ttp-5').setAttribute("data-tooltip", t('ttip-5'));
        document.getElementById('ttp-6').setAttribute("data-tooltip", t('ttip-6'));
        document.getElementById('ttp-7').setAttribute("data-tooltip", t('ttip-7'));
        document.getElementById('yo1').textContent = t('yo-1');
        document.getElementById('yo2').innerHTML = t('yo-2');
        document.getElementById('yo3').innerHTML = t('yo-3');
        document.getElementById('yo4').innerHTML = t('yo-4');
        document.getElementById('yo5').textContent = t('yo-5');
        document.getElementById('yo6').textContent = t('yo-6');
        document.getElementById('parax1').textContent = t('parax-1');
        document.getElementById('miss1').textContent = t('miss-1');
        document.getElementById('miss2').textContent = t('miss-2');
        document.getElementById('miss3').textContent = t('miss-3');
        document.getElementById('miss4').textContent = t('miss-4');
        document.getElementById('miss5').textContent = t('miss-5');
        document.getElementById('miss6').textContent = t('miss-6');
        document.getElementById('miss7').textContent = t('miss-7');
        document.getElementById('miss8').textContent = t('miss-8');
        document.getElementById('miss9').textContent = t('miss-9');
        document.getElementById('miss10').textContent = t('miss-10');
        document.getElementById('miss11').textContent = t('miss-11');
        document.getElementById('miss12').textContent = t('miss-12');
        document.getElementById('miss13').textContent = t('miss-13');
        document.getElementById('parax2').textContent = t('parax-2');
        document.getElementById('portaTit').textContent = t('porta-Tit');
        document.getElementById('labSlidPorta').innerHTML = t('slid-porta');
        var verProyArr = document.querySelectorAll('#portaVer')
        verProyArr.forEach(x =>{
            x.textContent = t('porta-ver');
        })
        document.getElementById('porta2').innerHTML = t('porta-2');
        var resProyArr = document.querySelectorAll('#portaRes')
        resProyArr.forEach(y =>{
            y.innerHTML = t('porta-Res');
            
        })
        document.getElementById('porta3').innerHTML = t('porta-3');
        document.getElementById('porta4').innerHTML = t('porta-4');
        document.getElementById('porta5').innerHTML = t('porta-5');
        document.getElementById('porta6').innerHTML = t('porta-6');
        document.getElementById('porta7').innerHTML = t('porta-7');
        document.getElementById('porta8').innerHTML = t('porta-8');
        document.getElementById('porta9').innerHTML = t('porta-9');
        document.getElementById('porta10').innerHTML = t('porta-10');
        document.getElementById('porta11').innerHTML = t('porta-11');
        document.getElementById('porta12').innerHTML = t('porta-12');
        document.getElementById('porta13').innerHTML = t('porta-13');

        document.getElementById('parax3').textContent = t('parax-3');
        
        document.getElementById('certif0').textContent = t('certif-tit');
        document.getElementById('labSlidCert').innerHTML = t('slid-cert');
        for(let ce = 1;ce < 9; ce++ ){
            let IdCert = 'certif' + ce;
            let tradCert = 'certif-' + ce
            document.getElementById(IdCert).innerHTML = t(tradCert);
        }
        var titCertifs = document.querySelectorAll('#titCertif')
        titCertifs.forEach(o =>{
            o.textContent = t('certif-ver');
        })
        
        document.getElementById('verTit').innerHTML = t('tit-ver');
        document.getElementById('parax4').textContent = t('parax-4');
        document.getElementById('titConoc').textContent = t('titConoc-1');
        document.getElementById('parax5').textContent = t('parax-5');
        document.getElementById('titContacto').textContent = t('contact-tit');
        document.getElementById('detalleCont').textContent = t('det-Contacto');
        document.getElementById('tit1Foot').textContent = t('tit-foot1');
        document.getElementById('tit2Foot').textContent = t('tit-foot2');
        document.getElementById('linkInte').textContent = t('links-Int');
        document.getElementById('resumeImg2').innerHTML = t('cv-esp');
        document.getElementById('resumeImg3').innerHTML = t('cv-ing');
        document.getElementById('pieIzq1').innerHTML = t('pie-izq');
        
        //feature discovery
        document.getElementById('contFeature').innerHTML = t('featureMenu');
        
        
    });
}

document.getElementById('ch-lang').addEventListener('click', ev => {

    //Aparece cargador
    document.getElementById('contenedorCargador').className = "contpreloader"

    if(ev.target.checked === true){
        changeLanguage('en');
        console.log(ev.target.checked)  
        M.AutoInit();
        activaButtOpt()

        //quitamos el preloader
        setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")

        //mostramos feature menu
        setTimeout(function(){
            
            var elemsFeat = document.querySelectorAll('.tap-target');
            var instances = M.TapTarget.init(elemsFeat, {});
            var feat = document.querySelector('.tap-target')
            var elemFeat = M.TapTarget.getInstance(feat);
            elemFeat.open()
        
        }, "1500") //después de 1,5 seg se muestra
        
    }else if(ev.target.checked === false){
        changeLanguage('es');
        console.log(ev.target.checked)
        M.AutoInit();
        activaButtOpt()
        
        //quitamos el preloader
        setTimeout(function(){document.getElementById('contenedorCargador').className = "hide"}, "1000")

        //mostramos feature menu
        setTimeout(function(){
            
            var elemsFeat = document.querySelectorAll('.tap-target');
            var instances = M.TapTarget.init(elemsFeat, {});
            var feat = document.querySelector('.tap-target')
            var elemFeat = M.TapTarget.getInstance(feat);
            elemFeat.open()
        
        }, "1500") //después de 1,5 seg se muestra
        
    }
})

function activaButtOpt(){

     //inicializamos action button
     var elaccBut = document.querySelectorAll('.fixed-action-btn');
     var instaccBut = M.FloatingActionButton.init(elaccBut, {
         hoverEnabled: false
     });
}