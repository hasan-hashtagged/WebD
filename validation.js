function checkfname() {
  var regex=/^[A-Za-z]{2,15}$/
  var val=document.getElementById('fname').value;
  if(regex.test(val)) {
    document.getElementById('fnameprompt').innerHTML="valid";
  }
  else {
    document.getElementById('fnameprompt').innerHTML="Please Enter characters between 2-15";
  }
}
function checklname() {
  var regex=/^[A-Za-z]{5,15}$/
  var val=document.getElementById('lname').value;
  if(regex.test(val)) {
    document.getElementById('lnameprompt').innerHTML="valid";
  }
  else {
    document.getElementById('lnameprompt').innerHTML="Please Enter characters between 5-15";
  }
}
function checkphone() {
  var regex=/^\d{10}$/
  var val=document.getElementById('phone').value;
  if(regex.test(val)) {
    document.getElementById('Phoneprompt').innerHTML="valid";
  }
  else {
    document.getElementById('Phoneprompt').innerHTML="Please Enter 10 digits";
  }
}
function validateall() {
  var val1=document.getElementById('fname').value;
  var val2=document.getElementById('lname').value;
  var val3=document.getElementById('phone').value;
  var val4=document.getElementsByName('bday').value;
  document.getElementById('printer').innerHTML="<h1>The details are:</h1><br>"+val1+" "+val2+"<br>"+"<strong>Mobile No.:</strong>"+" "+val3+"<br>"+val4+"<br>";
}
