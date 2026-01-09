const productsElement = document.getElementById("products");
const url = `http://localhost:3000`;

let content = "";
axios
  .get(`${url}/products`)
  .then((res) => {
    res.data.forEach((item) => {
      content += /*html */ `
        <div>
          <h2>${item.name}</h2>
          <p>Gia: ${item.price}</p>
          <button>Add to cart</button>
        </div>
      `;
    });
    productsElement.innerHTML = content;
  })
  .catch((err) => console.log(err));
