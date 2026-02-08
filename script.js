/**
 * Carta Interactiva de San Valentín
 * Script principal para manejar la interacción del sobre y la carta
 */

// Referencias a elementos del DOM
const elements = {
    envelope: document.getElementById('envelope'),
    flap: document.getElementById('flap'),
    letter: document.getElementById('letter'),
    openBtn: document.getElementById('openBtn'),
    resetBtn: document.getElementById('resetBtn'),
    floatingHearts: document.getElementById('floatingHearts'),
    lockHeart: document.getElementById('lockHeart'),
    letterText: document.getElementById('letterText')
};

// Estado de la aplicación
let isOpen = false;

/**
 * Carga el mensaje desde el archivo mensaje.txt
 */
async function loadMessage() {
    try {
        const response = await fetch('mensaje.txt');
        if (!response.ok) throw new Error('No se pudo cargar el mensaje');
        const text = await response.text();
        const paragraphs = text.split('\n\n').filter(p => p.trim() !== '');
        if (elements.letterText) {
            elements.letterText.innerHTML = paragraphs
                .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
                .join('');
        }
    } catch (error) {
        console.error('Error al cargar el mensaje:', error);
        if (elements.letterText) {
            elements.letterText.innerHTML = `
                <p>Feliz san Valentín a la distancia Mi Amorcitooou!! a miles de kilómetros y a mi me sigue encantando la misma sonrisa, la tuya ❤️</p>
                <p>Amor sé que es difícil la distancia y me es difícil hacer una carta pero esta vez quería intentar algo un poco especial para mi amorcito ❤️ no quería mandarte un simple mensaje de Wpp como venimos haciendo, eso no me gusta mucho, es muy simple y lo hace cualquiera, yo no quiero ser así común como el resto. Sé que este 14 de febrero el espacio físico nos juega en contra, pero si algo vengo aprendiendo en estos 2 años a distancia es que mi mente siempre estas vos. ❤️</p>
                <p>A veces me quedo pensando en cómo vienen pasando casi seis años de relación. Los de afuera lo ven fácil, pero nosotros sabemos lo que venimos crecido, cambiado y como venimos sobrevivido a la rutina y a los kilómetros que nos separan. Y aunque a veces sintamos que el camino se vuelve pesado o aburrido, quiero que sepas algo: sigo siendo el fan número uno de esa sonrisa preciosa que tenes, de esos ojos que me enternecen...</p>
                <p>La verdad es que podría llenar líneas infinitas hablando solo de los detalles que me tienen loco por vos. Tu risa sigue siendo mi sonido favorito en el mundo, tiene esa capacidad de resetear mi día sin que te des cuenta yo por dentro feliz de escucharte feliz. Tu sonrisa, tus ojos... me pierdo en ellos incluso por videollamada.❤️‍🔥</p>
                <p>Gracias por ser mi compañera, gracias por estar conmigo en los días fáciles como en los dificiles. En un mes y piquito cumplimos 6 años!!! ❤️❤️❤️❤️ vamos a seguir dispuestos a seguir descubriéndonos e intentando sacarnos de cualquier rutina que nos deprima, porque una vida con vos nunca podría ser aburrida si me permitís seguir viendo esa sonrisa preciosa tuya de cerca. ❤️❤️❤️</p>
            `;
        }
    }
}

/**
 * Carga los nombres desde el archivo nombres.txt
 */
async function loadNames() {
    try {
        const response = await fetch('nombres.txt');
        const text = await response.text();
        const lines = text.split('\n');
        
        lines.forEach(line => {
            if (line.startsWith('De:')) {
                const name = line.replace('De:', '').trim();
                document.getElementById('fromName').textContent = name;
            } else if (line.startsWith('Para:')) {
                const name = line.replace('Para:', '').trim();
                document.getElementById('toName').textContent = name;
            }
        });
    } catch (error) {
        console.error('Error al cargar los nombres:', error);
    }
}

// Cargar el mensaje y nombres al iniciar
loadMessage();
loadNames();

/**
 * Crea corazones flotantes animados cuando se abre la carta
 */
function createFloatingHearts() {
    const numHearts = 60;
    elements.floatingHearts.innerHTML = '';
    
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        
        // Distribución más amplia de corazones
        const startX = 30 + (Math.random() * 40); // 30% a 70% del ancho
        const randomX = (Math.random() - 0.5) * 300; // Movimiento horizontal más amplio
        heart.style.left = `${startX}%`;
        heart.style.top = `${40 + (Math.random() * 20)}%`; // Distribución vertical también
        heart.style.setProperty('--random-x', `${randomX}px`);
        heart.style.animationDelay = `${i * 0.05}s`; // Delay más corto para más corazones simultáneos
        
        // Variación en el tamaño de los corazones
        const size = 20 + Math.random() * 15; // Entre 20px y 35px
        heart.style.fontSize = `${size}px`;
        
        elements.floatingHearts.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000 + (i * 50));
    }
}

/**
 * Abre el sobre y revela la carta
 */
function openEnvelope() {
    if (isOpen) return;
    
    isOpen = true;
    elements.flap.classList.add('open');
    
    setTimeout(() => createFloatingHearts(), 200);
    setTimeout(() => elements.letter.classList.add('revealed'), 300);
    
    elements.openBtn.classList.add('inactive');
    elements.openBtn.disabled = true;
    elements.resetBtn.disabled = false;
}

/**
 * Cierra el sobre y oculta la carta
 */
function resetEnvelope() {
    if (!isOpen) return;
    
    isOpen = false;
    elements.floatingHearts.innerHTML = '';
    elements.letter.classList.remove('revealed');
    
    setTimeout(() => elements.flap.classList.remove('open'), 300);
    
    elements.openBtn.classList.remove('inactive');
    elements.openBtn.disabled = false;
    elements.resetBtn.disabled = true;
}

// Inicialización
function init() {
    loadMessage();
    loadNames();
    
    if (elements.openBtn) {
        elements.openBtn.addEventListener('click', openEnvelope);
    }
    if (elements.resetBtn) {
        elements.resetBtn.addEventListener('click', resetEnvelope);
        elements.resetBtn.disabled = true;
    }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
