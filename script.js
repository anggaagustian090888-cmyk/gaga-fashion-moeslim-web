// 1. Fungsi Newsletter Popup
window.onload = function() {
    setTimeout(function() {
        const popup = document.getElementById('newsletterPopup');
        if(popup) {
            popup.classList.remove('hidden');
            setTimeout(() => popup.classList.add('opacity-100'), 10);
        }
    }, 3000); 
};

function closePopup() {
    const popup = document.getElementById('newsletterPopup');
    popup.classList.remove('opacity-100');
    setTimeout(() => popup.classList.add('hidden'), 500);
}

// 2. Sticky Navbar saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md', 'bg-white/90', 'backdrop-blur-sm');
    } else {
        nav.classList.remove('shadow-md', 'bg-white/90', 'backdrop-blur-sm');
    }
});

// 3. Smooth Scroll untuk Link Internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function calculateShipping() {
    const select = document.getElementById('regionSelect');
    const resultDiv = document.getElementById('shippingResult');
    const priceDisplay = document.getElementById('shippingPrice');
    
    const price = select.value;

    if (price === "0") {
        alert("Please select a destination first.");
        return;
    }

    // Menampilkan hasil dengan animasi sederhana
    resultDiv.classList.remove('hidden');
    priceDisplay.innerText = `$${price}.00 USD`;
    
    // Opsional: Scroll otomatis ke hasil
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}