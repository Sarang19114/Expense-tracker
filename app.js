const expform = document.getElementById('expenseform');
const explist = document.getElementById('explist');

expform.addEventListener('submit', function(e) {
    e.preventDefault();
    const desp = document.getElementById('desp').value;
    const cat = document.getElementById('category').value;
    const amt = parseFloat(document.getElementById('amt').value);

    if (desp && cat && !isNaN(amt)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${desp}</td><td>${cat}</td><td>${amt.toFixed(2)}</td>`;
        explist.appendChild(newRow);

        document.getElementById('desp').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amt').value = '';
    } else {
        alert('Please fill all fields with valid data');
    }
});

