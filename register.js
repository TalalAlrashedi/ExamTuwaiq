let url = "https://68219a1b259dad2655afc217.mockapi.io";
let currentUser = localStorage.getItem("currentUser");

let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  let nameRegister = document.getElementById("name-register").value;
  let passRegister = document.getElementById("password-register").value.trim();
  let emailRegister = document.getElementById("email-register").value.trim();

  if (!nameRegister || !passRegister || !emailRegister) {
    alert("You need fill all fields");
    return;
  }

  //check for username
  if (nameRegister.length <= 4) {
    alert("name must be greater than 4");
    return;
  }

  if (passRegister.length <= 6) {
    alert("password must be greater than 6");
    return;
  }

  let userNew = {
    username: nameRegister,
    password: passRegister,
    email: emailRegister,
  };

  let res = await fetch(`${url}/api/post`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userNew),
  });
  let data = await res.json();

  localStorage.setItem("currentUser", nameRegister, passRegister);
  window.location.href = "./index.html"

  console.log(data);
});
