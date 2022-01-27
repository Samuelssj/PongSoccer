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
    dir: 0,
}

var bolinha ={
    px: 625,
    py: 345,
    tx:30,
    ty:30, 
    dir:8,
    diry: 2,

}

var jogando = true

container.font = "25px Arial" 
var pts1 = 0
var pts2 = 0


document.addEventListener("keydown", function(e){
    if(e.keyCode === 87){
        jogador1.dir = -10
    }else if(e.keyCode === 83){
        jogador1.dir = 10 
    }

    if(e.keyCode === 101){
        jogador2.dir = -10
    }else if(e.keyCode === 98){
        jogador2.dir = 10 
    }
    
})

document.addEventListener("keyup", function(e){
    if(e.keyCode === 87){
        jogador1.dir = -0
    }else if(e.keyCode === 83){
        jogador1.dir = 0 
    }

    if(e.keyCode === 101){
        jogador2.dir = -10
    }else if(e.keyCode === 98){
        jogador2.dir = 0 
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


function Game_over(){

    if(pts1 > 2 || pts2 >2){
        jogando = false
    }

}



function Move_Playe2(){
 
    if(jogador2.py < 0){
        jogador2.py =0
    }else if(jogador2.py >520){
        jogador2.py =520

    }
    jogador2.py += jogador2.dir
}

function Move_Ball(){
    bolinha.px += bolinha.dir
    bolinha.py += bolinha.diry
    
    if(bolinha.py < 0 ){
        bolinha.diry *= -1
    }
    else if(bolinha.py > 690){

        bolinha.diry *= -1

    }


}

function Points(){
// 100 e o deley do tamanho do canvas "suposto"
    if(bolinha.px < -100){
        bolinha.px = 625
        bolinha.py = 345
        bolinha.dir *= -1
        pts2 +=1
    }
    else if(bolinha.px > 1380){
        bolinha.px = 625
        bolinha.py = 345
        bolinha.dir *= -1
        pts1 +=1 
    }
}

function Colision_Ball(){

    if (bolinha.py + bolinha.ty >= jogador2.py && bolinha.py <= jogador2.py+jogador2.ty &&
        bolinha.px >= jogador2.px-jogador2.tx && bolinha.px >= jogador2.px -jogador2.tx){

        bolinha.dir *= -1

    }else if(bolinha.py + bolinha.ty >= jogador1.py && bolinha.py <= jogador1.py+jogador1.ty &&
         bolinha.px <= jogador1.px+ jogador1.tx && bolinha.px >= jogador1.px - jogador1.tx){
             
        bolinha.dir *= -1
    }
}

function Draw(){
    container.fillRect(jogador1.px,jogador1.py,jogador1.tx,jogador1.ty)
    container.fillRect(jogador2.px,jogador2.py,jogador2.tx,jogador2.ty)
    container.fillRect(bolinha.px,bolinha.py,bolinha.tx,bolinha.ty)
   
}

function Draw_win(){
    container.clearRect(0,0,1280,720)
    container.font = "40px Arial" 
    container.fillText("Jogador 1:  " + pts1, 200,345)
    container.fillText("Jogador 2:  " + pts2, 1000,345) 

}


function Main(){
  if(jogando){
    container.clearRect(0,0,1280,720)
    Draw()
    Move_Ball()
    Colision_Ball()
    Points() 
    Move_Player1()
    Move_Playe2()
    Game_over()
  }else{
      Draw_win()
  }
 

}
setInterval(Main, 10)