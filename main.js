var productContainer;
if (localStorage.getItem("products") != null) {
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayProduct();
} else {
  productContainer = [];
}

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");

//var productContainer = [];

function addProduct() {
  // Main Function
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };

  productContainer.push(product);

  localStorage.setItem("products", JSON.stringify(productContainer));
  console.log(productContainer);
  clearProduct();
  displayProduct();
}

function clearProduct() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}

function displayProduct() {
  var tableHold = ``;

  for (var i = 0; i < productContainer.length; i++) {
    tableHold += `<tr>
    <td>${i}</td>
    <td>${productContainer[i].name}</td>
    <td>${productContainer[i].price}</td>
    <td>${productContainer[i].category}</td>
    <td>${productContainer[i].desc}</td>
    <td><button type="button" class="btn btn-warning">Update</button>
    </td>
    <td><button type="button" class="btn btn-warning">Delete</button>
    </td>
    </tr>`;
  }

  document.getElementById("tableBody").innerHTML = tableHold;
}
