
function compare(){

// * If the three variables are equal, display "The three variables are the same" in the console
if (pars1Number === pars2Number && pars1Number === pars3Number) {
    console.log("the variables are the same!")
  
  }
  
  // * If only two of the variables are equal, display "Two of the variables are the same" in the console
  else if (pars1Number === pars2Number || pars2Number === pars3Number || pars1Number === pars3Number) {
    console.log("2 variables are the same!")
  }
  // * If the variables are all different display "all variables are different" in the console
  
  else if (pars1Number !== pars2Number && pars2Number !== pars3Number && pars1Number !== pars3Number) {
    console.log("all variable are differente!")
  }

}


// * Declare and define three variables using a numerical value3 
const number1 = prompt("what is the first number? ")
const number2 = prompt("what is the second number? ")
const number3 = prompt("what is the third number? ")
const pars1Number = parseInt(number1)
const pars2Number = parseInt(number2)
const pars3Number = parseInt(number3)

// * If the three variables are equal, display "The three variables are the same" in the console
if (pars1Number === pars2Number && pars1Number === pars3Number) {
  console.log("the variables are the same!")

}

// * If only two of the variables are equal, display "Two of the variables are the same" in the console
else if (pars1Number === pars2Number || pars2Number === pars3Number || pars1Number === pars3Number) {
  console.log("2 variables are the same!")
}
// * If the variables are all different display "all variables are different" in the console

else if (pars1Number !== pars2Number && pars2Number !== pars3Number && pars1Number !== pars3Number) {
  console.log("all variable are differente!")
}  