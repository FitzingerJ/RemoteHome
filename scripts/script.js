function send() {

    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');
    let sendButton = document.getElementById('sendButton');
    let error = document.getElementById('error');
    let errorMessage = "";
    let validation = true;


    if (email.value.length === 0) {
          errorMessage = "E-Mail is empty"
          isValid = false;
    } else {
        if (email.value.includes("@")) {
        } else {
            errorMessage = "Not a valid E-Mail"
            isValid = false;
        }
    }

    if (subject.value.length === 0) {
        errorMessage = "Subject is empty";
        isValid = false;
    }

    if (message.value.length === 0) {
        errorMessage = "Message is empty"
        isValid = false;
    }

    if (isValid) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {}
        xhttp.open('POST', './php/mail.php', true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(`email=${email.value}&subject=${subject.value}&message=${message.value}`);

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                if (this.responseText.includes('false')) {
                    errorMessage = "Something went wrong!"
                }
            }
        }
    } else{
      error.textContent = errorMessage;
    }
}
