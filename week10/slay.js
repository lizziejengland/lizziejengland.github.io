console.log("the message!")


let theUser = "rebecca"
let theNumber = 800000
console.log(theUser + " " + theNumber)
// legacey variable -- var
// ES6: let , const

const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')

theButton.addEventListener('click', changeColor)


function changeColor(){
    console.log("horray!")
    theTxt.textContent = "you clicked the button!"
    theMain.style.backgroundColor = "yellow"
    

}
