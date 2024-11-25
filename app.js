

let button = document.querySelectorAll(".button");
let win = document.querySelector(".winner");
let reset = document.querySelector(".resetBtn");


let turn = "x";
let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6,], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

button.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "red";
    });
});

button.forEach((button) => {
    button.addEventListener(('mouseout'), () => {
        if (button.innerText === "") {

            button.style.backgroundColor = "white";
        }

        else if (button.innerText === "X") {
            button.style.backgroundColor = "yellow";
        } else {
            button.style.backgroundColor = "pink";
        }
    });
});
button.forEach((button) => {
   
    button.addEventListener('click', () => {
        if (button.innerText === "") {

        if (turn === "x") {
            button.innerText = "X";
            button.style.backgroundColor = "yellow";

            turn = "o";
        }
        else {
            button.innerText = "O";
            button.style.backgroundColor = "pink";

            turn = "x";
        }
        checkWinner();
    }
    });
    
    
});

function checkWinner() {
    for (let pattern of winPattern) {
        let val1 = button[pattern[0]].innerText;
        let val2 = button[pattern[1]].innerText;
        let val3 = button[pattern[2]].innerText;
        if ((val1 != "" && val2 != "" && val3 != "") && val1 == val2 && val2 == val3) {
            ;
            winner.innerText = `winner is ${val1}`;
            reset.innerText = "New Game";
            button.forEach((button) => {
            
                button.disabled = true;
            });



        }

    }
}
reset.addEventListener("click", () => {
    button.forEach((button) => {
        button.innerText = "";
        winner.innerText = "";
        reset.innerText = "Reset";
        button.style.backgroundColor = "white";
        turn = "x";
        button.disabled = false;


    });
});













// let button = document.querySelectorAll(".button");
// let win = document.querySelector(".winner");
// let reset = document.querySelector(".resetBtn");

// let turn = "x";
// let winPattern = [
//   [0, 1, 2], [3, 4, 5], [6, 7, 8],
//   [0, 3, 6], [1, 4, 7], [2, 5, 8],
//   [0, 4, 8], [2, 4, 6]
// ];

// button.forEach((button) => {
//     button.addEventListener('mouseover', () => {
//         button.style.backgroundColor = "red";
//     });
// });

// button.forEach((button) => {
//     button.addEventListener('mouseout', () => {
//         if (button.innerText === "") {
//             button.style.backgroundColor = "white";
//         } else if (button.innerText === "X") {
//             button.style.backgroundColor = "yellow";
//         } else {
//             button.style.backgroundColor = "pink";
//         }
//     });
// });

// button.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         if (button.innerText === "") { // Only allow move if the button is empty
//             if (turn === "x") {
//                 button.innerText = "X";
//                 button.style.backgroundColor = "yellow";
//                 turn = "o";
//             } else {
//                 button.innerText = "O";
//                 button.style.backgroundColor = "pink";
//                 turn = "x";
//             }
//             checkWinner();
//         }
//     });
// });

// function checkWinner() {
//     for (let pattern of winPattern) {
//         let val1 = button[pattern[0]].innerText;
//         let val2 = button[pattern[1]].innerText;
//         let val3 = button[pattern[2]].innerText;
        
//         if (val1 !== "" && val1 === val2 && val2 === val3) {
//             win.innerText = `Winner is ${val1}`;
//             reset.innerText = "New Game";
//             button.forEach((btn) => {
//                 btn.disabled = true;
//             });
//             return;
//         }
//     }
// }

// reset.addEventListener("click", () => {
//     button.forEach((btn) => {
//         btn.innerText = "";
//         btn.style.backgroundColor = "white";
//         btn.disabled = false;
//     });
//     win.innerText = "";
//     reset.innerText = "Reset";
//     turn = "x";
// });


