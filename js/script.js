"use strict";


// let ulLists = document.querySelector("#lists");
// let link = document.querySelector("#link");
// let displayButton = document.querySelector("#displayButton");

// displayButton.onclick = function(){
//     link.style.backgroundColor = "red";
// };


// link.target = "_blank";
// link.href = "http://www.facebook.com";
// link.innerHTML = "Facebook";
// link.dataset.rustem = "test";


// function myMove() {
//     let elem = document.querySelector("#animate");
//     let pos = 0;
//     let animateProcess = setInterval(frame, 1);

//     function frame() {
//         if (pos == 450) {
//             clearInterval(animateProcess);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// window.onscroll = function () {
//     console.log(document.documentElement.scrollTop);
//  };

//  function test(){
//      console.log("test worked");
//  }


let cardDeck = document.querySelectorAll(".card-deck");
console.log(cardDeck);

let myCard = document.querySelectorAll(".card-deck .card");
console.log(myCard);
let button = myCard.querySelector("button");
button.classList.replace("btn-primary", "btn-success");
button.addEventListener("click", function(){
    button.parentElement.parentElement.classList.toggle("color");
});

console.log(button);