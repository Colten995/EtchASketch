const numOfRows = 16;
const numOfColumns = 16;

const containerDiv = document.getElementById("container");

let numOfBoxes = 0;

let grid = [,];

for(let i = 0; i < numOfColumns; i++)
{
    for(let j = 0; j < numOfRows; j++)
    {
        let box = document.createElement("div");
        box.classList.add("box");
        console.log(box);
        box.addEventListener("mouseover", function(e){
            e.target.style.background = "blue";
        })
        grid[i,j] = box;
        containerDiv.appendChild(box);
        numOfBoxes++;
    }
}


// grid.forEach((box, row) => {
//     box = document.createElement("div");
// })

console.log(grid);
console.log(numOfBoxes)