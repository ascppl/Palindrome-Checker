document.getElementById('text-input').addEventListener('input', function() {
    const inputText = this.value;
    if (!inputText) {
        document.getElementById('result').textContent = '';
        return;
    }

    const cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    const resultElement = document.getElementById('result');
    if (cleanedText === reversedText) {
        resultElement.textContent = `"${inputText}" is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${inputText}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
});

document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    const resultElement = document.getElementById('result');
    if (cleanedText === reversedText) {
        resultElement.textContent = `"${inputText}" is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${inputText}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }

    // Clear the input field and result after displaying the result
    document.getElementById('text-input').value = '';
    setTimeout(() => {
        resultElement.textContent = '';
    }, 3000); // Clear the result after 3 seconds
});
 