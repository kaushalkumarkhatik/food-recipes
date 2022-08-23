
function validation() {
 var name = document.getElementById("name").value;

 var email = document.getElementById("email").value;

 var number = document.getElementById("number").value;

 var message = document.getElementById("message").value;

 var error_message = document.getElementById("error_message");

 error_message.style.padding = "10px";

 var text;

 if (name.length < 2) {
  text = "Please Enter valid Name";
  

  error_message.innerHTML = text;
  error_message.style.display="block";
  
  return false;
 }

 if (email.indexOf("@") == -1 || email.length < 6) {
  text = "Please Enter valid Email";

  error_message.innerHTML = text;
error_message.style.display="block";
  return false;
 }

 if (isNaN(number) || number.length != 10) {
  text = "Please Enter valid Phone Number";

  error_message.innerHTML = text;
error_message.style.display="block";
  return false;
 }

 if (message.length <= 20) {
  text = "Please Enter More Than 20 Characters";

  error_message.innerHTML = text;
  error_message.style.display="block";
  return false;
 }

   // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDXPzaZHcCBWeVR2J8ByzRRt31DLDtw6Zg",
    authDomain: "contactform-fb111.firebaseapp.com",
    databaseURL: "https://contactform-fb111-default-rtdb.firebaseio.com",
    projectId: "contactform-fb111",
    storageBucket: "contactform-fb111.appspot.com",
    messagingSenderId: "486980805572",
    appId: "1:486980805572:web:fd075e00cae99745bdba91"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("myform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var msg = getElementVal("message");
  var number =getElementVal("number")

  saveMessages(name, email, number,msg);

  //   enable alert
  
  swal("Successful", "Submit form successfully!", "success");

  //   reset the form
  setTimeout(()=>{
    document.location.reload(true)
  },1000)
 
  
}

const saveMessages = (name, email, number,msg) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    number : number,
    msg: msg,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
  


 return true;
}

