const canvas = document.querySelector('canvas');
const height = window.outerHeight;
const width = window.outerWidth;
const context = canvas.getContext('2d');
const columns = Math.ceil(width / 20);
const yPositions = Array(columns).fill(0);


canvas.width = width;
canvas.height = height;

document.body.requestFullscreen();

function fallCode() {
    context.fillStyle = "#0001";
    context.fillRect(0, 0, width, height);
    context.font = "15pt monospaced";
    context.fillStyle = "#0f0";

    yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;

        context.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
            yPositions[index] = 0;
        } else {
            yPositions[index] = y + 20;
        }
    })
}



setInterval(fallCode, 60);