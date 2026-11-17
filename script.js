const giftBox = document.getElementById('giftBox');
const birthdayCard = document.getElementById('birthdayCard');
const instruction = document.getElementById('instruction');
const confettiBtn = document.getElementById('confettiBtn');

// Fungsi untuk memunculkan efek konfeti
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Event saat kotak kado diklik
giftBox.addEventListener('click', () => {
    // 1. Buka tutup kado
    giftBox.classList.add('open');
    
    // 2. Sembunyikan teks instruksi
    instruction.style.display = 'none';
    
    // 3. Tampilkan kartu ucapan & tembakkan konfeti setelah jeda 400ms
    setTimeout(() => {
        birthdayCard.classList.add('show');
        launchConfetti();
    }, 400);
});

// Event untuk tombol "Rayakan Lagi"
confettiBtn.addEventListener('click', () => {
    launchConfetti();
});
