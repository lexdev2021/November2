 
let a = +prompt('Введите первое число', '');
let iden = prompt('Введите идентификатор действия', ''); 
let b = +prompt('Введите второе число', '');  
function Calc(a, iden, b) {
    if((a == '') || (b == '') || (iden == '') || isNaN(a)  || isNaN(b)) {
        return alert('Error');
    }
     const operations = {
        '+': () => +a + +b,
        '–': () => a - b,
        '×': () => a * b,
        '÷': () => a / b
    } 
    if(!(iden in operations)) {
        return alert('Error2');
    }  
     const result = operations[iden](); 
     return alert(result);         
} 
Calc(a, iden, b); 
