var name=document.getElementbyid("name").value;
var email=document.getElementbyid("email").value;
var message=document.getElementbyid("message").value;
var url=`https://us-central1-mailer-64d8d.cloudfunctions.net/sendMail3?name=?${name}&email=${email}&mess=${message}`;
fetch(url)
.then((response) => {
alert('Mail Sent);
})
.catch((error) => {
alert('Error);
});
