const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


window.addEventListener('load' , ()=>{
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

function drawing(e) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
} 

canvas.addEventListener('mousemove', drawing)
