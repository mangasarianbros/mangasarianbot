// Инициализираме квантовата система
document.addEventListener('DOMContentLoaded', () => {
    // Инициализираме всички ефекти
    new QuantumParticle();
    new TeslaNavigation();
    new HologramEffect();
    new FormTeleport();
    
    console.log('Квантовото просветление е заредено! 🌟');
});

// Добавяме необходимите анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes boltFlash {
        0% { transform: scaleX(0); opacity: 1; }
        100% { transform: scaleX(1); opacity: 0; }
    }
    
    @keyframes quantumLinkFade {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 0.5; }
        100% { opacity: 0; transform: scale(1); }
    }

    @keyframes quantumPulse {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
    }

    @keyframes flareFloat {
        0% { transform: rotate(0deg) translateX(0); opacity: 0; }
        50% { opacity: 0.7; }
        100% { transform: rotate(360deg) translateX(100px); opacity: 0; }
    }
`;
document.head.appendChild(style);
