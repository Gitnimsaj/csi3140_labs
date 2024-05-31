let score = 0;
let Pacman = 0;
let ghost = 0;

function createGame(n){
    let game = new array[n];
    let fruit = Math.floor(Math.random() * n);
    pacman = Math.floor(Math.random() * n);
    ghost = Math.floor(Math.random() * n);

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
    game[pacman]="";

    if(pacman == 0){
        pacman = n-1;
    }
    else{
        pacman = pacman-1;
    }

    switch(game[pacman]){
        case ".":
            score+=1;
            break;
        case "@":
            score+=5;
            break;
        case "^":
            score=0;
            game = createGame(game.lenght)
            break;
    }
    if(score == game.lenght + 3){
        game = createGame(game.lenght);
    }
    else{
        game[pacman] = "C";
    }
}

function moveRight(game){
    game[pacman]="";

    if(pacman == n-1){
        pacman = 0;
    }
    else{
        pacman = pacman+1;
    }

    switch(game[pacman]){
        case ".":
            score+=1;
            break;
        case "@":
            score+=5;
            break;
        case "^":
            score=0;
            game = createGame(game.lenght)
            break;
    }
    if(score == game.lenght + 3){
        game = createGame(game.lenght);
    }
    else{
        game[pacman] = "C";
    }
}