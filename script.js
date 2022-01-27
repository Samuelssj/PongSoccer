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
    dir:0,
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
    dir:8,

}

container.font = "25px Arial" 
var pts1 = 0
var pts2 = 0




document.addEventListener("keydown", function(e){
    if(e.keyCode === 87){
        jogador1.dir = -10
    }else if(e.keyCode === 83){
        jogador1.dir = 10 
    }
    
})

document.addEventListener("keyup", function(e){
    if(e.keyCode === 87){
        jogador1.dir = -0
    }else if(e.keyCode === 83){
        jogador1.dir = 0 
    }
    
})



function Move_Player1(){

    if(jogador1.py < 0){
        jogador1.py =0
    }else if(jogador1.py >520){
        jogador1.py =520

    }



    jogador1.py += jogador1.dir
}



function Move_Ball(){
    bolinha.px += bolinha.dir

}

function Colision_Ball(){

    if (bolinha.py + bolinha.ty >= jogador2.py && bolinha.py <= jogador2.py+jogador2.ty &&
        bolinha.px >= jogador2.px-jogador2.tx){

        bolinha.dir *= -1

    }else if(bolinha.py + bolinha.ty >= jogador1.py && bolinha.py <= jogador1.py+jogador1.ty &&
         bolinha.px <= jogador1.px+ jogador1.tx){
             
        bolinha.dir *= -1
    }
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
    Colision_Ball()
    Move_Player1()

}
setInterval(Main, 10)