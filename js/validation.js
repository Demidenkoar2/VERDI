const form = document.getElementById('form');
const formInput = document.querySelectorAll('.input__elem');
const inputName = document.getElementById('name');
const inputLastName = document.getElementById('second-name')
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
 
// let x = 'String Number'
// x = x.toLowerCase()
// console.log(x)


function validEmail(email) {
    let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
}

function validPhone(phone) {
    // ru
    // let regularExpression = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    let regularExpression = /^[0-9]|\. |,|:*$/
    // ru
    return regularExpression.test(String(phone).toString());
}
    
form.onsubmit = function() {
    let emailVal = inputEmail.value;
    let nameVal = inputName.value.length;
    let lastNameVal = inputLastName.value.length
    console.log(nameVal, lastNameVal)
    let phoneVal = inputPhone.value;
    let emptyInputs = Array.from(formInput).filter(input => input.value === '')

    formInput.forEach(function(input) {
        if(input.value === '' || input.value === ' ') {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false
    }


    // ????
    if (nameVal > 15) {
        inputName.classList.add('error');
        console.log('Long name')
        return false
    } else {
        inputName.classList.remove('error')
    }

    if (lastNameVal > 20) {
        inputLastName.classList.add('error');
        console.log('Long name')
        return false
    } else {
        inputLastName.classList.remove('error')
    }
    // ?????


    if (!validEmail(emailVal)) {
        console.log('email is not valid');
        console.log(emailVal);
        inputEmail.classList.add('error');
        return false
    } else {
        inputEmail.classList.remove('error');
    }

    if(!validPhone(phoneVal)) {
        console.log('phone is not valid');
        console.log(phoneVal);
        inputPhone.classList.add('error')
    } else {
        inputPhone.classList.remove('error')
    }

    return false
}