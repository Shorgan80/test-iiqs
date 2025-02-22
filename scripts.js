document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'formSubmission',
        'formType': 'contact',
        'formData': {
            'name': name,
            'email': email,
            'message': message
        }
    });

    // Simulate form submission
    alert('Thank you for contacting us!');
});