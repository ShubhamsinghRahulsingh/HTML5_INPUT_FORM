//UC1 validate name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Invalid Name";
});

//UC2 Email validation
const email = document.querySelector("#Email");
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[a-z]+([.+-_][a-z]+)*@[a-z]+.[a-z]+([.]+[a-z]+)*$');
    if (emailRegex.test(Email.value)) {
        emailError.textContent = ""
    }
    else {
        emailError.textContent = "Email is not valid";
    }
});