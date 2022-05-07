const gameBoard = (() => {

    const field = [];
    field.length = 9;
    return {field}
})()
 

const Player = (name) => {
    // const getName = () => name;
    return {name}
}

const displayFill = (() => {
    let gameArr = ['x','o','x','o','x','o','x','o','x']
    const cells = document.querySelectorAll('.cell')
    const cellsArr = Array.from(cells)
    cellsArr.forEach((elm,i) => elm.addEventListener('click', () => { 
        elm.textContent = gameArr[0]
        gameArr.shift()
        console.log(gameArr)
    }, { once: true }))
})()


// const fillModule = (() => {
//     displayFill()
//     const cells = document.querySelectorAll('.cell')
//     const cellsArr = Array.from(cells)
//     cellsArr.forEach((elm,i) => elm.textContent = field[i])
// })()




    

    

