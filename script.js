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
