function signin() {
    var email = document.getElementById('s_email').value;
    var password = document.getElementById('s_pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
        alert('Register Successfully');
    }) 
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert('Error: ', errorMessage);
      });
}