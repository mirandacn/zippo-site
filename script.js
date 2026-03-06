document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const downloadButton = document.getElementById('download-cv');

    // Validate email function
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    // Subscribe function
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;

        if (validateEmail(email)) {
            alert('Subscription successful! Thank you for subscribing.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Download CV functionality
    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'path/to/your/cv.pdf'; // Adjust the path to your CV PDF
        link.download = 'your_cv.pdf'; // Set the file name for the download
        link.click();
    });
});