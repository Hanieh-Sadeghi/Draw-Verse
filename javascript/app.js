const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



function drawing(e) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
} 

canvas.addEventListener('mousmove', drawing)