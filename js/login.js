//step:1.... add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step:2... get the email address inside the email address field
    // always remember to to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step:3...get password
    // 3.a...set id on the html element
    // 3.b...get the element
    // 3.c...get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // danger ...do not verify email password on the client side
    // step:4....varify email and password and check whether valid or not
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('tui password vule gecis toke ami tejjio shontan ghoshona korlam')
    }
})