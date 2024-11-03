class QuantumParticle {
    constructor() {
        this.createParticleSystem();
        this.bindEvents();
    }

    createParticleSystem() {
        const particleContainer = document.querySelector('.quantum-particles');
        this.particles = [];
        
        // Създаваме 50 квантови частици
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 5 + 2}px;
                height: ${Math.random() * 5 + 2}px;
                background: ${this.getRandomColor()};
                border-radius: 50%;
                pointer-events: none;
                opacity: ${Math.random() * 0.5 + 0.3};
            `;
            
            this.particles.push({
                element: particle,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 2 - 1
            });
            
            particleContainer.appendChild(particle);
        }

        this.animateParticles();
    }

    getRandomColor() {
        const colors = [
            '#ffd700', // золото
            '#ff6ec7', // неон
            '#00ffff'  // циан
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Квантов тунелинг ефект
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.y > window.innerHeight) particle.y = 0;
            if (particle.y < 0) particle.y = window.innerHeight;

            particle.element.style.transform = 
                `translate(${particle.x}px, ${particle.y}px)`;
        });

        requestAnimationFrame(() => this.animateParticles());
    }

    // Форма за контакт
    bindEvents() {
        const form = document.querySelector('.astral-form');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.teleportMessage();
        });
    }

    teleportMessage() {
        const button = document.querySelector('.quantum-button');
        button.innerHTML = 'Телепортация...';
        
        // Симулираме квантова телепортация
        setTimeout(() => {
            button.innerHTML = 'Съобщението е телепортирано!';
            this.createTeleportEffect();
            
            setTimeout(() => {
                button.innerHTML = 'Телепортирай съобщението';
            }, 2000);
        }, 1000);
    }

    createTeleportEffect() {
        const form = document.querySelector('.astral-form');
        form.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            form.style.transform = 'scale(1)';
        }, 200);
    }
}
