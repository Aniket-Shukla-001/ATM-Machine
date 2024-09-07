let balance = 1000; // Initial balance
let pendingTransaction = null;

function updateMessage(message) {
    document.getElementById('message').innerText = message;
}

function checkBalance() {
    updateMessage(`Your balance is ₹${balance}`);
}

function deposit() {
    pendingTransaction = 'deposit';
    updateMessage('Enter the amount to deposit:');
    document.getElementById('amount').focus();
}

function withdraw() {
    pendingTransaction = 'withdraw';
    updateMessage('Enter the amount to withdraw:');
    document.getElementById('amount').focus();
}

function submitAmount() {
    const amount = parseFloat(document.getElementById('amount').value);
    document.getElementById('amount').value = '';

    if (!amount || amount <= 0) {
        updateMessage("Please enter a valid amount.");
        return;
    }

    if (pendingTransaction === 'deposit') {
        balance += amount;
        updateMessage(`You deposited ₹${amount}. New balance is ₹${balance}`);
    } else if (pendingTransaction === 'withdraw') {
        if (amount > balance) {
            updateMessage("Insufficient funds.");
        } else {
            balance -= amount;
            updateMessage(`You withdrew ₹${amount}. New balance is ₹${balance}`);
        }
    } else {
        updateMessage("Please select a transaction.");
    }

    pendingTransaction = null;
}
