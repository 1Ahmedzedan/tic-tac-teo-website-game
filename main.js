let turn = 'X' ; 
let title = document.querySelector('.header') ;
let squares = [] ;
function endGame(n1,n2,n3){
    title.innerHTML = `${squares[n1]} winner` ; 
    document.getElementById('s'+n1).style.background = '#000' ;
    document.getElementById('s'+n2).style.background = '#000' ;
    document.getElementById('s'+n3).style.background = '#000' ; 
    // title.innerHTML = 'wait' ; 
    setInterval(function(){title.innerHTML+='.'},1000) ; 
    setTimeout(function(){location.reload()},4000) ;
}
function Winner(){
    for(let i=1 ; i<10 ; i++){
        squares[i]=document.getElementById('s'+i).innerHTML ; 
    }
    if(squares[1]==squares[2] && squares[1]==squares[3]&&squares[1]!=''){
        endGame(1,2,3) ; 
    }
    else if(squares[4]==squares[5] && squares[4]==squares[6]&&squares[4]!=''){
        endGame(4,5,6) ;  
    }
    else if(squares[7]==squares[8] && squares[8]==squares[9]&&squares[7]!=''){
        endGame(7,8,9) ; 
    }
    else if(squares[1]==squares[5] && squares[1]==squares[9]&&squares[1]!=''){
        endGame(1,5,9) ; 
    }
    else if(squares[3]==squares[5] && squares[3]==squares[7]&&squares[3]!=''){
        endGame(3,5,7) ; 
    }
    else if(squares[1]==squares[4] && squares[1]==squares[7]&&squares[1]!=''){
        endGame(1,4,7) ; 
    }
    else if(squares[2]==squares[5] && squares[2]==squares[8]&&squares[2]!=''){
        endGame(2,5,8) ; 
    }
    else if(squares[3]==squares[6] && squares[6]==squares[9]&&squares[3]!=''){
        endGame(3,6,9) ; 
    }
    else if(squares[1]!=''&&squares[2]!=''&&squares[3]!=''&&squares[4]!=''&&squares[5]!=''&&squares[6]!=''&&squares[7]!=''&&squares[8]!=''&&squares[9]!=''){
        title.innerHTML = 'wait' ; 
        setInterval(function(){title.innerHTML+='.'},1000) ; 
        setTimeout(function(){location.reload()},4000) ;    
    }

}
function game(id)
{
    let element = document.getElementById(id) ; 
    if(turn=='X' && element.innerHTML ==''){
        element.innerHTML = 'X' ; 
        turn = 'O' ; 
        title.innerHTML = 'O turn' ; 
    }
    else if(turn=='O' && element.innerHTML ==''){
        element.innerHTML = 'O' ; 
        turn = 'X' ; 
        title.innerHTML = 'X turn' ; 
    }
    Winner() ; 
}