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
    }

    setupEventListeners() {
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
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
        this.setTheme(savedTheme, false); // false - не сохранять снова
    }

    setTheme(themeName, save = true) {
        if (this.themes.includes(themeName)) {
            document.documentElement.setAttribute('theme', themeName);
            
            const themeSelect = document.getElementById('theme-select');
            if (themeSelect) {
                themeSelect.value = themeName;
            }
            
            if (save) {
                localStorage.setItem('selected-theme', themeName);
            }
        }
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
