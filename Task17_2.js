let firstNumber = +prompt('Введите первое число', '');
let iden = prompt('Введите идентификатор действия', ''); 
let secondNumber = +prompt('Введите второе число', ''); 
let operations = {
    sub() {
        return firstNumber - secondNumber;
    },
    sum() {
        return firstNumber + secondNumber;
    },
    mult() {
        return firstNumber * secondNumber;
    },
    div() {
        return firstNumber / secondNumber;
    },
}
function Calc(firstNumber, iden, secondNumber) {
    if((firstNumber == '') || (secondNumber == '') || (iden== '') || isNaN(firstNumber)  || isNaN(secondNumber)) {
        return alert('Error');
    }
    else if(iden == 'sub') {
        return alert(operations.sub());
    }
    else if(iden == 'sum') {
        return alert(operations.sum());
    }
    else if(iden == 'mult') {
        return alert(operations.mult());
    }
    else if(iden == 'div') {
        return alert(operations.div());
    }
    
}
Calc(firstNumber, iden, secondNumber); 


