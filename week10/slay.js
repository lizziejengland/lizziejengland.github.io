

const theButton = document.querySelector('button')
theButton.addEventListener('click', changeColor)

function changeColor(){
  console.log("horray!")
  theTxt.textContent = "you clicked the button!"
  theMain.style.backgroundColor = "yellow"
  

}

