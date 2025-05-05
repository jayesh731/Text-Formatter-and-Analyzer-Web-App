let btn = document.querySelector('.analyze-btn');
let resetBtn = document.querySelector('.reset-btn');
let inputText = document.querySelector('#textInput');

let operation = [];

function analyze() {


    // check input in not an empty
    if(!inputText.value){ return alert('Enter a string ') }

    let main = document.querySelector('.result-container');
    let container = document.querySelector('.method-container')

    let strConstructor = new String(inputText.value);
    let input = inputText.value;
    // input.padSatrt()

    operation = [
        // 1.Creating Strings
        { name: "", value: `<h3>1.Creating Strings</h3>` },
        { name: "Simple String : ", value: input },
        { name: "Template Literal : ", value: `Processed text: ${input}` },
        { name: "String Constructor : ", value: strConstructor },
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
        { name: "Index of 'text' : ", value: input.indexOf('text') },
        { name: "Last Index of 'text' : ", value: input.lastIndexOf('text') },
        { name: "Contains 'text' : ", value: input.includes('text') },
        { name: "Starts with 'Sample : ", value: input.startsWith('Sample') },
        { name: "Ends with 'analysis' : ", value: input.endsWith('analysis') },
        { name: "Substring (first 10) : ", value: input.substring(1, 10) },
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

   /*  operation.map(item => {
        let div;
        if (item.name == "") {
            div = document.createElement('div');
            div.classList.add("result-container");
            container.appendChild(div);
            console.log(div);

        } else {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${item.name}</strong>${item.value}`;
            div.appendChild(p);
        }

    }); */


    //empty
    operation = [];
}

btn.addEventListener("click", analyze);

resetBtn.addEventListener("click", function(){
    console.log("reset");
    inputText.value = " ";
    operation.length = 0;
})









