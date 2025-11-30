class ThemeManager {
    constructor() {
        this.themes = [
            'light-def', 'dark-def', 'night-def',
            'light-contrast', 'dark-contrast', 'night-contrast'
        ];
        this.init();
    }

    init() {
        this.applySavedTheme();
        this.setupEventListeners();
        this.updateSelectValue();
    }

    setupEventListeners() {
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            // Устанавливаем текущее значение
            themeSelect.value = this.getSavedTheme();
            
            themeSelect.addEventListener('change', (e) => {
                this.setTheme(e.target.value);
            });
        }
    }

    getSavedTheme() {
        return localStorage.getItem('selected-theme') || 'light-def';
    }

    applySavedTheme() {
        const savedTheme = this.getSavedTheme();
        this.setTheme(savedTheme, false);
    }

    setTheme(themeName, save = true) {
        if (this.themes.includes(themeName)) {
            // Устанавливаем атрибут theme у root элемента
            document.documentElement.setAttribute('theme', themeName);
            
            // Обновляем значение в select
            this.updateSelectValue();
            
            if (save) {
                localStorage.setItem('selected-theme', themeName);
            }
            
            console.log('Theme changed to:', themeName);
        }
    }

    updateSelectValue() {
        const themeSelect = document.getElementById('theme-select');
        const currentTheme = this.getCurrentTheme();
        
        if (themeSelect) {
            themeSelect.value = currentTheme;
        }
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute('theme') || this.getSavedTheme();
    }

    // Метод для добавления новых тем
    addTheme(themeName) {
        if (!this.themes.includes(themeName)) {
            this.themes.push(themeName);
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});
