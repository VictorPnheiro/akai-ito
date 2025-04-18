document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById('start-btn');
    const letter = document.getElementById('letter');
    const envelope = letter.querySelector('.envelope');
    const message = letter.querySelector('.message');

    const directions = ['right', 'left'];
    let directionIndex = 0;

    function resetAnimation() {
        letter.style.transition = 'none';
        letter.style.opacity = '1';
        envelope.style.display = 'block';
        message.style.display = 'none';
        message.classList.remove('visible');
        letter.style.transform = 'translateY(-50%) scale(1)';

        // Set initial left position based on direction
        if (directions[directionIndex] === 'right') {
            letter.style.left = '110%';
        } else {
            letter.style.left = '-10%';
        }
    }

    function startAnimation() {
        resetAnimation();

        // Animate letter flying from current direction to center
        letter.style.transition = 'left 3s ease';
        letter.style.left = '50%';

        // Listen for transition end to show message
        function onTransitionEnd(event) {
            if (event.propertyName === 'left') {
                // Remove transitionend listener
                letter.removeEventListener('transitionend', onTransitionEnd);
                // Keep envelope visible, wait for click to show message
            }
        }
        letter.addEventListener('transitionend', onTransitionEnd);

        // Add click listener on envelope to show message
        envelope.onclick = () => {
            envelope.style.display = 'none';
            message.style.display = 'block';
            setTimeout(() => {
                message.classList.add('visible');
            }, 50);
        };
    }

    startBtn.addEventListener('click', () => {
        // Toggle direction index
        directionIndex = (directionIndex + 1) % directions.length;

        // Reset animation and force reflow to restart animation
        resetAnimation();
        void letter.offsetWidth; // Trigger reflow

        // Start animation
        startAnimation();
    });

    // Click outside message to revert to envelope
    document.addEventListener('click', (event) => {
        if (!message.contains(event.target) && !envelope.contains(event.target)) {
            message.style.display = 'none';
            message.classList.remove('visible');
            envelope.style.display = 'block';
        }
    });
});
