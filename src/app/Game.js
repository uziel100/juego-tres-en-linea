export default class Game{
    constructor(){                
        this.start();
        this.board = [
            [0, 0 ,0],
            [0, 0 ,0],
            [0, 0 ,0],
        ];
        this.playerPoint = 0;
        this.playerWinner = false;    
               
    }

    start(){
        this.turnos = [true, false]; 
        this.playerWinner = false;
        this.board  = [
            [0, 0 ,0],
            [0, 0 ,0],
            [0, 0 ,0],
        ]            
    }
   

    changeTurn(cords){
        this.setCords(cords);
        const player = this.checkWinner();        
        this.turnos.reverse();

        return player;
    }  
    
    checkWinner(){
        const turn = this.getTurn() + 1;          
        this.playerPoint = this.getPlayerPoint(turn);        
       
        if(this.checkHorizontal() || this.checkVertical() || this.checkDiagonal()){
            this.setPlayerWinner();        
        }else{
            return{
                player: 0,
                winner: false
            }    
        }

        return{
            player: turn,
            winner: true
        }
    }    

    getTurn(){        
        return this.turnos.indexOf(true);
    }

    getPlayerPoint(turn){   
        return (turn == 1)? 3 : 15;
    }
    
    setPlayerWinner(){
        this.playerWinner = true;
    }

    checkHorizontal(){
        let suma = 0;
        for (let fila = 0; fila < this.board.length; fila++) {            
            suma = this.board[fila].reduce((acumulador, currentValue) => acumulador + currentValue);
            if(suma === this.playerPoint)              
                return true;                            
            suma = 0;          
        }       
    }
 
    checkVertical(){
        let suma = 0;        
        for (let c = 0; c < this.board.length; c++) {  
            for (let f = 0; f < this.board.length; f++) {  
                suma += this.board[f][c];
                if(suma === this.playerPoint)
                    return true;                
            } 
            suma = 0;  
        }       
    }

    
    checkDiagonal(){
        let sumaDiagonal1  = 0,
            sumaDiagonal2  = 0,            
            diagonal2 = [2, 1, 0];

        for (let i = 0; i < diagonal2.length; i++) {  
            sumaDiagonal1 += this.board[i][i];
            sumaDiagonal2 += this.board[i][diagonal2[i]];
            if(sumaDiagonal1 === this.playerPoint ||  sumaDiagonal2 === this.playerPoint)
                return true;                       
        }          
    }
       

    setCords(cords){
        const turn = this.getTurn();                
        this.board[cords[0]][cords[1]] = (turn == 0)? 1: 5;          
    } 
   
    
    isPlayerWinner(){
        return this.playerWinner;
    }
              
}