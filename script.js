document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('story-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the values entered by the user
        const name = document.getElementById('name').value;
        const story = document.getElementById('story').value;

        // Display a confirmation message
        alert(`Thank you, ${name}! Your story has been submitted:\n\n${story}`);

        // Reset the form fields
        form.reset();
    });

    // Google Sign-In function
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('User signed in!');
        console.log('Name: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());
        // Agar aap aur kuch karna chahte hain jab user sign in karta hai, toh yahaan code likhein
    }
});
