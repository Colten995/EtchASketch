var mouseDown = false;
document.addEventListener("mousedown", function(e){
    mouseDown = true;
});
document.addEventListener("mouseup", function(e){
    mouseDown = false;
})
function getGridSize()
{
    numOfColumns = prompt("Enter number of columns (for now don't enter anything greater than 100)");
    numOfRows = prompt("Enter number of rows (for now don't enter anything greater than 100)");

    generateGrid(numOfColumns, numOfRows);
}

function generateGrid(numOfColumns, numOfRows)
{
    let boxSideLength = 100 / numOfColumns;
    boxSideLength = boxSideLength.toString() + "%";
    console.log(boxSideLength);

    const containerDiv = document.getElementById("container");

    //delete any boxes in the grid by making the inner HTML empty
    containerDiv.innerHTML = "";
    containerDiv.style.border = "2px solid black";
    containerDiv.style.height = "750px";
    containerDiv.style.width = "750px";
    containerDiv.style.display = "flex";
    containerDiv.style.flexWrap = "wrap";
    containerDiv.style.backgroundColor = "blue"

    let numOfBoxes = 0;

    let grid = [,];

    for(let i = 0; i < numOfColumns; i++)
    {
        for(let j = 0; j < numOfRows; j++)
        {
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.width = 100 / numOfColumns + "%";
            box.style.height = 100 / numOfRows + "%";
            box.style.flexGrow = 0;
            box.style.flexShrink = 0;
            box.style.flexBasis = boxSideLength;
            box.style.boxSizing = "border-box";
            box.style.border = "2px solid black";
            box.style.background = "red";
            // box.style.flexBasis = 1 / numOfRows;
            console.log(box);
            box.addEventListener("mouseover", function(e){
                if(mouseDown)
                {
                    e.target.style.background = "blue";
                }
            });
            grid[i,j] = box;
            containerDiv.appendChild(box);
            numOfBoxes++;
        }
    }

    console.log(grid);
    console.log(numOfBoxes)
}


