function showCard() {
    document.getElementById('card').style.display = 'block';
    document.getElementById('image1').src = '1.png'; 
    document.getElementById('image2').src = '2.png';
    document.getElementById('image3').src = '3.png'; 
    document.getElementById('birthdayImage').src = 'Bday.png'; 
    createHearts(20);

    const audio = document.getElementById('backgroundMusic');
    audio.play();
}

function createHearts(num) {
    const container = document.getElementById('hearts-container');
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
}
