uname = document.getElementById("username").value;
pw = document.getElementById("password").value;

function validate() {
  let isRequired = false;
  if (uname == "admin" && pw == "111111") {
    alert("validation succeed");
    window.location = "data.html";
    isRequired = True;
  } else {
    alert("validation failed");
  }
}
// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validate();
});
