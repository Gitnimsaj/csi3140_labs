function createGame(n){
    let game = new array[n];
    let pacman = Math.floor(Math.random() * n);
    let fruit = Math.floor(Math.random() * n);
    let ghost = Math.floor(Math.random() * n);

    while(fruit == pacman){
        fruit = Math.floor(Math.random() * n);
    }

    while(ghost == pacman){
        ghost = Math.floor(Math.random() * n);
    }

    for(let i = 0; i<n; i++){
        switch(i){
            case pacman:
                game[i]="C";
                break;
            case ghost:
                game[i]="^.";
                break;
            case fruit:
                game[i]="@"
                break;
            default:
                game[i]="."
        }
    }
    return game;
}

function moveLeft(game){
    for(let i = 0, n = game.lenght; i<n; i++){
        if (game[i]=="C"){
            game[i]="";
            game[i-1]="C"+game[i-1];
            break;
        }
        if (game[i]=="C."){
            game[i]=".";
            game[i-1]="C"+game[i-1];
            break;
        }
    }
}

function moveRight(game){
    for(let i = 0, n = game.lenght; i<n; i++){
        if (game[i]=="C"){
            game[i]="";
            if (1 == 0){
                game[n-1]="C"+game[n-1];
                break;
            }
            else{
                game[i-1]="C"+game[i+1];
                break;
            }
        }
        if (game[i]=="C."){
            if(i==n-1){
                game[i]=".";
                game[0]="C"+game[0];
                break;
            }
            else{
                game[i]=".";
                game[i-1]="C"+game[i+1];
                break;
            }
        }
    }
}