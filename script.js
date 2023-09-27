// Función para agregar animación de desvanecimiento al hacer clic en elementos de lista
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Desvanecer las secciones
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.display = 'none';
        });

        // Mostrar la sección objetivo con una animación de desvanecimiento
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.style.opacity = '1';
        }, 100);
    });
});

// Función para agregar desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Función para cambiar entre temas claro y oscuro
const themeButton = document.getElementById('theme-button');
let isDarkTheme = true; // Inicialmente, la página tiene un tema oscuro

themeButton.addEventListener('click', function () {
    if (isDarkTheme) {
        document.body.style.backgroundColor = '#fff'; // Cambiar a fondo claro
        document.body.style.color = '#222'; // Cambiar texto a color oscuro
        themeButton.style.backgroundColor = '#222'; // Cambiar el botón a fondo oscuro
        themeButton.style.color = '#fff'; // Cambiar el color del texto del botón a claro
    } else {
        document.body.style.backgroundColor = '#222'; // Cambiar a fondo oscuro
        document.body.style.color = '#fff'; // Cambiar texto a color claro
        themeButton.style.backgroundColor = '#fff'; // Cambiar el botón a fondo claro
        themeButton.style.color = '#222'; // Cambiar el color del texto del botón a oscuro
    }
    isDarkTheme = !isDarkTheme; // Cambiar el estado del tema
});
