function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "secondsonofadebayo@gmail.com",
	Password : "gunna_gunna",
	To : 'youngzaint149@gmail.com',
	From : "secondsonofadebayo@gmail.com",
	Subject : "hey",
	Body : document.getElementById("email").value
	}).then(
		message => alert("mail sent successfully")
	);
}

// document.getElementById("email").value