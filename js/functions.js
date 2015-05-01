// JavaScript Document

function check_empty() {
if (document.getElementById('namecont').value == "" || document.getElementById('email').value == "" || document.getElementById('comment').value == "") {
alert("Fill All Fields !");
} else {
var nombre = document.getElementById('namecont').value;
document.getElementById('form').submit();
alert('Thank you ' + nombre + "! Form Submitted Successfully");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('contactme').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('contactme').style.display = "none";
}

$('#namecont').tooltip({'trigger':'focus', 'title': "What's your name?"});
$('#email').tooltip({'trigger':'focus', 'title': "What's your email?"});
$('#comment').tooltip({'trigger':'focus', 'title': "What's up?"});