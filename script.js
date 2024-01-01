document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resultsContainer = document.getElementById('resultsContainer');

    if (validateEmail(email)) {
        // Append the form submission message
        resultsContainer.innerHTML += `<p>Form submitted successfully. Name: ${name}, Email: ${email}</p>`;
    } else {
        resultsContainer.innerHTML += '<p class="error">Please enter a valid email address.</p>';
    }
});

document.getElementById('generateRandomNumberBtn').addEventListener('click', generateRandomNumber);
document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000);
    const resultsContainer = document.getElementById('resultsContainer');
    const existingContent = resultsContainer.innerHTML;

    // Append the new random number below the existing content
    resultsContainer.innerHTML = existingContent + `<p>Random Number: ${randomNumber}</p>`;
}

function changeBackgroundColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

