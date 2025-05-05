let btn = document.querySelector('.analyze-btn');
let resetBtn = document.querySelector('.reset-btn');
let inputText = document.querySelector('#textInput');
let inputSearch = document.getElementById('inputSearch');
let resultContainer = document.querySelector('.result-container')

var operation = [];
let searchWord;
let lastInput;

function analyze() {
    // STOP RENDER HTML FOR SAME INPUT
    if (lastInput == inputText.value) {
        // console.log("return before render");
        return;
    }

    // check search word has any value
    if (inputSearch.value) {
        searchWord = inputSearch.value;
    }

    // check input in not an empty
    if (!inputText.value) { return alert('Enter a string ') };
    if (!inputSearch.value) { return alert('Enter a Search string ') };


    let main = document.querySelector('.result-container');
    let container = document.querySelector('.method-container');

    // let strConstructor = new String(inputText.value);
    let input = inputText.value;

    operation = [
        // 1.Creating Strings
        { name: "", value: `<h3>1.Creating Strings</h3>` },
        { name: "Simple String : ", value: input },
        { name: "Template Literal : ", value: `Processed text: ${input}` },
        { name: "String Constructor : ", value: `${new String(inputText.value)} (Type of : ${typeof (new String(inputText.value))})` },
        // 2. String Concatenation
        { name: "", value: `<h3>2. String Concatenation</h3>` },
        { name: "Using + Operator : ", value: "input:" + input + "!" },
        { name: "Using concat() Method : ", value: input.concat(" is awesome text!") },
        { name: "String + Number : ", value: input + 42 },
        // 3. String Methods
        { name: "", value: `<h3>3. String Methods</h3>` },
        { name: "Length : ", value: input.length },
        { name: "Uppercase : ", value: input.toUpperCase() },
        { name: "Lowercase : ", value: input.toLowerCase() },
        { name: "4th Character : ", value: input.at(3) },
        { name: `Index of '${searchWord}' : `, value: input.indexOf(searchWord) },
        { name: `Last Index of '${searchWord}' :`, value: input.lastIndexOf(searchWord) },
        { name: `Contains '${searchWord}' : `, value: input.includes(searchWord) },
        { name: `Match '${searchWord}' : `, value: input.match(searchWord) },
        { name: `Search '${searchWord}' : `, value: input.search(searchWord) },
        { name: "Starts with 'Sample'  : ", value: input.startsWith('Sample') },
        { name: "Ends with 'analysis' : ", value: input.endsWith('analysis') },
        { name: "Substring (first 10) : ", value: input.substring(0, 10) },
        { name: "Slice (last 10) : ", value: input.slice(-10) },
        { name: "Replace 'text' with 'content : ", value: input.replace('text', 'content') },
        { name: "Trimmed Text : ", value: input.trim() },
        { name: "Words Array: : ", value: input.split() },
        { name: "Repeated Text (3x) : ", value: input.repeat(3) },
        { name: "Padded Start: : ", value: input.padStart(20, "-") },
        { name: "Padded End : ", value: input.padEnd(20, '*') },
        // 4. Number Conversions
        { name: "", value: `<h3>4. Number Conversions</h3>` },
        { name: "String '123' to Number : ", value: `${parseInt('123')} (Type : ${typeof (parseInt('123'))})` },
        { name: "String '45.67' to Float : ", value: `${parseFloat('123')} (Type : ${typeof (parseFloat('123'))})` },
        { name: "Number 100 to String : ", value: `${String(100)} (Type : ${typeof (String(100))})` },
        { name: "Number 100 to String (toString) : ", value: `${Number(100).toString()} (Type : ${typeof (Number(100).toString())})` },
    ]

    operation.map(item => {
        let p = document.createElement('p');
        p.innerHTML = `<strong>${item.name}</strong>${item.value}`;
        main.appendChild(p);
    })
    lastInput = inputText.value;

    /* operation.map(item => {
        let div;
        if (item.name == "") {
            div = document.createElement('div');
            div.classList.add("result-container");
            div.innerHTML = item.value;
            container.appendChild(div);
            
         } else {
         const p = document.createElement('p');
         p.innerHTML = `<strong>${item.name}</strong>${item.value}`;
         if(div){
             div.appendChild(p);
         }else{
             container.appendChild(p);
         }
         
     } 
});*/
}
btn.addEventListener("click", analyze);

// reset function
function reset() {
    inputText.value = "";
    inputSearch.value = ""
    // operation = [];
    resultContainer.innerHTML = '';
}

resetBtn.addEventListener("click", reset)









