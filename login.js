
function setCookies(username, password,expirydays){
    const d = new Date();
    d.setTime(d.getTime() + (expirydays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "username"+  "=" + username +"password" + "=" + password + ";" + expires + ";"
    console.log(document.cookie);
}

const myForm = document.querySelector('form');
myForm.addEventListener('submit', function(event) {
    let username = document.getElementById('username');
    let user = username.value;
    let password = document.getElementById('password');
    let pass = password.value;
   
    // console.log(username);
    // console.log(password);
    // console.log('Form submitted!');
    setCookies(user,pass,3);
    alert("Form data submitted successfully");
    username.value="";
    password.value="";
    window.location.href="http://google.com";

    event.preventDefault(); 
});

