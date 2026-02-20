// === Ripple effect on link cards ===
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect   = this.getBoundingClientRect();
        const size   = Math.max(rect.width, rect.height);
        Object.assign(ripple.style, {
            position:     'absolute',
            width:        size + 'px',
            height:       size + 'px',
            top:          (e.clientY - rect.top  - size / 2) + 'px',
            left:         (e.clientX - rect.left - size / 2) + 'px',
            background:   'rgba(26, 115, 232, 0.12)',
            borderRadius: '50%',
            transform:    'scale(0)',
            animation:    'rippleAnim 0.55s ease forwards',
            pointerEvents:'none',
            zIndex:       '0',
        });
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// === Staggered card entrance ===
const cards = document.querySelectorAll('.link-card');
cards.forEach((card, i) => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition= 'opacity 0.4s ease, transform 0.4s ease, background 0.3s, border-color 0.3s, box-shadow 0.3s';
    setTimeout(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
    }, 320 + i * 65);
});

// === Status dot tooltip ===
const dot = document.querySelector('.status-dot');
if (dot) {
    dot.addEventListener('mouseenter', () => {
        dot.setAttribute('title', 'متاح للتواصل ✅');
    });
}
