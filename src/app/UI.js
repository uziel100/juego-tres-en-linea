import Game from './Game';

export default class UI{

    constructor(){
        this.game = new Game();
        this.firstFig = '<span class="icon"><i class="fas fa-dot-circle"></i></span>';
        this.secondFig = '<span class="icon"><i class="fas fa-times"></i></span>';        
        this.boxWinner = document.querySelector('.player-Winner');
        this.PLAYER_01 = 0;        
    }

    getCords(elementCords){        
        const cordsArray = elementCords.split(",");        
        cordsArray[0] = parseInt(cordsArray[0]);
        cordsArray[1] = parseInt(cordsArray[1]);
    
        return cordsArray;
    }

    drawFigure(box, cords){
        if(box.innerHtml != ''){ 
            const turn = this.game.getTurn(); 

            box.innerHTML = (turn == this.PLAYER_01)? this.firstFig: this.secondFig;                        

            const player = this.game.changeTurn(cords);  
            if(player.winner)
                this.setWinner(turn);
        }
    }

    clearBoard(board){    
        this.removeWinner();
        this.game.start();                                  
        for (let i = 0; i < board.length; i++) 
            board[i].innerHTML = '';        
    }

    setWinner(player){
        const playerWinner = `<h3>¡El jugador ${player + 1} ha ganado!</h3>`;
        this.boxWinner.innerHTML = playerWinner;
        const bodyActive = document.getElementsByTagName('body');
        bodyActive[0].classList.add('winner');        
    }

    removeWinner(){
        const bodyActive = document.getElementsByTagName('body');
        bodyActive[0].classList.remove('winner');        
        this.boxWinner.innerHTML = '';
    }

    isNotWinnner(){
        return !this.game.isPlayerWinner();
    }
}