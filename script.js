const tissueData = [
    { name: "segaudi", image: "images/segaudi.png" },
    { name: "veidotājaudi", image: "images/veidotajaudi.jpg" },
    { name: "vadaudi", image: "images/vadaudi.png" },
    { name: "mehāniskie", image: "images/mehaniskie.png" },
    { name: "epitēlijaudi", image: "images/epitelijaudi.png" },
    { name: "muskuļaudi", image: "images/muskulaudi.png" },
];

let currentIndex = 0;
let attempts = 0;

function laika_atskaite() {
    const datums = new Date("April 23, 2025 00:00:00").getTime();
    const tagad = new Date().getTime();
    const laiksatlicis = datums - tagad;

    if (laiksatlicis > 0) {
        const dienas = Math.floor(laiksatlicis / (1000 * 60 * 60 * 24));
        const stundas = Math.floor((laiksatlicis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((laiksatlicis % (1000 * 60 * 60)) / (1000 * 60));
        const sekundes = Math.floor((laiksatlicis % (1000 * 60)) / 1000);
    
    
        document.getElementById("atskaite").innerHTML = `${dienas}d ${stundas}h ${minutes}m ${sekundes}s`;
    
    } else {
        document.getElementById("atskaite").innerHTML = "Laiks ir beidzies!";
    }
}

setInterval(laika_atskaite, 1000);
laika_atskaite();





function poga() {
    const ievade = document.getElementById("ievade");
    const izvade = document.getElementById("izvade");
    izvade.innerHTML = `Sveicināts, ${ievade.value}!`
    
    izvade.classList.remove("paradas");
    void izvade.offsetWidth;
    izvade.classList.add("paradas");
}




function loadImage() {
    const imgElement = document.getElementById('tissueImage');
    imgElement.src = tissueData[currentIndex].image;
    document.getElementById('feedbackText').textContent = "";
    document.getElementById('answerInput').value = "";
}

function checkAnswer() {
    console.log("checkAnswer called, currentIndex:", currentIndex); 
    const input = document.getElementById('answerInput').value.trim().toLowerCase();
    const correct = tissueData[currentIndex].name.toLowerCase();
    const feedback = document.getElementById('feedbackText');

    if (input === correct) {
        feedback.textContent = "Pareizi! Nākamais attēls.";
        feedback.style.color = "green";
        
        attempts = 0; 

        setTimeout(() => {
            currentIndex++;
            console.log("Correct answer! Moving to next image, currentIndex:", currentIndex);

            if (currentIndex < tissueData.length) {
                loadImage();
            } else {
                feedback.textContent = "Spēle beigusies! Apsveicu!";
            }
        }, 2000);

    } else {
        attempts++; 
        feedback.textContent = "Nepareizi! Mēģini vēlreiz.";
        feedback.style.color = "red";
    }

}

function nextImage() {
    console.log("nextImage called, currentIndex before:", currentIndex);
    currentIndex = (currentIndex + 1) % tissueData.length;
    attempts = 0;
    loadImage();
    console.log("Moving to next image, currentIndex after:", currentIndex);
}

function endGame() {
    alert("Paldies par spēli!");
    currentIndex = 0;
    attempts = 0;
    loadImage();
}

window.addEventListener("DOMContentLoaded", loadImage);