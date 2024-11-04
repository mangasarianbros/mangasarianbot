class HologramEffect {
    constructor() {
        // Конфигурация на братята
        this.defaultImage = 'assets/img/hologram-default.jpg';
        this.brothers = [
            {
                name: 'Зюмбюл',
                quote: 'Душата ми хиляда вата',
                image: 'assets/img/zyumbul.jpg',
                color: '#ffd700' // златисто
            },
            {
                name: 'Кулю',
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

    initHolograms() {
        const hologramSection = document.createElement('section');
        hologramSection.className = 'hologram-container';
        
        // Създаваме холограмите на братята
        this.brothers.forEach(brother => {
            this.createHologram(brother, hologramSection);
        });

        document.querySelector('.hero-parallax').appendChild(hologramSection);
    }

    createHologram(brother, container) {
        const imageUrl = this.validateImage(brother.image);
        const hologram = document.createElement('div');
        hologram.className = 'hologram';
        hologram.innerHTML = `
            <div class="hologram-frame">
                <div class="hologram-glitch"></div>
                <div class="hologram-image" 
                     style="background-image: url('${imageUrl}');
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

        hologram.addEventListener('mouseleave', () => {
            this.deactivateHologram(hologram);
        });

        // Добавяме взаимодействие между холограмите
        hologram.addEventListener('click', () => {
            this.triggerHologramInteraction(hologram, brother);
        });
    }

    validateImage(url) {
        const img = new Image();
        img.src = url;
        return img.complete ? url : this.defaultImage;
    }

    activateHologram(hologram, brother) {
        hologram.classList.add('active');
        this.createHolographicNoise(hologram);
        this.createHologramFlares(hologram, brother.color);
        
        // Добавяме звуков ефект
        this.playHologramSound('activate');
    }

    deactivateHologram(hologram) {
        hologram.classList.remove('active');
        // Премахваме временните ефекти
        hologram.querySelectorAll('.hologram-noise, .hologram-flare').forEach(el => el.remove());
    }

    createHolographicNoise(hologram) {
        const noise = document.createElement('canvas');
        noise.className = 'hologram-noise';
        noise.width = 300;
        noise.height = 400;
        const ctx = noise.getContext('2d');
        
        // Анимираме холограмния шум
        const animate = () => {
            if (!hologram.classList.contains('active')) return;

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
        hologram.querySelector('.hologram-frame').appendChild(noise);
    }

    createHologramFlares(hologram, color) {
        for (let i = 0; i < 3; i++) {
            const flare = document.createElement('div');
            flare.className = 'hologram-flare';
            flare.style.cssText = `
                position: absolute;
                width: 100px;
                height: 2px;
                background: ${color};
                filter: blur(3px);
                opacity: 0.7;
                transform: rotate(${Math.random() * 360}deg) translateX(${Math.random() * 100}px);
                animation: flareFloat 3s infinite linear;
            `;
            hologram.querySelector('.hologram-frame').appendChild(flare);
        }
    }

    triggerHologramInteraction(hologram, brother) {
        // Създаваме квантова връзка между холограмите
        const otherHolograms = document.querySelectorAll('.hologram');
        otherHolograms.forEach(other => {
            if (other !== hologram) {
                this.createQuantumLink(hologram, other, brother.color);
            }
        });

        // Добавяме специален ефект на активната холограма
        this.createQuantumPulse(hologram, brother.color);
    }

    createQuantumLink(from, to, color) {
        const link = document.createElement('div');
        link.className = 'quantum-link';
        
        const fromRect = from.getBoundingClientRect();
        const toRect = to.getBoundingClientRect();
        
        const distance = Math.hypot(
            fromRect.left - toRect.left,
            fromRect.top - toRect.top
        );

        link.style.cssText = `
            position: absolute;
            left: ${fromRect.left + fromRect.width / 2}px;
            top: ${fromRect.top + fromRect.height / 2}px;
            width: ${distance}px;
            height: 2px;
            background: ${color};
            filter: blur(1px);
            transform-origin: left;
            transform: rotate(${Math.atan2(
                toRect.top - fromRect.top,
                toRect.left - fromRect.left
            )}rad);
            animation: quantumLinkFade 1s ease-out forwards;
        `;

        document.body.appendChild(link);
        setTimeout(() => link.remove(), 1000);
    }

    createQuantumPulse(hologram, color) {
        const pulse = document.createElement('div');
        pulse.className = 'quantum-pulse';
        pulse.style.cssText = `
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border: 2px solid ${color};
            border-radius: 10px;
            animation: quantumPulse 1s ease-out forwards;
        `;

        hologram.querySelector('.hologram-frame').appendChild(pulse);
        setTimeout(() => pulse.remove(), 1000);
    }

    playHologramSound(type) {
        // Здесь можно добавить звуковые эффекты
        // const sound = new Audio(`assets/sounds/${type}.mp3`);
        // sound.volume = 0.3;
        // sound.play();
    }
}
