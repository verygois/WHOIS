'use strict'

function canvasIcons(ii) {
    const text = document.querySelector('#textHere');
    const canvasAll = document.querySelectorAll('canvas');
    for (let canvas of canvasAll) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            const x = (canvas.width / 2);
            const y = (canvas.height / 2);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // テキストのスタイル付け
            ctx.font = `${x * 2}px 'Great Vibes', cursive`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = '#000';
            ctx.fillText(text.value, x, y, x * ii);
        }
    }
}