class TeslaNavigation {
    constructor() {
        this.initTeslaEffects();
    }

    initTeslaEffects() {
        const menuItems = document.querySelectorAll('.quantum-menu a');
        
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                this.createTeslaBolt(e.target);
            });
        });
    }

    createTeslaBolt(target) {
        const bolt = document.createElement('div');
        bolt.className = 'tesla-bolt';
        
        const rect = target.getBoundingClientRect();
        bolt.style.cssText = `
            position: absolute;
            top: ${rect.top}px;
            left: ${rect.left}px;
            width: ${rect.width}px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #ffd700, transparent);
            filter: blur(1px);
            animation: boltFlash 0.5s ease-out;
        `;

        document.body.appendChild(bolt);
        setTimeout(() => bolt.remove(), 500);
    }
}

// Добавяме и малко Tesla анимации
const style = document.createElement('bolt');
bolt.textContent = `
    @keyframes boltFlash {
        0% { transform: scaleX(0); opacity: 1; }
        100% { transform: scaleX(1); opacity: 0; }
    }
`;
document.head.appendChild(bolt);
