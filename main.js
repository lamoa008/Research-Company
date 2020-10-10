const width = 125
const height = 50
const size = 10

let blocks = {
    'Grass': 'assets/grass.png'
}

let grid = new Array(width)

for (let i = 0; i < width; i++) {
    grid[i] = new Array(height)
    for(let j=0; j < height; j++){
        grid[i][j] = 'Grass'
    }
}

window.onload = function() {
    console.log(grid)
    let game = document.getElementById('canvas')
    //game.width = width * size
    //game.height = height * size
    console.log(game)
    let ctx = game.getContext('2d')
    for (let i = 0; i < width; i++) {
        grid[i] = new Array(height)
        for(let j=0; j < height; j++){
            let block = grid[i][j] 
            if (block === 'Grass'){
                let img = document.createElement('img')
                img.src = blocks['Grass']
                img.width = size
                img.height = size
                ctx.drawImage(img, i*size, j*size)
            }
        }
    }
}
