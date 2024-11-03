class FormTeleport {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        const form = document.querySelector('.astral-form');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.teleportMessage();
        });

        // Добавяме ефекти при фокус на полетата
        const formInputs = form.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => this.createFieldAura(input));
            input.addEventListener('blur', () => this.removeFieldAura(input));
        });
    }

    teleportMessage() {
        const button = document.querySelector('.quantum-button');
        button.innerHTML = 'Телепортация...';
        
        // Добавяме квантов ефект на формата
        this.createQuantumEffect();
        
        // Симулираме квантова телепортация
        setTimeout(() => {
            button.innerHTML = 'Съобщението е телепортирано!';
            this.createTeleportEffect();
            
            // Връщаме бутона в начално състояние
            setTimeout(() => {
                button.innerHTML = 'Телепортирай съобщението';
            }, 2000);
        }, 1000);
    }

    createTeleportEffect() {
        const form = document.querySelector('.astral-form');
        form.style.transform = 'scale(1.02)';
        
        // Добавяме квантови частици при телепортация
        this.createTeleportParticles();
        
        setTimeout(() => {
            form.style.transform = 'scale(1)';
        }, 200);
    }

    createFieldAura(input) {
        const aura = document.createElement('div');
        aura.className = 'field-aura';
        
        const rect = input.getBoundingClientRect();
        aura.style.cssText = `
            position: absolute;
            top: ${rect.top - 5}px;
            left: ${rect.left - 5}px;
            width: ${rect.width + 10}px;
            height: ${rect.height + 10}px;
            border-radius: 8px;
            background: linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,110,199,0.1));
            filter: blur(5px);
            pointer-events: none;
            animation: auraGlow 1.5s infinite alternate;
        `;
        
        document.body.appendChild(aura);
        input.dataset.aura = true;
    }

    removeFieldAura(input) {
        const auras = document.querySelectorAll('.field-aura');
        auras.forEach(aura => aura.remove());
        input.dataset.aura = false;
    }

    createQuantumEffect() {
        const form = document.querySelector('.astral-form');
        form.classList.add('quantum-teleport');
        
        setTimeout(() => {
            form.classList.remove('quantum-teleport');
        }, 1000);
    }

    createTeleportParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'teleport-particles';
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'teleport-particle';
            particle.style.cssText = `
                --x: ${Math.random() * 200 - 100}px;
                --y: ${Math.random() * 200 - 100}px;
                --delay: ${Math.random() * 0.5}s;
            `;
            particleContainer.appendChild(particle);
        }
        
        document.querySelector('.quantum-contact').appendChild(particleContainer);
        
        setTimeout(() => {
            particleContainer.remove();
        }, 1000);
    }
}
