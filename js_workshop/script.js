 let firstValue = prompt(" give me a number?")
 let  operator = prompt("give me an operator")
 let secondValue = prompt("give me a second number")
let numberFirstValue = parseInt (firstValue)
let numberSecondValue = parseInt  (secondValue)
function calculate() {
    switch  (operator)  {
        case ("+"):
            result = numberFirstValue + numberSecondValue
            console.log (numberFirstValue + numberSecondValue)
            break
    
        case ("-"):
            result= numberFirstValue - numberSecondValue
            console.log (numberFirstValue - numberSecondValue)
            break
    
        case    ("/"):
            result= numberFirstValue / numberSecondValue
            console.log (numberFirstValue / numberSecondValue)
            break
        case ("*"):
            result=numberFirstValue * numberSecondValue
            console.log (numberFirstValue * numberSecondValue)
            break
        default :
        console.log ("operateur not valid")
        break
    }
}
calculate()

