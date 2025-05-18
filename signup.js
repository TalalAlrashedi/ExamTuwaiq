let url = "https://68219a1b259dad2655afc217.mockapi.io";
let currentUser = localStorage.getItem("currentUser");

let nameSign = document.getElementById("name-signup").value;
let passSign = document.getElementById("password-signup").value;
let submitbtn = document.getElementById("submit-btn-signup");

submitbtn.addEventListener("click", async (e) => {
  e.preventDefault();

  let userNew = {
    username: nameSign,
    password: passSign,
  };

  try {
    // if (currentUser != nameSign) {
    //   alert(0);
    //   return;
    // }
    let res = await fetch(`${url}/api/post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userNew),
    });
    let data = await res.json();
    console.log(data);

    localStorage.setItem("userLogin", nameSign);

    window.location.href = "./index.html";
  } catch (e) {
    console.log("can't reach apt !!", e);
  }
});
