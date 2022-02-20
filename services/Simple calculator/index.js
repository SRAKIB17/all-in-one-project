function inputValue(value){
    const input = value.innerText;
    const inputDisplay = document.getElementById('input');
    const saveOpp = document.getElementById('prevOpp');
    const ans = document.getElementById('ans');

    if(Number.isInteger(parseFloat(input))){
        inputDisplay.innerText += value.innerText;
    }
    else if ( input == 'AC'){
        inputDisplay.innerText = '';
        saveOpp.innerText = '';
        ans.innerText = '';
    }
    else if (input == 'Del'){
        inputDisplay.innerText = inputDisplay.innerText.slice(0,-1);
    }
    else if (input == '.'){
        if(inputDisplay.innerText == ''){
            inputDisplay.innerText = 0+'.'
        }
        else if(inputDisplay.innerText.includes('.')==false){
            inputDisplay.innerText = inputDisplay.innerText+'.'
            console.log(inputDisplay.innerText.match('.'))
        }

    }
    else if(input == '='){
        if (inputDisplay.innerHTML == ''){
            ans.innerText = ans.innerText;
        }
        else{
            console.log(36)
            getCalculate(input);
        }

        // else if(saveOpp)
        
        
    }
    else if (input == 'Rnd'){
        inputDisplay.innerText = Math.random().toFixed(5)
    }
    else if(input == '-' || input == '+' || input == '*' || input == '/'){
        getCalculate(input);
        
    }
}
function getCalculate(input){
    // const input 
    // debugger
    const inputDisplay = document.getElementById('input');
    const saveOpp = document.getElementById('prevOpp');
    const ans = document.getElementById('ans');
    let getOpp = document.getElementById('prevOpp').innerText;
    switch (getOpp) {
        case '':
            ans.innerText = parseFloat(inputDisplay.innerText)
            saveOpp.innerText = input;
            inputDisplay.innerText = '';
            break
        case '+':
            ans.innerText = parseFloat(ans.innerText)+ parseFloat(inputDisplay.innerText);
            saveOpp.innerText = input;
            inputDisplay.innerText = '';
            break;
    
        case '-':
            ans.innerText = parseFloat(ans.innerText) - parseFloat(inputDisplay.innerText);
            saveOpp.innerText = input;
            inputDisplay.innerText = '';
            break
        case '*':
            ans.innerText = parseFloat(ans.innerText) * parseFloat(inputDisplay.innerText)
            saveOpp.innerText = input;
            inputDisplay.innerText = '';
            break
        case '/':
            ans.innerText = parseFloat(ans.innerText) / parseFloat(inputDisplay.innerText)
            saveOpp.innerText = input;
            inputDisplay.innerText = '';
            break
        
    }
}