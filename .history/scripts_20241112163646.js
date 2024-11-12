let form=document.querySelector('form');
function operation(){
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "vijaygholve77v@gmail.com",
    Password : "69AB65A149AC1234CDF2499091742FCD9FBB",
    To : '',
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