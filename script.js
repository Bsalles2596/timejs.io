
let hora= 0
let min= 0
let sec= 0
let interval


function start (){
   interval= setInterval(time,100)
    
}

function pause (){
    clearInterval(interval)
    
}

function stopp (){
    clearInterval(interval)
    hora++
    min++
    sec++

    if(sec==60) {
        hora= 0
        min= 0
        sec= 0
    }
    document.querySelector('#time').innerHTML = `00:00:00`
}


function time(){
    sec++

    if(sec==60) {
        min++
        sec=0
    }
    
    if (min==60) {
    
         min=0 
         hora++  
    }
    document.querySelector('#time').innerHTML = `${hora}:
    ${min}:${sec}`
}