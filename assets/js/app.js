// Book Constructor
function Book(rollno, email, password) {
  this.rollno = rollno;
  this.email = email;
  this.password = password;
}

// UI Constructor
function UI() {}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('rollno').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}

// Event Listeners
document.getElementById('submit').addEventListener('click', function(e){
  // Get form values
  const rollno = document.getElementById('rollno').value,
        password = document.getElementById('password').value,
        email = document.getElementById('email').value

  // Instantiate book
  const book = new Book(rollno, email, password);

  // Instantiate UI
  const ui = new UI();

  window.location.href = "candidates.html";
  ui.clearFields();
  e.preventDefault();
});