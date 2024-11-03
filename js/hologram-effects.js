// hologram-effects.js

class HologramEffect {
    constructor() {
        this.initHolograms();
    }

    initHolograms() {
        const hologramSection = document.createElement('section');
        hologramSection.className = 'hologram-container';
        
        // Създаваме холограмите на братята
        const brothers = [
            { name: 'Зюмбюл', quote: 'Душата ми хиляда вата' },
            { name: 'Кулю', quote: 'Във кубъ, брат, във кубъ' },
            { name: 'Среброто', quote: 'CD-рома на компютъра му' }
        ];

        brothers.forEach(brother => {
            this.createHologram(brother, hologramSection);
        });

        document.querySelector('.hero-parallax').appendChild(hologramSection);
    }

    createHologram(brother, container) {
        const hologram = document.createElement('div');
        hologram.className = 'hologram';
        hologram.innerHTML = `
            <div class="hologram-frame">
                <div class="hologram-glitch"></div>
                <div class="hologram-image"></div>
                <div class="hologram-scan"></div>
                <div class="hologram-text">
                    <h3>${brother.name}</h3>
                    <p>"${brother.quote}"</p>
                </div>
            </div>
        `;

        container.appendChild(hologram);
        
        // Добавяме интерактивност
        hologram.addEventListener('mouseenter', () => {
            this.activateHologram(hologram);
        });
    }

    activateHologram(hologram) {
        hologram.classList.add('active');
        this.createHolographicNoise(hologram);
        
        // Симулираме холограмно трептене
        setTimeout(() => {
            hologram.classList.remove('active');
        }, 3000);
    }

    createHolographicNoise(hologram) {
        const noise = document.createElement('canvas');
        noise.className = 'hologram-noise';
        const ctx = noise.getContext('2d');
        
        // Анимираме холограмния шум
        const animate = () => {
            const imageData = ctx.createImageData(noise.width, noise.height);
            const data = imageData.data;
            
            for (let i = 0; i < data.length; i += 4) {
                const random = Math.random() * 255;
                data[i] = random;     // R
                data[i + 1] = random; // G
                data[i + 2] = 255;    // B
                data[i + 3] = 15;     // Alpha
            }
            
            ctx.putImageData(imageData, 0, 0);
            requestAnimationFrame(animate);
        };
        
        animate();
        hologram.appendChild(noise);
    }
}
