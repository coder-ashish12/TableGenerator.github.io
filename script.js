  function generateTable() {
    const number = document.getElementById('tableof').value.trim();
    const range = document.getElementById('tillrange').value.trim();

    if ((number === '' && range === '') || (number === 0 && range === 0)) {
      document.getElementById('customAlert').style.display = 'block';
      return; 
    }
    const parsedNumber = parseInt(number);
    const parsedRange = parseInt(range);

    let tableHTML = '<table>';
    tableHTML += `<tr><th>Multiplicant</th><th>Result</th></tr>`;
    for (let i = 1; i <= parsedRange; i++) {
      const result = parsedNumber * i;
      tableHTML += `<tr><td>${parsedNumber} x ${i}</td><td>${result}</td></tr>`;
    }
    tableHTML += '</table>';

    document.getElementById('tableContainer').innerHTML = tableHTML;
  }

  function hideCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
  }
