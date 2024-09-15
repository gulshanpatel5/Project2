const textArea = document.getElementById("textarea")
const totalChar= document.getElementById("total-char")
const remainChar = document.getElementById("remaining-character")



textArea.addEventListener("keyup", () => {

    updateCounter()
    


})
function updateCounter(){
    totalChar.innerText = textArea.value.length
    remainChar.innerText = 60 - textArea.value.length

}
