const productsElement = document.getElementById("products");
const url = `http://localhost:3000`;
const nextBtn = document.getElementsByClassName("next")[0];
const preBtn = document.getElementsByClassName("pre")[0];
const currentPage = document.getElementsByClassName("currentPage")[0];
const nextPage = document.getElementsByClassName("nextPage")[0];
const prePage = document.getElementsByClassName("prePage")[0];

let page = 1;
let limit = 12;

function fetchProducts() {
  axios
    .get(`${url}/products?_start=${limit * (page - 1) + 1}&_limit=${limit}`)
    .then((res) => {
      renderProducts(res.data);
    })
    .catch((err) => console.log(err));
}

function renderProducts(data) {
  let content = "";
  data.forEach((item) => {
    content += /*html */ `
      <div class="product-item">
      <img src="${item.thumbnail}" alt="" />
        <h2>${item.title}</h2>
        <p>Gia: ${item.price}</p>
        <button>Add to cart</button>
      </div>
    `;
  });
  productsElement.innerHTML = content;
}

nextBtn.onclick = function () {
  page++;
  fetchProducts();
  updatePage();
};
preBtn.onclick = function () {
  page--;
  fetchProducts();
  updatePage();
};

function updatePage() {
  currentPage.innerText = page;
  nextPage.innerText = page + 1;
  prePage.innerText = page - 1;
  // page = 1 && (prePage.style.display = "none");
}

updatePage();

fetchProducts();
