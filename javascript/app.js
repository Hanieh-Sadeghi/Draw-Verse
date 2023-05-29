const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const brushWidth =document.querySelector('#brush-width')
const brushColor = document.querySelector('#brush-color')

let isDrawing = false
let currenWidth = 5

window.addEventListener('load' , ()=>{ 
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

function starDraw(){
    isDrawing = true
    ctx.beginPath()
    ctx.lineWidth = currenWidth
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

brushWidth.addEventListener('change' ,()=>{
    currenWidth = brushWidth.value
})
