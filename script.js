document.getElementById("btnCanviarColor").addEventListener("click", function() {
    let colors = ["#ffcc00", "#008cff", "#ff5733", "#33ff57", "#ff33a1"];
    let colorAleatori = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = colorAleatori;
});
