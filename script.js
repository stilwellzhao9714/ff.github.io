function append(value) {
    document.querySelector('.display').value += value;
}

function calculate() {
    let expression = document.querySelector('.display').value;
    try {
        let result = eval(expression);
        document.querySelector('.display').value = result;
    } catch (error) {
        alert('表達式錯誤');
    }
}

function clearDisplay() {
    document.querySelector('.display').value = '';
}
