document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formadd'); // Updated selector

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;

        // Here you can process the data, e.g., send it to a server or update the UI
        console.log('User Data:', {
            username,
            password,
            email,
            contact
        });

        // You might want to clear the form fields after submission
        form.reset();
    });
});