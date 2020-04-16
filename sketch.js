let container = document.getElementById("container");
//Selects all rows
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

const btn = document.querySelector("#restart");

btn.addEventListener("click", restartGrid);


function restartGrid(){
   /* for(let i=0;i<cells.length;i++){
    cells[i].style.backgroundColor = 'white';
    }*/
    


    let el = document.getElementById("container");
    el.remove();
    
    /*const add = document.createElement('div');
    add.classList.add('addition');
    add.innerText = "Your new paper is ready!";
    container.appendChild(add);*/

    //Creating a new container to attach the rows and columns
    let container = document.createElement('div');
    container.id = "container";
    document.body.appendChild(container);
   
    rows = document.getElementsByClassName("newRow");
    cells = document.getElementsByClassName("newCell");
    
    let question = prompt("Please, enter the new size:","Example: 16x16");
    let dimension= question.split("x");
    let height= dimension[0];
    let width= dimension[1];

    for (let i = 0; i < height; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "newRow";
    };

    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < width; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "newCell";
        };
    }; 
    
    let newArray = document.getElementsByClassName("newCell");

    for(let n=0;n<newArray.length;n++){
    newArray[n].addEventListener('mouseover', newMouseOver);
    newArray[n].addEventListener('mouseout', newMouseOut);
    }

    function newMouseOver(event) {
        event.target.style.backgroundColor = 'red';
      }
    
    function newMouseOut(event) {
        event.target.style.backgroundColor = 'black';
      }
      
     
}

//Creates a default grid sized 16x16 
defaultGrid(16,16);

//Function that creates rows and columns
function defaultGrid(r,c) {
    makeRows(r);
    makeColumns(c);
    
}
    
 //Creates rows
function makeRows(rowsNumber) {   
    console.log("rows number je: " + rowsNumber)
    for (r = 0; r < rowsNumber; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
    console.log("Rows je"+rows.length);
};

//Creates columns
function makeColumns(columnsNumber) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < columnsNumber; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
    console.log("Columns je"+cells.length);
};

//Sets up event listeners
let array = document.getElementsByClassName("cell");

for(let a=0;a<array.length;a++){
array[a].addEventListener('mouseover', mouseOver);
array[a].addEventListener('mouseout', mouseOut);
}

//Changes color when hovering       
function mouseOver(event) {
    event.target.style.backgroundColor = 'red';
  }

function mouseOut(event) {
    event.target.style.backgroundColor = 'black';
  }


