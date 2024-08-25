
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
let correct = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim(); 
    var emailTxt = email.value.trim(); 
    var passwordTxt = password.value.trim(); 
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstName == '') {
        correct = false;
        errorFunc(fname, 'First Name cannot be empty');
    } else {
        correct = true;
        successFunc(fname);
        errorFunc(fname, '');
    }

    if (lastName == '') {
        correct = false;
        errorFunc(lname, 'Last Name cannot be empty');

    } else {
        correct = true;
        successFunc(lname);
        errorFunc(lname, '');
    }

    if (emailTxt == '') {
        correct = false;
        errorFunc(email, 'Please enter an email');
    } else if (!emailTxt.match(pattern)) {
        correct = false;
        errorFunc(email, 'Looks like this is not an email');
    } else {
        correct = true;
        successFunc(email);
        errorFunc(email, '');
    }

    if (passwordTxt == '') {
        correct = false;
        errorFunc(password, 'Password cannot be empty');
    } else {
        correct = true;
        successFunc(password);
        errorFunc(password, '');
    }
})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');

    if (correct == false) {
        span.style.marginTop = ".2rem";
        span.style.marginBottom = ".8rem";
        span.innerText = message;
        req.className = 'error';
        span.className = 'error-text';
        if (req !== email) {
            req.value = '';
        } else if (req !== email && req !== '') {
            req.style.color = "hsl(0, 100%, 74%)";
        }
         
    } else {
        span.innerText = "";
        span.style.margin = 0;
    }
}

function successFunc(req) {
    req.className = 'success';
}
    