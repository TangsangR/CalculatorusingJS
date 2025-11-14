let display = document.getElementById('display');
let historyBox = document.getElementById('historyBox');
let history = [];
 //add value to display
function append(e) {
    if (display.innerText === '0' || display.innerText === 'Error') //if display is 0 or Error, just replace it
    {
        display.innerText = e;
    } 
    else {
        display.innerText += e; 
    
}}
// Clear the display
function clearDisplay() {
    display.innerText = '0';
}
//del last character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

    function calculate() {
    try {
        let expression = display.innerText;
        let result = eval(expression);
        history.push(display.innerText + ' = ' + result); //add to history when answer is calculated
        display.innerText = result;
        updateHistory();
}
    catch (e) {
        display.innerText = 'Error'; 
      }
    }

 //update history box
    function updateHistory() 
    {
      historyBox.innerHTML = history.map(item => `<div>${item}</div>`).join('');
    }
    function toggleHistory() 
    {
      if (historyBox.style.display === 'none' || historyBox.style.display === '') {
        historyBox.style.display = 'block';
      } else {
        historyBox.style.display = 'none';
      }

    }
