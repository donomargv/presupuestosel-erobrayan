'use client'; // Asegúrate de que este es un componente de cliente

import { useEffect, useState } from 'react';
import styles from './globals.css'; // Asegúrate de que el archivo CSS esté disponible

export default function Home() {
  const [date, setDate] = useState(new Date()); // Inicializa el estado de la fecha

  // useEffect se ejecuta en el cliente después del primer render
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date()); // Actualiza la fecha cada segundo
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
  }, []);

  // Aquí están todos tus proyectos
  const projects = [
    {
      title: "Simulador ensamble y desensamble PC	",
      image: "https://2.bp.blogspot.com/-giNxJvvA-jA/Ud2ImmVnCeI/AAAAAAAAAF0/pbROJhnMdCw/s1600/Simulador+Cisco+Para+Aprender+paso+a+paso+a+armar+computadoras.jpg",
      link: "https://www.youtube.com/watch?v=FXEOR7SAnGE"
    },
    {
      title: "Wix	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6QkdVTnxIkA14A9ZOK8KCZk0zBIED6w3AXA&s",
      link: "https://jhonatanguevara24.wixsite.com/koat"
    },
    {
      title: "Mecanografía certificada	",
      image: "https://www.artypist.com/static/images/certificates/sample-tutor-es.jpg",
      link: "https://www.youtube.com/watch?v=omvh99khNuQ"
    },
    {
      title: "ACTIVIDAD BLOGGER	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBc_SxxI07zww41doME90T14icfgayeVPWg&s",
      link: "https://animechipolo.blogspot.com/"
    },
    {
      title: "Salud digital certificado	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qixdW-nbfdbNonyrygFiA-wODuzd3EyIAw&s",
      link: "https://www.youtube.com/watch?v=zcyxAtTHG9g"
    },
    {
      title: "Crear pagina para una empresa en wix	",
      image: "https://i.ytimg.com/vi/U0ey32JN4Ns/maxresdefault.jpg",
      link: "https://jhonatanguevara24.wixsite.com/jhonnysg-1"
    },
    {
      title: "blogger THEME premium	",
      image: "https://probloggertemplates.com/wp-content/uploads/2022/05/casper-blogger-template-460x395.webp",
      link: "https://chipoloventa.blogspot.com/"
    },
    {
      title: "10/04/2024 formatear	",
      image: "https://i.ytimg.com/vi/INxq3IlHKAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABTVjEBadx6BmZBqn4h15wxyvFeQ",
      link: "https://www.youtube.com/watch?v=L0BtkTlTpZY"
    },
    {
      title: "15/05 juego en dfd y scratch	",
      image: "https://i.ytimg.com/vi/6X0dWR_d664/maxresdefault.jpg",
      link: "https://e.plataformaintegra.net/cavirey/arc/ptareas/dfd.pdf"
    },
    {
      title: "22/05 juego educativo	",
      image: "https://i.ytimg.com/vi/cxpRHIqv2OM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCG-YWfN0f1Fh4oOlreNlSBknRYww",
      link: "https://scratch.mit.edu/projects/1020701562"
    },
    {
      title: "10/07 hoja de vida en html y css, de trabajo en clase	",
      image: "https://i.ytimg.com/vi/hITn_I62B6s/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGGQgZChkMA8=&rs=AOn4CLBg4-0M7LsgyNBoK5L67njPv1Ajjw",
      link: "https://e.plataformaintegra.net/cavirey/arc/ptareas/hoja_de_vida_html_y_css.pdf"
    },
    {
      title: "10/04 Introducción a WordPress	",
      image: "https://e.plataformaintegra.net/cavirey/arc/ptareas/WhatsApp_Image_2024-04-09_at_9.08_.00_PM_.jpeg",
      link: "https://jhonny882.wordpress.com/"
    },
    {
      title: "15/05/2024 quiz lógica de programación	",
      image: "https://i.ytimg.com/vi/vRtjfFkXDNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAHdAc6jT5XYg7RUtCogTsjiJODQ",
      link: "https://quizizz.com/join?gc=96775499"
    },
    {
      title: "10/07 quiz hml y css	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oLusexGNviBThav-KWc-P0HNx4H8Wcu7og&s",
      link: "https://quizizz.com/join?gc=771237&source=liveDashboard"
    },
    {
      title: "17/04 Investigar plugins y themes para diferentes tipos de webs en wordpress.org	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJ5jHl891XmZN4i9gDve-hjbWhB_rwpz4dw&s",
      link: " Investigar_sobre_cómo_crear_en_wordpress_tipos_de_webs.docx"
    },
    {
      title: "01/05 dfd	",
      image: "https://i.ytimg.com/vi/i-EYLd47SqY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGogaihqMA8=&rs=AOn4CLASZGWwYrtreHHDlxJG9-gdT_o8CQ",
      link: "https://e.plataformaintegra.net/cavirey/arc/ptareas/dfd.pdf"
    },
    {
      title: "29/05 mundo de la IA	",
      image: "https://caracol.com.co/resizer/v2/QEXOAU5BHZDDJPCX3D34YQNZKE.jpg?auth=c492944c41017b02268fd23f9f2cfc25039d882a38345c0e13d43a676a75f42b&width=650&height=488&quality=70&smart=true",
      link: "https://e.plataformaintegra.net/cavirey/arc/ptareas/%C2%A1Ad%C3%A9ntrate_en_el_mundo_de_la_IA_con_esta_emocionante_actividad%211.pdf"
    },
    {
      title: "05/06 VSCODE	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2sDkKzHgB-TWfpJ5pnnodoxCpFAKKv7lHQ&s",
      link: "https://e.plataformaintegra.net/cavirey/arc/ptareas/VSCODE1.pdf"
    },
    {
      title: "01/05 crear 5 webs en wordpress.org online para dar solución a diferentes necesidades	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP3ZGsyZZ0iNZsaeAU9Hy7LTL6Ot3hblQkw&s",
      link: "http://pennesdeburro.wuaze.com/"
    },
    {
      title: "08/07/2024 curso lógica de programación	",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCOtB08wYKUabiqrtuismEG0bgQYJx2IJ2Q&s",
      link: "https://e.plataformaintegra.net/cavirey/arc/ptareas/certificado7.pdf"
    },
    {
      title: "11/06 hoja de vida en hml y css	",
      image: "https://i.ytimg.com/vi/TtUpggAG7W4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDUgUyhyMA8=&rs=AOn4CLBL0Y6R254JHlsahQiMefKmlDwybQ",
      link: "https://github.com/jhnatansuarez1/hoja-de-vida-html-y-css"
    },
    {
      title: "31/07 5 paginas web con html y css	",
      image: "https://i.ytimg.com/vi/cjZTwVs_720/maxresdefault.jpg",
      link: "https://66bcd570e9da4ecef6a60395--cosmic-tanuki-694f7f.netlify.app/",
      link: "https://66bcd7e7b2c61fce360d05fb--creative-pothos-34cb4b.netlify.app/",
      link: "https://66bcd84294302cd48144f965--wonderful-brioche-b1c90e.netlify.app/",
      link: "https://66bcd872d98256e85058a031--superb-hamster-1bbaeb.netlify.app/",
      link: "https://66bcd88e8742a4cd75d6ae2a--magenta-cajeta-6efca7.netlify.app/"
    },
  ];


    // Código anterior...
  
    return (
      <div className={styles.mainContainer}>
        
        
        <p>Bienvenido a mi portafolio personal.</p>
        <div className={styles.portfolioContent}>
          <div className={styles.leftContainer}>
            <h1>JHONATAN DAVID SUAREZ GUEVARA</h1>
            <img
          src="https://e.plataformaintegra.net/cavirey/img/fotos/mat/3743_114_10.jpeg"
          alt="JHONATAN DAVID SUAREZ GUEVARA"
          className={styles['profile-image']}
          style={{ width: '100px', height: 'auto', borderRadius: '4px' }}
        />
            <h2>Portafolio 2024</h2>
            <p>
            Mi Viaje de Aprendizaje en 2024: Desarrollo Web, Electrónica y Mucho Más

El año 2024 marcó un período de aprendizaje y crecimiento en diversas disciplinas de tecnología y desarrollo, desde la creación de sitios web hasta la programación de hardware. Cada herramienta y tecnología que exploré me permitió desarrollar habilidades específicas, que no solo mejoraron mi capacidad técnica, sino que también ampliaron mi creatividad y comprensión del mundo digital y de la automatización. A continuación, un recorrido por lo que aprendí y cómo cada tecnología contribuyó a mi formación:

React: Construcción de Interfaces Escalables y Eficientes

React se convirtió en una piedra angular de mi aprendizaje en desarrollo frontend. Con esta biblioteca, descubre cómo los componentes pueden hacer que una aplicación sea modular, reutilizable y fácil de mantener. Aprendí a manejar estados y efectos con ganchos como useState y useEffect, lo cual me permitió optimizar la interacción y la actualización de datos en mis aplicaciones. A través de JSX, pude integrar lógica y presentación en un mismo espacio, creando interfaces dinámicas e interactivas que mejoraron la experiencia del usuario.

Arduino: Introducción a la Electrónica y Programación de Hardware

Mi incursión en Arduino me permitió explorar el lado tangible de la tecnología. La programación de microcontroladores y el ensamblaje de circuitos electrónicos me brindaron una comprensión práctica de cómo el hardware y el software trabajan juntos. Experimenté con componentes como sensores, LED y motores, desarrollando proyectos de automatización como el encendido y apagado de luces controlado por código y la creación de un pequeño robot. Arduino me enseñó el potencial de la programación para transformar el entorno físico y me abrió los ojos a nuevas posibilidades de creación en el campo de la electrónica.

Next.js: Ampliando los límites de React con Renderización en el Servidor

Con Next.js, llevé mis habilidades en React a otro nivel, aprendiendo cómo optimizar la carga y el rendimiento de mis aplicaciones mediante la renderización en el servidor y la generación estática. Comprendí la importancia de las rutas dinámicas y de la generación de contenido en tiempo real, lo cual me permitió hacer aplicaciones web más rápidas, escalables y accesibles. Esta experiencia profundizó mi comprensión de cómo crear proyectos de alto rendimiento que funcionan tanto en el lado del cliente como en el del servidor.

Scratch: Programación Visual para Explorar la Creatividad

Scratch fue una plataforma que me permitió explorar la programación de una forma visual y amigable. Aquí, me concentré en la lógica y la estructura de mis proyectos sin preocuparme por la sintaxis. Creamos juegos, historias interactivas y animaciones que despertaron mi creatividad y fortalecieron mi habilidad para resolver problemas. Scratch también me mostró que la programación puede ser accesible para cualquier persona y me inspiró a pensar en cómo enseñar los fundamentos de la lógica computacional.

Blogger y WordPress: Publicación de Contenidos y Gestión de Sitios Web

Al trabajar con Blogger y WordPress, descubre la importancia de la gestión de contenidos y la personalización de sitios web. Con Blogger, me adentré en la organización de contenidos y personalización de plantillas, mientras que WordPress me permitió profundizar en la creación de sitios más complejos a través de plugins y temas. A través de ambas plataformas, aprenderá sobre optimización para motores de búsqueda (SEO) y gestión de bases de datos, habilidades esenciales para crear sitios adaptados a las necesidades de los usuarios.

HTML y CSS: Construyendo y Estilizando la Web

HTML y CSS fueron fundamentales para asentar mis bases en el diseño web. Con HTML, aprenderá la importancia de una estructura semántica y accesible que facilita la lectura tanto para los usuarios como para los motores de búsqueda. CSS me abrió las puertas a la personalización y el diseño responsive, utilizando técnicas como flexbox y grid para crear interfaces adaptables y bien organizadas. Este conocimiento me permitió diseñar experiencias de usuario visualmente atractivas y funcionales.

JavaScript: Dominando el Lenguaje de Interacción Web

JavaScript fue el lenguaje que me dio las herramientas para añadir interactividad a mis aplicaciones. Con conceptos avanzados como asincronía, manejo de eventos y manipulación del DOM, logré crear aplicaciones más fluidas y dinámicas. También exploraré promesas, async/await y el modelo de eventos para optimizar el rendimiento y hacer aplicaciones más reactivas. Además, trabajé en buenas prácticas y técnicas para optimizar mi código y mejorar la eficiencia de mis proyectos.

Conclusión: Un Año de Desarrollo Integral

En conclusión, 2024 fue un año de formación intensa y variada en múltiples disciplinas. Desde interfaces interactivas hasta proyectos de electrónica, lograré construir una base de conocimientos sólidos que mejoraron mis habilidades y ampliaron mis horizontes en el mundo de la tecnología. Este año fue un período de descubrimiento y aplicación práctica, y me ha dejado con la motivación de seguir explorando el desarrollo, la programación y la electrónica en los años por venir.
            </p>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.projects}>
              {projects.map((project) => (
                <div className={styles.card} key={project.title}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '200px', height: 'auto', borderRadius: '4px' }}
                  />
                  <h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }