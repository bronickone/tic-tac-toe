// const gameBoard = (() => {

//     const field = [];
//     field.length = 9;
//     return {field}
// })()
const Player = (name) => {
    // const getName = () => name;
    return {name}
}

const displayFill = (() => {
    
    let field = [1,2,3,4,5,6,7,8,9]
    
    let gameArr = ['x','o','x','o','x','o','x','o','x']
    
    const cells = document.querySelectorAll('.cell')
    const cellsArr = Array.from(cells)
    const display = document.querySelector('.gameDisplay')
    const gameBoard = document.querySelector('.gameBoard')
    
    
    cellsArr.forEach((elm,i) => {
        cellListener = () => { 
            elm.textContent = gameArr[0]
            field[i] = gameArr[0]
            gameArr.shift()  
            
            const checkFunction = (() => {
                if (!gameArr[0]) {
                        display.textContent = 'DRAW GAME'
                        gameBoard.style.zIndex = '-1'
                    }    
                if ((field[0] == field [1] && field[0] == field [2]) ||
                    (field[3] == field [4] && field[3] == field [5]) ||
                    (field[6] == field [7] && field[6] == field [8]) ||
                    (field[0] == field [3] && field[0] == field [6]) ||
                    (field[1] == field [4] && field[1] == field [7]) ||
                    (field[2] == field [5] && field[2] == field [8]) ||
                    (field[0] == field [4] && field[0] == field [8]) ||
                    (field[2] == field [4] && field[2] == field [6])){
                        display.textContent = `${field[i]} WINS`
                        gameBoard.style.zIndex = '-1'
                    }
            })()
        }
    
        elm.addEventListener('click', cellListener, { once: true })    
    })
    
    const pvpButton = document.querySelector('.pvp')
        const startWindow = document.querySelector('.startWindow')

        pvpButton.addEventListener('click', () => {
            gameBoard.style.zIndex = '1';
            startWindow.style.display = 'none'
        })
    
})()












// const fillModule = (() => {
//     displayFill()
//     const cells = document.querySelectorAll('.cell')
//     const cellsArr = Array.from(cells)
//     cellsArr.forEach((elm,i) => elm.textContent = field[i])
// })()




    

    

