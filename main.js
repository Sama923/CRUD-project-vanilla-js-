var productNameInput = document.getElementById('productName');
var productPriceInput=document.getElementById('productPrice');
var productCategoryInput=document.getElementById('productCategory');
var productDescInput=document.getElementById('productDesc');

var productCoctainer=[];

function addProduct (){
  var product={
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescInput.value,
  }

  productCoctainer.push(product);

  console.log(productCoctainer)
  clearProduct()
}

function clearProduct(){
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescInput.value="";

}