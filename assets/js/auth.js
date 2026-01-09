const url = "http://localhost:3000";

const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");

formRegister &&
  formRegister.addEventListener("submit", function () {
    event.preventDefault();

    const formData = new FormData(formRegister);
    const data = Object.fromEntries(formData);

    // fetch(`${url}/register`).then().then().catch()

    axios
      .post(`${url}/register`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

formLogin &&
  formLogin.addEventListener("submit", function () {
    event.preventDefault();

    const formData = new FormData(formLogin);
    const data = Object.fromEntries(formData);

    // fetch(`${url}/register`).then().then().catch()

    axios
      .post(`${url}/login`, data)
      .then((res) => {
        localStorage.setItem("users", JSON.stringify(res.data.user));
        localStorage.setItem("accessToken", res.data.accessToken);
        alert("Dang nhap thanh cong");
        window.location.href = "./index.html";
      })
      .catch((err) => {
        console.log(err);
      });
  });
