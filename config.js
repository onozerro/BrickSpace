// config.js - Конфигурация для Brick Space
const CONFIG = {
    // Цвета сайта
    colors: {
        primaryGradient: ['#4da8ff', '#3399ff', '#1a8cff'], // Градиент фона
        navBackground: '#8bc7ff', // Цвет навигации
        alertBackground: ['#ffd966', '#ffcc33'], // Градиент алерта
        contentBackground: 'rgba(255, 255, 255, 0.98)', // Фон контента
        textColor: '#333', // Основной цвет текста
        linkColor: '#0066cc', // Цвет ссылок
        titleColor: '#3399ff', // Цвет заголовков
        footerColor: 'white' // Цвет футера
    },
    
    // Тексты
    alertText: '⚡ WELCOME TO BRICK SPACE BETA Creative building platform',
    footerText: '© 2024 Brick Space | Social Building Platform | Beta Testing',
    
    // Стиль видео
    videoStyle: {
        borderRadius: '0', // Без скругленных углов
        boxShadow: 'none' // Без тени
    }
};

// Экспорт конфигурации
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
