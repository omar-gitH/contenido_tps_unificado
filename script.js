/**
 * Análisis Numérico - Grupo 11
 * Interacciones de la interfaz de inicio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos de la Card 4 (Pendiente) y Toast
  const pendingTrigger = document.getElementById('pending-trigger');
  const toastNotification = document.getElementById('toast-notification');
  const toastCloseBtn = document.getElementById('toast-close-btn');
  let toastTimeout = null;

  /**
   * Muestra la notificación toast interactiva
   */
  const showToast = () => {
    if (!toastNotification) return;

    // Si ya había un timer activo, lo cancelamos
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastNotification.classList.add('show');

    // Feedback háptico ligero si el dispositivo lo soporta
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(40);
      } catch (e) {
        // Ignorar si el navegador restringe vibración
      }
    }

    // Auto-cierre luego de 4.5 segundos
    toastTimeout = setTimeout(() => {
      hideToast();
    }, 4500);
  };

  /**
   * Oculta la notificación toast
   */
  const hideToast = () => {
    if (!toastNotification) return;
    toastNotification.classList.remove('show');
    if (toastTimeout) {
      clearTimeout(toastTimeout);
      toastTimeout = null;
    }
  };

  // Evento al hacer clic en la Card 4 (Pendiente)
  if (pendingTrigger) {
    pendingTrigger.addEventListener('click', (event) => {
      // Redirecciona con # internamente según el requerimiento
      showToast();
    });
  }

  // Evento de cierre manual del toast
  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      hideToast();
    });
  }

  // Efecto dinámico de iluminación (Glow Spotlight) en tarjetas al mover el mouse
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // -------------------------------------------------------------------------
  // MODO CLARO / MODO OSCURO (THEME TOGGLE)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  /**
   * Actualiza el estado visual y atributos ARIA del botón de alternancia
   * @param {string} theme - 'dark' | 'light'
   */
  const updateToggleUI = (theme) => {
    if (!themeToggleBtn) return;
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-checked', isDark ? 'true' : 'false');
    const label = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    themeToggleBtn.setAttribute('aria-label', label);
    themeToggleBtn.setAttribute('title', label);
  };

  /**
   * Aplica el tema seleccionado a la página
   * @param {string} theme - 'dark' | 'light'
   * @param {boolean} persist - Guardar en localStorage
   */
  const setTheme = (theme, persist = true) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (metaColorScheme) {
      metaColorScheme.content = theme;
    }
    if (persist) {
      try {
        localStorage.setItem('an-theme', theme);
      } catch (e) {
        // Ignorar si localStorage está deshabilitado
      }
    }
    updateToggleUI(theme);
  };

  // Inicialización de la UI del botón según el tema actual renderizado
  const initialTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateToggleUI(initialTheme);

  // Evento al hacer clic en el botón de alternancia
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';

      // Vibración sutil de confirmación háptica
      if ('vibrate' in navigator) {
        try {
          navigator.vibrate(30);
        } catch (e) { }
      }

      setTheme(targetTheme, true);
    });
  }

  // Sincronización entre múltiples pestañas abiertas
  window.addEventListener('storage', (e) => {
    if (e.key === 'an-theme' && e.newValue) {
      setTheme(e.newValue, false);
    }
  });

  // -------------------------------------------------------------------------
  // RENDERIZADO DE FÓRMULAS MATEMÁTICAS CON KATEX
  // -------------------------------------------------------------------------
  const renderKaTeXFormulas = () => {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false,
        trust: true
      });
      console.info('📐 KaTeX: Fórmulas matemáticas renderizadas correctamente.');
    }
  };

  // Exponer para permitir ejecución reactiva si KaTeX carga de forma asíncrona
  window.renderKaTeXFormulas = renderKaTeXFormulas;

  if (typeof renderMathInElement === 'function') {
    renderKaTeXFormulas();
  } else {
    window.addEventListener('load', renderKaTeXFormulas);
  }

  // Log de confirmación de inicialización
  console.info('🚀 Portal de Análisis Numérico (Grupo 11) inicializado correctamente.');
});
