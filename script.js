const grid = document.querySelector('#grid');


function createOneColumn() {
    let numberOfSquares = userInput;
    let squareArray = new Array();

    for (let i = 0; i < numberOfSquares; i++) {
        squareArray[i] = document.createElement('div');
        squareArray[i].id = 'square' + i;
        squareArray[i].className = 'square';

        squareArray[i].setAttribute('style',
        'width:52px;height:52px;background-color:aqua;padding:0px;margin:0px');

        squareArray[i].addEventListener('mouseover', () => {
            squareArray[i].setAttribute('style',
        'width:52px;height:52px;background-color:red;padding:0px;margin:0px');
        });

        grid.appendChild(squareArray[i]);
        
    };
};

function createGrid (){
    for (let i = 0; i <= 16; i++){
        createOneColumn();
    };
};

let userInput = 0;

const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', () =>{
    userInput = prompt('Enter the number of squares per side: ');
    if (userInput > 100){
        return alert('Input less!');
    };

    while (grid.firstChild){
        grid.removeChild(grid.lastChild);
    };
    createGrid();
});

