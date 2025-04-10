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
    
    izvade.classList.remove("show");
    void izvade.offsetWidth;
    izvade.classList.add("show");
}



const tissueData = [
    { name: "segaudi", image: "images/segaudi.png" },
    { name: "veidotājaudi", image: "images/veidotajaudi.jpg" },
    { name: "vadaudi", image: "images/vadaudi.png" },
    { name: "pamataudi", image: "images/pamataudi.png" },
    { name: "mehāniskie", image: "images/mehaniskie.png" },
    { name: "epitēlijaudi", image: "images/epitelijaudi.png" },
    { name: "nervaudi", image: "images/nervaudi.png" },
    { name: "muskuļaudi", image: "images/muskulaudi.png" },
    { name: "saistaudi", image: "images/saistaudi.jpg" }
  ];
  
  let currentIndex = 0;
  
  function loadImage() {
    const imgElement = document.getElementById('tissueImage');
    imgElement.src = tissueData[currentIndex].image;
    document.getElementById('feedbackText').textContent = "";
    document.getElementById('answerInput').value = "";
  }
  
  function checkAnswer() {
    const input = document.getElementById('answerInput').value.trim().toLowerCase();
    const correct = tissueData[currentIndex].name.toLowerCase();
    const feedback = document.getElementById('feedbackText');
  
    if (input === correct) {
      feedback.textContent = "Pareizi!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Nepareizi! Mēģini vēlreiz vai beidz spēli.";
      feedback.style.color = "red";
    }
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % tissueData.length;
    loadImage();
  }
  
  function endGame() {
    alert("Paldies par spēli!");
    currentIndex = 0;
    loadImage();
  }
  
  window.addEventListener("DOMContentLoaded", loadImage);
  