var canvas = document.getElementById("canvas")
var container = canvas.getContext("2d")

container.fillStyle = "#50c878"
//usando com fillrect
//var jogador1 = container.fillRect(80,260,30,200)

var jogador1 ={
    px: 80,
    py: 260,
    tx:30,
    ty:200,
}
var jogador2 ={
    px: 1200,
    py: 260,
    tx:30,
    ty:200,
}

var bolinha ={
    px: 1280/2 -15,
    py: 720/2,
    tx:30,
    ty:30,
}

container.font = "25px Arial" 
var pts1 = 0
var pts2 = 0


function Move_Ball(){
    bolinha.px +=8
}

function Draw(){
    container.fillRect(jogador1.px,jogador1.py,jogador1.tx,jogador1.ty)
    container.fillRect(jogador2.px,jogador2.py,jogador2.tx,jogador2.ty)
    container.fillRect(bolinha.px,bolinha.py,bolinha.tx,bolinha.ty)
    container.fillText("Score 1:  " + pts1, 200,50)
    container.fillText("Score 2:  " + pts2, 1000,50)
}

function Main(){
  
    container.clearRect(0,0,1280,720)
    Draw()
    Move_Ball()

}
setInterval(Main, 20)