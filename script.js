document.addEventListener('DOMContentLoaded', () => {

    // Top header background color on scroll
    const header = document.querySelector('.top-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(30, 27, 75, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    });

    // Leadership Carousel Logic
    const track = document.getElementById('lead-track');
    const prevBtn = document.getElementById('lead-prev');
    const nextBtn = document.getElementById('lead-next');

    if (track && prevBtn && nextBtn) {

        const cards = document.querySelectorAll('.officer-card');
        let currentIndex = 0;
        const visibleCards = 4;

        function updateSlider() {
            const gap = 24;
            const cardWidth = cards[0].offsetWidth + gap;

            track.style.transform =
                `translateX(-${currentIndex * cardWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        window.addEventListener('resize', updateSlider);
        updateSlider();
    }

    // Navigation Active State
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Backend Connection
    const tryEndpoints = ['/api/status', '/api/data'];

    (async () => {
        for (const ep of tryEndpoints) {
            try {
                const res = await fetch(ep);

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }

                const data = await res.json();

                console.log('Backend Connection Successful:', data);

                if (data.zonals) {
                    console.log(
                        'Zonals loaded from backend:',
                        data.zonals.join(', ')
                    );
                }

                break;

            } catch (err) {
                console.warn('Failed to fetch', ep, err.message);
            }
        }
    })();
    

});
function showOfficerInfo(title, description) {
    document.getElementById("officerTitle").innerText = title;
    document.getElementById("officerDescription").innerText = description;
    document.getElementById("officerModal").style.display = "block";
}

function closeOfficerModal() {
    document.getElementById("officerModal").style.display = "none";
}
window.onclick = function(event) {
    const modal = document.getElementById("officerModal");

    if (event.target == modal) {
        modal.style.display = "none";
    }
}