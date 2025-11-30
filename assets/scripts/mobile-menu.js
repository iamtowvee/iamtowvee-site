class MobileMenu {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createMobileMenu();
        this.setupEventListeners();
    }

    createMobileMenu() {
        // Создаем оверлей и мобильное меню
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        
        const mobileSidebar = document.createElement('div');
        mobileSidebar.className = 'mobile-menu-sidebar';
        mobileSidebar.innerHTML = this.getSidebarContent();
        
        document.body.appendChild(overlay);
        document.body.appendChild(mobileSidebar);
        
        this.overlay = overlay;
        this.mobileSidebar = mobileSidebar;
    }

    getSidebarContent() {
        return `
            <nav class="sidebar-nav">
                <div class="nav-section">
                    <h3 class="nav-heading">Navigation</h3>
                    <a href="#" class="nav-link active">
                        <span class="nav-icon">🏠</span>
                        Home
                    </a>
                    <a href="#" class="nav-link">
                        <span class="nav-icon">📁</span>
                        Projects
                    </a>
                    <a href="#" class="nav-link">
                        <span class="nav-icon">📝</span>
                        Articles
                    </a>
                    <a href="#" class="nav-link">
                        <span class="nav-icon">👤</span>
                        About
                    </a>
                </div>
            </nav>
        `;
    }

    setupEventListeners() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => this.toggle());
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.close());
        }

        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.isOpen = true;
        this.mobileSidebar.classList.add('active');
        this.overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.isOpen = false;
        this.mobileSidebar.classList.remove('active');
        this.overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    window.mobileMenu = new MobileMenu();
});
