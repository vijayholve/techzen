let form=document.querySelector('form');
function operation(){
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    operation();
    form.reset();
})