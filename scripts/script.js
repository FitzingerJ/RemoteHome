function send() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let sendButton = document.getElementById('sendButton');
    let error = document.getElementById('error');
    let errorMessage = "";
    let validation = true;


    if (email.length === 0) {
          errorMessage = "E-Mail is empty"
          validation = false;
    } else {
        if (email.includes("@")) {
        } else {
            errorMessage = "Not a valid E-Mail"
            validation = false;
        }
    }

    if (subject.length === 0) {
        errorMessage = "Subject is empty";
        validation = false;
    }

    if (message.length === 0) {
        errorMessage = "Message is empty"
        validation = false;
    }

    if (validation) {
        const xhttp = new XMLHttpRequest();
        let url = "../php/mail.php?&email=" + email + "&password=" + password + "&subject=" + subject + "&message=" + message;
        xhttp.open("GET", url);
        xhttp.send(null);
    } else{
      error.textContent = errorMessage;
    }
}
