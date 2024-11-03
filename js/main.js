// Инициализираме квантовата система
document.addEventListener('DOMContentLoaded', () => {
    // Инициализираме всички ефекти
    new QuantumParticle();
    new HologramEffect();
    
    console.log('Квантовото просветление е заредено! 🌟');
});

// Добавяме и малко Tesla анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes boltFlash {
        0% { transform: scaleX(0); opacity: 1; }
        100% { transform: scaleX(1); opacity: 0; }
    }
`;
document.head.appendChild(style);
