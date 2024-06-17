//Fetch dom elements
const displayColors = document.getElementById('colorDisplay')
const displayColorName = document.getElementById("ColorInTags")
const btnGenerationColor = document.getElementById("generateColorBtn")

//Main variables

const colors = ['#c21492','#14c216','#e0f14f','#e2640a','#47eeed','#182ae8','#250617','#e89ec7','#f61b2e','#f6a247','#979db9']


//add event listener

btnGenerationColor.addEventListener('click',function(){
    console.log('how dare you click on me ?')
    const randomIndex = Math.floor(Math.random() * colors.length)
    const chooseColor = colors[randomIndex]
    displayColorName.textContent = chooseColor
    displayColors.style.backgroundColor = chooseColor
})
