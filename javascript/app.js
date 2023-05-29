const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let isDrawing = false
window.addEventListener('load' , ()=>{ 
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

function starDraw(){
    isDrawing = true
    ctx.beginPath()
}

function drawing(e) {
    if(!isDrawing){
        return
    }
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
} 

function endDraw(){
    isDrawing = false
}
canvas.addEventListener('mousedown', starDraw)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', endDraw)


