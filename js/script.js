
document.getElementById("btn").addEventListener("click", function() {
    let value = document.getElementById("dif").value;
    let gridDimension;
    if (value === "normal"){
        gridDimension = 100;
    } else if (value === "hard"){
        gridDimension = 81;
    } else if (value === "crazy"){
        gridDimension = 49;
    } else {
        gridDimension = 0;
    }
    playGame(gridDimension);
});


function playGame(dimension){
    
    bombList=generateBombs(16, dimension);
    console.log(bombList);
    createGrid(dimension,bombList);
}


function createGrid(dimension, redList) {

    const grid = document.querySelector(".grid");
    grid.innerHTML= "";
    console.log(grid);
    let counter=0;

    for (let i = 1; i <= dimension; i++){
        const elementsPerRowColumn = Math.sqrt(dimension);
        const widthHeight = 500 / elementsPerRowColumn;
        const gridElement = document.createElement("div");
        gridElement.classList.add("box");
        gridElement.innerHTML = `<span>${i}</span>`;
        gridElement.style.width = `${widthHeight}px`;
        gridElement.style.height = `${widthHeight}px`;
        // console.log(gridElement);
        grid.append(gridElement);
        gridElement.addEventListener("click", function() {
            if(redList.includes(i)){
                this.classList.add("bomb");
                alert(`hai perso \nil tuo punteggio è ${counter}`);
            } else{
                this.classList.add("atv");
                counter++;
            }

            console.log(counter);

            if (counter === dimension - 16){
                alert("hai vinto");
            }
        });
    }

}


function generateBombs(bombsNumber, dimension) {
    const bombsList = [];
    let j=0;
    while (j<bombsNumber){
        numberBomb = Math.floor(Math.random() * (dimension - 1 + 1) ) + 1;
        if (!bombsList.includes(numberBomb)){
            bombsList.push(numberBomb);
            j++;
        }
    }
    return bombsList;
}

