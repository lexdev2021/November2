let a = '';
let iden = '';
let b = '';
let result = '';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['÷', '×', '-', '+'];
const out = document.querySelector('.calc-window');

function Calc(a, iden, b) {
    if((a == '') || (b == '') || (iden == '') || isNaN(a)  || isNaN(b)) {
        return 'Error';
    }
        const operations = {
        '+': () => +a + +b,
        '-': () => a - b,
        '×': () => a * b,
        '÷': () => a / b
    } 
    if(!(iden in operations)) {
        return 'Error2';
    }  
    const result = operations[iden](); 
    return result;         
}
function cleanAll() {
    a = '';
    iden = '';
    b = '';
    result = '';
    out.textContent = 0; 
}
function cleanSign() {
    if(out.textContent.length === 1) {
        out.textContent = 0;
    }
    else out.textContent = out.textContent.slice(0, out.textContent.length - 1);
    if (a !== '' && iden == '') {
        a = out.textContent;
    }
    else if(iden !== '' && b == '') {
        iden = '';
    } 
    else if(b !== '' && result == '') {
        b = out.textContent;
    }
    else a = out.textContent;      
    
    console.log(`a=${a}`, `iden=${iden}`, `b=${b}`, `result=${result}`);
}     
document.querySelector('.delAll').onclick = cleanAll;
document.querySelector('.del').onclick = cleanSign;  
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('delAll')) return;
    let key = event.target.textContent;
    if(numbers.includes(key)) {
        if(b === '' && iden === '') {
            a += key;
            out.textContent = a;
            console.log(`a=${a}`, `iden=${iden}`, `b=${b}`, `result=${result}`);
        }
        else {
            b += key;
            out.textContent = b;
            console.log(`a=${a}`, `iden=${iden}`, `b=${b}`, `result=${result}`);
        }
    }
    if(action.includes(key)) {
        iden = key;
        out.textContent = iden;
        console.log(`a=${a}`, `iden=${iden}`, `b=${b}`, `result=${result}`);
    }
    if(key === '=') {
        result = out.textContent = Calc(a, iden, b);        
        if(result !== '') {
            a = result;
            b = '';                
        }
        console.log(`a=${a}`, `iden=${iden}`, `b=${b}`, `result=${result}`);
    }       
}





     