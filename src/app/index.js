import '../css/index.css';
import '../pluginJs/all.min.js';
import UI from './UI';

const ui = new UI();

const board = document.getElementById('board')
const startGame = document.getElementById('start');


board.addEventListener('click', e => {
    const t = e.target,
          d = t.dataset;

    if(d.cords){             
        const cords = ui.getCords(d.cords);         
        if(ui.isNotWinnner())
            ui.drawFigure(t, cords);        
    } 
}) 

startGame.addEventListener('click', () => {
    ui.clearBoard(board.children);
})

