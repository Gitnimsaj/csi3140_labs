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