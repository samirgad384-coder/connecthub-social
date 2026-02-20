// Staggered entrance for cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(14px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, ' +
                            'border-color 0.28s, box-shadow 0.28s, background 0.28s';
    setTimeout(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
    }, 200 + i * 60);
});

// Subtle ripple on click
cards.forEach(card => {
    card.addEventListener('click', function(e) {
        const r    = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        Object.assign(r.style, {
            position:      'absolute',
            width:         size + 'px',
            height:        size + 'px',
            top:           (e.clientY - rect.top  - size / 2) + 'px',
            left:          (e.clientX - rect.left - size / 2) + 'px',
            background:    'rgba(139, 115, 85, 0.08)',
            borderRadius:  '50%',
            transform:     'scale(0)',
            animation:     'ripple 0.5s ease forwards',
            pointerEvents: 'none',
        });
        this.appendChild(r);
        setTimeout(() => r.remove(), 520);
    });
});
