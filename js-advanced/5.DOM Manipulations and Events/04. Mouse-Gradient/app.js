function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove',onMouseOver);
    const result = document.getElementById('result');
    function onMouseOver(e){
 result.textContent = Math.floor(e.offsetX / gradient.clientWidth * 100) + '%'
    }
}