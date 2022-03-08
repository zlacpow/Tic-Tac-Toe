let one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
    four = document.getElementById("four"),
    five = document.getElementById("five"),
    six = document.getElementById("six"),
    seven = document.getElementById("seven"),
    eight = document.getElementById("eight"),
    nine = document.getElementById("nine"),
    cells=[one,two,three,four,five,six,seven,eight,nine],
    player1=true, turn=1, player1Score=0,player2Score=0,
    player1Picks=[],
    player2Picks=[];
    

function start() {
    turn=1;
    player1Picks=[];
    player2Picks=[];
    cells.forEach(cell=>{
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.addEventListener('click', cellClicked, {once: true});
    });
}
    
    
    start();

    document.getElementById('reset').addEventListener('click',function() {
        player1Score=0;
        player2Score=0;
        document.getElementById('score1').innerHTML='';
        document.getElementById('score2').innerHTML='';
        start();
    });

    function strToNum(str) {
        switch (str) {
            case 'one': return 1;
            break;
            case 'two': return 2;
            break;
            case 'three': return 3;
            break;
            case 'four': return 4;
            break;
            case 'five': return 5;
            break;
            case 'six': return 6;
            break;
            case 'seven': return 7;
            break;
            case 'eight': return 8;
            break;
            case 'nine': return 9;
            break;
        }
    }


function checkWin(arr) {
    const winConditions=[[1,2,3],[4,5,6],[7,8,9],
                    [1,4,7],[2,5,8],[3,6,9],
                    [1,5,9],[3,5,7]];
    for( condition of winConditions) {
        if(condition.every(element => {
            return arr.includes(element);
        })) return true;
    }
    return false;
}

function cellClicked(e) {
    let pick = strToNum(e.target.id);
    
    if(player1==true) {
        player1Picks.push(pick);
        document.getElementById(e.target.id).classList.add("x");
        if(checkWin(player1Picks)) {
            player1Score++;
            document.getElementById('score1').innerHTML=player1Score;
            cells.forEach(cell=>{
                cell.removeEventListener('click',cellClicked);});
            setTimeout(start,2000);
        }
        
    
    } else {
        player2Picks.push(pick);
        document.getElementById(e.target.id).classList.add("o");
        if(checkWin(player2Picks)) {
            player2Score++;
            document.getElementById('score2').innerHTML=player2Score;
            cells.forEach(cell=>{
                cell.removeEventListener('click',cellClicked);});
            setTimeout(start,2000);
        }

    
    }
    player1=!player1;
    turn++;
    if(turn==10) {
        cells.forEach(cell=>{
            cell.removeEventListener('click',cellClicked);});
        setTimeout(start,2000);
    }
}

    




