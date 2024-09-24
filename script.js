const inputVal = document.getElementById("evaluatedText");
const h3Text = document.getElementById("wordCount");


inputVal.addEventListener("input",(e)=>{

    // console.log(e);

    const text = inputVal.value.trim("");
    const words = text ? text.split(/\s+/):[];

    h3Text.innerText = words.length

})