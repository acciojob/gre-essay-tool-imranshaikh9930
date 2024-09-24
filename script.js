const inputVal = document.getElementById("evaluatedText");
const h3Text = document.getElementById("wordCount");


inputVal.addEventListener("input",(e)=>{

    // console.log(e);

    const text = inputVal.value.trim("");
    const wordCount = text === "" ? 0 : text.split(/\s+/).filter(word => word).length;

    h3Text.innerText = wordCount;

})
