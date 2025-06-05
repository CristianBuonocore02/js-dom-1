const imgOff = document.getElementById("imgOff")
const imgOn = document.getElementById("imgOn")
const buttonOn = document.getElementById("buttonOn")
const buttonOff = document.getElementById("buttonOff")

buttonOn.addEventListener('click', function () {

    buttonOn.style.display = "none"
    buttonOff.style.display = "block"
    imgOn.style.display = "block"
    imgOff.style.display = "none"

})

buttonOff.addEventListener('click', function () {

    buttonOn.style.display = "block"
    buttonOff.style.display = "none"
    imgOn.style.display = "none"
    imgOff.style.display = "block"

})