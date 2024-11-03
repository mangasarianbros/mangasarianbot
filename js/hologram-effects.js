class HologramEffect {
    constructor() {
        // Конфигурация на братята
        this.brothers = [
            {
                name: 'Зюмбюл',
                quote: 'Душата ми хиляда вата',
                image: 'assets/img/zyumbul.jpg',
                color: '#ffd700' // златисто
            },
            {
                name: 'Кулюo',
                quote: 'Във кубъ, брат, във кубъ',
                image: 'assets/img/kulyu.jpg',
                color: '#ff6ec7' // неоново розово
            },
            {
                name: 'Среброто',
                quote: 'CD-рома на компютъра му',
                image: 'assets/img/srebroto.jpg',
                color: '#00ffff' // циан
            }
        ];

        this.initHolograms();
    }

    createHologram(brother, container) {
        const hologram = document.createElement('div');
        hologram.className = 'hologram';
        hologram.innerHTML = `
            <div class="hologram-frame">
                <div class="hologram-glitch"></div>
                <div class="hologram-image" 
                     style="background-image: url('${brother.image}');
                            border: 2px solid ${brother.color}">
                </div>
                <div class="hologram-scan"></div>
                <div class="hologram-text">
                    <h3 style="color: ${brother.color}">${brother.name}</h3>
                    <p>"${brother.quote}"</p>
                </div>
            </div>
        `;

        container.appendChild(hologram);
        
        // Добавяме интерактивност
        hologram.addEventListener('mouseenter', () => {
            this.activateHologram(hologram, brother);
        });
    }

    activateHologram(hologram, brother) {
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
