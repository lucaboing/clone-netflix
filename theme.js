/**
 * Sistema de Dark/Light Mode
 * Gerencia a alternância entre temas e persiste a preferência do usuário
 */

// Obt Elemento do botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

/**
 * Inicializa o tema ao carregar a página
 * Verifica localStorage para preferência salva ou detecta preferência do sistema
 */
function initializeTheme() {
    // Obtém o tema salvo em localStorage
    const savedTheme = localStorage.getItem('theme');
    // Detecta se o sistema tem preferência por dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Define o tema: usa preferência salva ou detecta do sistema
    const isDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    // Aplica o tema detectado
    applyTheme(isDarkMode);
}

/**
 * Aplica o tema selecionado à página
 * @param {boolean} isDarkMode - true para dark mode, false para light mode
 */
function applyTheme(isDarkMode) {
    if (isDarkMode) {
        // Remove a classe light-mode para manter o tema dark (padrão)
        html.classList.remove('light-mode');
        // Atualiza o ícone do botão para sol (indicando que pode mudar para light)
        updateThemeIcon(true);
        // Salva a preferência em localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        // Adiciona a classe light-mode para ativar o tema claro
        html.classList.add('light-mode');
        // Atualiza o ícone do botão para lua (indicando que pode mudar para dark)
        updateThemeIcon(false);
        // Salva a preferência em localStorage
        localStorage.setItem('theme', 'light');
    }
}

/**
 * Atualiza o ícone do botão de alternância
 * @param {boolean} isDarkMode - true se em dark mode (mostra sol), false se em light mode (mostra lua)
 */
function updateThemeIcon(isDarkMode) {
    const icon = themeToggle.querySelector('.theme-icon');
    // Dark mode = ícone do sol (☀️), Light mode = ícone da lua (🌙)
    icon.textContent = isDarkMode ? '☀️' : '🌙';
}

/**
 * Event listener para alternar tema ao clicar no botão
 */
themeToggle.addEventListener('click', () => {
    // Verifica se o modo light está ativo
    const isLightMode = html.classList.contains('light-mode');
    // Alterna para o modo oposto
    applyTheme(isLightMode);
});

// Inicializa o tema quando a página carrega
initializeTheme();
