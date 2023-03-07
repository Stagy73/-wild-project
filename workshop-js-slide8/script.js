const random = Math.floor(Math.random() * 100) + 1;
const name = prompt("what is your name?");

let parseRandom = parseInt(random);
let parsePnumber = -1;

function game() {
    while (parsePnumber !== parseRandom) {
        parsePnumber = parseInt(prompt("give me a number between 0 and 100"));
      
        if (parsePnumber > parseRandom) {
          console.log("it is less");
        } else if (parsePnumber < parseRandom) {
          console.log("it is more moron!");
        } else if (parsePnumber === parseRandom) {
          console.log(name + " win !!");
        }
      }
}
game() 
document.write(console.log(game())
