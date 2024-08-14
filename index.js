
function repeatsLetterTwoTimes (str) {
    return /(.)(?<=^(?:(?!\1).)*\1(?=(?:(?!\1).)*\1(?:(?!\1).)*$))/gm.test(str);
}

const inputText = document.querySelector('input')
const inputResult = document.querySelector('.inputResult')
const outputResult = document.querySelector('.outputResult')
inputText.addEventListener('keyup', (e)=>{
    if (e.key === "Enter") {
        const node = document.createElement("div")
        const text = document.createTextNode(e.target.value);
        node.appendChild(text)
        if(repeatsLetterTwoTimes(e.target.value)){
           
            outputResult.appendChild (node)
        }else{
            inputResult.appendChild (node)
        }
        
        
    }
})



