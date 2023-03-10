/*
last Pagestage
*/
var currentPageState = "m|f";
var lastPageState = "m|f";
var size = "M"
const size_list = {"XS" : 0, "S" : 1, "M" : 2, "L" : 3, "XL" : 4}

/*
Product Definition
*/
const glovesProducts = [
    {name: "gloves_1", price: 19.99, color: "grün"},
    {name: "gloves_2", price: 19.99, color: "gelb"},
    {name: "gloves_3", price: 13.99, color: "blau"},
    {name: "gloves_4", price: 19.99, color: "orange"},
    {name: "gloves_5", price: 19.99, color: "grün"},
    {name: "gloves_6", price: 22.99, color: "gelb"},
    {name: "gloves_7", price: 19.99, color: "blau"},
    {name: "gloves_8", price: 19.99, color: "orange"}
];

const scarfProducts = [
    {name: "scarf_1", price: 42.00, color: "blau"},
    {name: "scarf_2", price: 42.00, color: "blau"},
    {name: "scarf_3", price: 42.00, color: "pink"},
    {name: "scarf_4", price: 42.00, color: "blau"},
    {name: "scarf_5", price: 42.00, color: "gelb"},
    {name: "scarf_6", price: 42.00, color: "lila"},
    {name: "scarf_7", price: 42.00, color: "rot"},
    {name: "scarf_8", price: 42.00, color: "grün"}
];

const tshirtProducts = [
    {name: "tshirt_1", price: 69.00, color: "blau"},
    {name: "tshirt_2", price: 69.50, color: "blau"},
    {name: "tshirt_3", price: 39.99, color: "gelb"},
    {name: "tshirt_4", price: 43.49, color: "rot"},
    {name: "tshirt_5", price: 40.20, color: "grün"},
    {name: "tshirt_6", price: 32.09, color: "weiß"},
    {name: "tshirt_7", price: 21.00, color: "orange"},
    {name: "tshirt_8", price: 31.99, color: "weiß"},
]

const categoryProducts = [
    {category: "gloves", products: glovesProducts},
    {category: "scarf", products: scarfProducts},
    {category: "tshirt", products: tshirtProducts}
];


/*
Alexander Kehr
Die Funktion lässt elemente verschwinden
@parameter = targetId
*/
function hideElement(targetId){
    document.getElementById(targetId).style.display = "none";
}

/*
Alexander Kehr
Die Funktion lässt elemente erscheinen
@parameter = targetId
*/
function showElement(targetId){
    document.getElementById(targetId).style.display = "block";
}

/*
Alexander Kehr
Die Funktion setzt den Page state, also die Ansicht innerhalb des viewManagers.
@parameter = targetId
*/
function setPageState(targetId){
    lastPageState = currentPageState;
    currentPageState = targetId;
    const hiddenElements = ["categories", "prodView", "cartView", "checkout","wishlistView", "m|f", "coats", "sweater", "tshirts", "gloves", "hats", "glasses", "earrings", "scarfs", "trousers", "shorts", "shoes","searchList", "prodList"];
    hiddenElements.forEach(e => {
        hideElement(e);
    })
    //setPageState('m|f')
    if(targetId == "m|f"){
        document.querySelector('.search').value = "";
    }
    if(targetId == ""){
        return
    }
    showElement(targetId);
}

function maleOnClick(){
    setPageState("categories");
    document.getElementById("head").src = "./graphics/male_head.png";
    document.getElementById("upper_body").src = "./graphics/male_upper_body.png";
    document.getElementById("bottom").src = "./graphics/male_bottom.png";
}

function femaleOnClick(){
    setPageState("categories");
    document.getElementById("head").src = "./graphics/female_head.png";
    document.getElementById("upper_body").src = "./graphics/female_upper_body.png";
    document.getElementById("bottom").src = "./graphics/female_bottom.png";
}

function upperBodyOnClick(){
    setPageState("categories");
    showElement("coats");
    showElement("sweater");
    showElement("tshirts");
    showElement("gloves");
}

function headOnClick(){
    setPageState("categories");
    showElement("hats");
    showElement("glasses");
    showElement("earrings");
    showElement("scarfs");
}

function bottomOnClick(){
    setPageState("categories");
    showElement("trousers");
    showElement("shorts");
    showElement("shoes");
}

function clearWishlist(){
    localStorage.setItem("wishlist", JSON.stringify([]));
    wishlistOnClick();
}
function removeFromWishlist(item) {
    // Get the cart from local storage
    let cart = JSON.parse(localStorage.getItem("wishlist"));

    // Find the index of the item in the cart
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].item == item) {
            index = i;
            break;
        }
    }

    // If the item was found in the cart, remove it
    if (index != -1) {
        cart.splice(index, 1);
    }

    // Save the updated cart to local storage
    localStorage.setItem("wishlist", JSON.stringify(cart));

    // Reload the cart view
    wishlistOnClick();
}
function removeFromWishlist2(item) {
    // Get the cart from local storage
    let cart = JSON.parse(localStorage.getItem("wishlist"));

    // Find the index of the item in the cart
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].item == item) {
            index = i;
            break;
        }
    }

    // If the item was found in the cart, remove it
    if (index != -1) {
        cart.splice(index, 1);
    }

    // Save the updated cart to local storage
    localStorage.setItem("wishlist", JSON.stringify(cart));

    //change button text to "add to wishlist"
    document.getElementById("wishlistbuttom").innerHTML = "❤";
    //change function to addToWishlist

    document.getElementById("wishlistbuttom").setAttribute("onclick", "addToWishlist()");
}
function removeFromCart(item) {
    // Get the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Find the index of the item in the cart
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].item == item) {
            index = i;
            break;
        }
    }

    // If the item was found in the cart, remove it
    if (index != -1) {
        cart.splice(index, 1);
    }

    // Save the updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Reload the cart view
    cartOnClick();
}

/*
    creates an element that can be put into prodOnClick to show a product page or store an product
*/
function makeHtmlElement(price, img_src, img_id){
    var element = document.createElement('div');
    var paragraph = document.createElement('p');
    var img = document.createElement('img');
    paragraph.innerHTML = price;
    img.src = img_src;
    img.id = img_id;
    element.append(img, paragraph);
    return element;
}

function cartProdOnClick(price, img_src, img_id) {
    const element = makeHtmlElement(price, img_src, img_id);
    prodOnClick(element);
}

function cartOnClick() {

    // Load the cart view
    setPageState("cartView");
    // Get the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    // Get the table body element
    let tableBody = document.querySelector("#waren tbody");
    // Clear the table body
    tableBody.innerHTML = "";

    // Total price of items in the cart
    let totalPrice = 0;
    // Loop through the items in the cart
    for (let i = 0; i < cart.length; i++) {
        // Create a new table row
        let tableRow = document.createElement("tr");
        // Create the product image cell
        let prodImgCell = document.createElement("td");
        prodImgCell.classList.add("cartProdImg", "clickable-img");
        // Create the product image
        let prodImg = document.createElement("img");
        prodImg.src = 'graphics/' + cart[i].item;
        prodImg.alt = cart[i].item;
        // Add the image to the cell
        prodImgCell.appendChild(prodImg);
        // Create the product name cell
        let prodNameCell = document.createElement("td");
        let itemParts = cart[i].item.split('/');
        var name = itemParts[1].slice(0, -4);
        prodNameCell.textContent = name;
        //create size cell
        let sizeCell = document.createElement("td");
        sizeCell.textContent = cart[i].size;
        // Create the quantity cell
        let quantityCell = document.createElement("td");
        quantityCell.textContent = cart[i].quantity;
        // Create the price cell
        let price = cart[i].price.replace(',', '.');
        price = parseFloat(price);
        let quantity = parseInt(cart[i].quantity);
        let priceCell = document.createElement("td");
        priceCell.textContent = (quantity * price).toFixed(2) + '€';
        // Make prod img clickable -> showing the prodView
        prodImg.setAttribute("onclick", "cartProdOnClick('"+price+"','"+prodImg.src+"','"+name+"', 'cartView')");
        // Create a remove button cell
        let removeButtonCell = document.createElement("td");

        // Create the remove button
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.setAttribute("onclick", "removeFromCart('"+cart[i].item+"')");

        // Add the button to the cell
        removeButtonCell.appendChild(removeButton);

        // Add the cells to the table row
        [prodImgCell, prodNameCell, sizeCell, quantityCell, priceCell, removeButtonCell].forEach(e => {tableRow.appendChild(e)});
        // Add the table row to the table body
        tableBody.appendChild(tableRow);
        // Update the total price
        totalPrice += cart[i].price * cart[i].quantity;
    }
    // Display the total price
    document.querySelector('.total').textContent = 'Total: ' + totalPrice.toFixed(2) + '€';
}

function wishlistOnClick() {
    // Load the cart view
    setPageState("wishlistView");
    // Get the cart from local storage
    let cart = JSON.parse(localStorage.getItem("wishlist"));
    if (cart == null || cart.length == 0) {
        cart = [];
        let tableBody = document.querySelector("#waren2 tbody");
        let tableRow = document.createElement("tr");
        let prodNameCell = document.createElement("td");
        prodNameCell.textContent = "Merkliste ist leer";
        tableRow.appendChild(prodNameCell);
        tableBody.appendChild(tableRow);

    }
    // Get the table body element
    let tableBody = document.querySelector("#waren2 tbody");
    // Clear the table body
    tableBody.innerHTML = "";
    // Loop through the items in the cart
    for (let i = 0; i < cart.length; i++) {
        // Create a new table row
        let tableRow = document.createElement("tr");
        // Create the product image cell
        let prodImgCell = document.createElement("td");
        prodImgCell.classList.add("cartProdImg", "clickable-img");
        // Create the product image
        let prodImg = document.createElement("img");
        prodImg.src = 'graphics/' + cart[i].item;
        prodImg.alt = cart[i].item;
        // Add the image to the cell
        prodImgCell.appendChild(prodImg);
        // Create the product name cell
        let prodNameCell = document.createElement("td");
        let itemParts = cart[i].item.split('/');
        var name = itemParts[1].slice(0, -4);
        prodNameCell.textContent = name;
        // Create the quantity cell
        let quantityCell = document.createElement("td");
        quantityCell.textContent = cart[i].quantity;
        // Create the price cell
        let price = cart[i].price.replace(',', '.');
        price = parseFloat(price);
        //let quantity = parseInt(cart[i].quantity);
        let priceCell = document.createElement("td");
        priceCell.textContent = ( price).toFixed(2) + '€';
        // Make prod img clickable -> showing the prodView
        prodImg.setAttribute("onclick", "cartProdOnClick('"+price+"','"+prodImg.src+"','"+name+"', 'wishlistView')");
        // Create a remove button cell
        let removeButtonCell = document.createElement("td");

        // Create the remove button
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.setAttribute("onclick", "removeFromWishlist('"+cart[i].item+"')");

        // Add the button to the cell
        removeButtonCell.appendChild(removeButton);

        // Add the cells to the table row
        [prodImgCell, prodNameCell, priceCell, removeButtonCell].forEach(e => {tableRow.appendChild(e)});
        // Add the table row to the table body
        tableBody.appendChild(tableRow);
    }
}

function changeProdViewAmount(amount) {
    var inputField = document.querySelector('input[type="text"]');
    var newVal = parseInt(inputField.value) + amount;
    if (newVal < 1) return;
    inputField.value = newVal;
}

function paypalSim() {
    var cart = localStorage.getItem("cart");
    if(!cart || cart.length == 0){
        alert("Cart is empty");
        return;
    }
    localStorage.removeItem("cart")

    document.getElementById("checkout").innerHTML = "";
    setPageState("checkout");
    // Get checkout div element
    var checkoutDiv = document.querySelector(".checkout");

    // Display spinning wheel
    var spinningWheel = document.createElement("div");
    spinningWheel.classList.add("spinning-wheel");
    spinningWheel.style.display = "flex";
    spinningWheel.style.justifyContent = "center";
    checkoutDiv.appendChild(spinningWheel);

    // Display title
    var title = document.createElement("h1");
    title.textContent = "Weiterleitung zur Zahlung";
    title.style.textAlign = "center";
    checkoutDiv.appendChild(title);

    // Wait for 2 seconds
    setTimeout(function() {
        // Remove spinning wheel and title
        checkoutDiv.removeChild(spinningWheel);
        checkoutDiv.removeChild(title);

        // Display "Vielen Dank für ihre Bestellung!" message
        var message = document.createElement("h1");
        message.textContent = "Vielen Dank für ihre Bestellung! (Bestellnummer: 123456789)";
        message.style.textAlign = "center";
        checkoutDiv.appendChild(message);
    }, 2000);


}

function search() {
    // Hole den Suchbegriff aus dem Eingabefeld
    let searchTerm = document.querySelector('.search').value.toLowerCase();
    if(searchTerm == "schal") {
        searchTerm = "scarf";
    }
    if(searchTerm == "handschuhe") {
        searchTerm = "gloves";
    }
    // Erstelle eine Liste für die Suchergebnisse
    let searchResults = [];

    // Iteriere über die Kategorien und Produkte
    for (let i = 0; i < categoryProducts.length; i++) {
        let category = categoryProducts[i];
        let products = category.products;
        for (let j = 0; j < products.length; j++) {
            let product = products[j];
            // Prüfe, ob der Name oder die Kategorie des Produkts den Suchbegriff enthält

            if (product.name.includes(searchTerm) || category.category.includes(searchTerm) || product.color.includes(searchTerm)) {
                // Füge das Produkt zu den Suchergebnissen hinzu
                searchResults.push(product);
            }
        }
    }

    // Setze den Seitenzustand auf "" (leer) und zeige die prodList-Ansicht an
    setPageState("searchList");

    const productsPerRow = 5;

    // Leere die prodList-Ansicht
    document.getElementById("searchList").innerHTML = "";
    // Erstelle eine neue Zeile für die Suchergebnisse
    let row = document.createElement("tr");

    // Iteriere über die Suchergebnisse und füge sie zur prodList-Ansicht hinzu
    for (let i = 0; i < searchResults.length; i++) {
        let product = searchResults[i];
        let category = categoryProducts.find(cat => cat.products.includes(product));
        // Erstelle eine neue Zelle für das Produkt
        let cell = document.createElement("td");
        //add class clickable-img
        cell.classList.add("clickable-img");
        cell.style.borderTop = "2px solid black";
        cell.style.borderBottom = "2px solid black";
        // Erstelle ein Bild-Element für das Produkt
        let img = document.createElement("img");
        let div = document.createElement("div");
        let table = document.createElement("table");
        // Setze den Pfad des Bildes auf den Pfad der Kategorie
        // Set the path of the image to the path of the category and the product name
        img.src = "./graphics/" + category.category + "/" + product.name + ".png";
        img.id = product.name;

        // Add the image to the cell
        cell.appendChild(img);
        // Create a new paragraph element for the price
        let price = document.createElement("p");
        price.id = "price_" + i;
        price.innerText = product.price.toFixed(2) + "€";
        // Add the price to the cell
        cell.appendChild(price);
        // onclick="prodOnClick(this)"
        cell.onclick = function() { prodOnClick(this) };
        // add hoverfix
        // Add the cell to the row
        row.appendChild(cell);
        table.appendChild(row);
        // Check if the current row has max cells
        if (row.childElementCount === productsPerRow) {
            // If so, add the row to the prodList table and create a new row
            document.getElementById("searchList").appendChild(table);
            row = document.createElement("tr");
        }
    }
    // Check if the final row has less than max cells
    if (row.childElementCount < productsPerRow) {
        // If so, add the final row to the prodList table
        let table = document.createElement("table");
        table.appendChild(row);
        document.getElementById("searchList").appendChild(table);
    }
}

function setProdElements(target_name){
    if(target_name == ""){
        alert("Out of stock, sorry :(");
        return;
    }
    showElement("prodList");
    const prodPerPage = 8;
    const prodPerRow = 4;
    const imgPath = "./graphics/" + target_name + "/" + target_name + "_";
    let products = categoryProducts.find(e => e.category == target_name).products;
    let table = "<table>\n  <tr>\n";
    for(let i = 1; i <= prodPerPage; i++){ /* wir starten bei 1 weil das 0te img das generische categorien bild ist*/
        let price_id = "price_" + i;
        table += "    <td class=\"clickable-img\">\n";
        table += "<div onclick='prodOnClick(this)'>\n";
        table += "      <img id=\"" + products[i-1].name + "\" src=\"" + imgPath + i + ".png\"/>\n";
        table += "      <p id=\"" + price_id + "\">" + products[i-1].price.toFixed(2) + "€</p>\n";
        table += "</div>\n";
        if(i % prodPerRow == 0){
            table += "  </tr>\n";
            if(i != prodPerPage){
                table += "  <tr>\n";
            }
        }
    }
    table += "</table>\n";
    document.getElementById("prodList").innerHTML = table;
}

function prodOnClick(clickedElement) {
    // Get the price of the clicked element
    const imgElement = clickedElement.querySelector("img");
    const target_name = imgElement.id.split("_")[0];
    const price  = categoryProducts.find(e => e.category == target_name).products.find(e => e.name == imgElement.id).price;
    // Get the src of the clicked image
    const src = imgElement.src;
    if(!(target_name.includes("hat") || target_name.includes("earring") || target_name.includes("glasses") || target_name.includes("scarf") || target_name.includes("shoe"))){
        showElement("size");
        let sizeElement = document.getElementById("size");
        let sizeButtons = sizeElement.getElementsByTagName("*");
        for(let i = 0; i < sizeButtons.length; i++){
            if(i != size_list[size]){
                sizeButtons[i].style.backgroundColor = "#ffffff";
            }else{
                sizeButtons[i].style.backgroundColor = "#D3D3D3";
            }
        }
    }else{
        hideElement("size");
    }

    //cut src from http://localhost:63342/SimpleShop/graphics/scarf/scarf_1.png to scarf/scarf_1.png
    const src_cut = src.split("graphics/")[1];

    setPageState("prodView");
    document.querySelector(".prodViewImg img").src = src;
    document.getElementById("productprice").innerHTML = price.toFixed(2) + "€";
    //check if product is in wishlist
    localStorage.setItem("wishlist", localStorage.getItem("wishlist") || "[]");
    //change addToWishlist button with the function to remove from wishlist removeFromWishlist
    if(localStorage.getItem("wishlist").includes(imgElement.id)){
        document.getElementById("wishlistbuttom").innerHTML = "Remove from wishlist";
        document.getElementById("wishlistbuttom").onclick = null;
        document.getElementById("wishlistbuttom").onclick = function() { removeFromWishlist2(src_cut) };
    } else {
        document.getElementById("wishlistbuttom").onclick = null;
        document.getElementById("wishlistbuttom").innerHTML = "❤";
        document.getElementById("wishlistbuttom").onclick = function() { addToWishlist(src_cut) };
    }
}

function addToWishlist() {
    // Get the item name from the image source
    let imgSrc = document.querySelector(".prodViewImg img").src;
    let item = imgSrc.substring(imgSrc.indexOf('graphics'));
    //get imagepath clean
    item = item.substring(9);
    // Get the quantity from the input field
    let quantity = parseInt(document.querySelector('input[type="text"]').value);
    let price = document.getElementById("productprice").innerHTML;
    //remove €
    price = price.substring(0, price.length - 1);
    // Check if the shopping cart exists in local storage
    if (localStorage.getItem("wishlist") === null) {
        // If not, create an empty cart
        let cart = [];
        // Add the item to the cart
        cart.push({item: item, quantity: quantity, price: price});
        // Save the cart to local storage
        localStorage.setItem("wishlist", JSON.stringify(cart));
    } else {
        // If the cart exists, get it from local storage
        let cart = JSON.parse(localStorage.getItem("wishlist"));
        // Check if the item is already in the cart
        let itemExists = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].item == item) {
                // If it is, update the quantity
                cart[i].quantity += quantity;
                itemExists = true;
            }
        }
        // If the item is not in the cart, add it
        if (!itemExists) {
            cart.push({item: item, quantity: quantity, price: price});
        }
        // Save the updated cart to local storage
        localStorage.setItem("wishlist", JSON.stringify(cart));
    }
    //change addToWishlist button with the function to remove from wishlist removeFromWishlist
    document.getElementById("wishlistbuttom").innerHTML = "Remove from wishlist";
    document.getElementById("wishlistbuttom").onclick = null;
    document.getElementById("wishlistbuttom").onclick = function() { removeFromWishlist2(item) };
}

function addToCart() {
    // Get the item name from the image source
    let imgSrc = document.querySelector(".prodViewImg img").src;
    let item = imgSrc.substring(imgSrc.indexOf('graphics'));
    //get imagepath clean
    item = item.substring(9);
    // Get the quantity from the input field
    let quantity = parseInt(document.querySelector('input[type="text"]').value);
    let price = document.getElementById("productprice").innerHTML;
    //remove €
    price = price.substring(0, price.length - 1);
    // Check if the shopping cart exists in local storage
    if (localStorage.getItem("cart") === null) {
        // If not, create an empty cart
        let cart = [];
        // Add the item to the cart
        if(!(item.includes("hat") || item.includes("earring") || item.includes("glasses") || item.includes("scarf") || item.includes("shoe"))){
            cart.push({item: item, size: size, quantity: quantity, price: price});
        }else{
            cart.push({item: item, size: "Unisize", quantity: quantity, price: price});
        }
        // Save the cart to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        // If the cart exists, get it from local storage
        let cart = JSON.parse(localStorage.getItem("cart"));
        // Check if the item is already in the cart
        let itemExists = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].item == item) {
                // If it is, update the quantity
                if(cart[i].size == size){ // check if size is different
                    cart[i].quantity += quantity;
                    itemExists = true;
                }
            }
        }
        // If the item is not in the cart, add it
        if (!itemExists) {
            if(!(item.includes("hat") || item.includes("earring") || item.includes("glasses") || item.includes("scarf") || item.includes("shoe"))){
                cart.push({item: item, size: size, quantity: quantity, price: price});
            }else{
                cart.push({item: item, size: "Unisize", quantity: quantity, price: price});
            }
        }
        // Save the updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert("👍");

}

function back() {
    if(lastPageState == "searchList") {
        let searchTerm = document.querySelector('.search').value.toLowerCase();
        if(searchTerm != "") {
            search();
            return;
        }
    }
    if(lastPageState != "categories") {
        setPageState(lastPageState);
        return;
    }

    // Get the source of the main product image
    var imgSrc = document.querySelector(".prodViewImg img").src.split("/");
    // Determine the last opened category based on the image source
    var category = imgSrc[imgSrc.length - 2];
    
    document.querySelector('input[type="text"]').value = 1;
    // Run the appropriate function for the last opened category
    if (category == "coats" || category == "sweater" || category == "tshirts" || category == "gloves") {
        setPageState("");
        setPageState("categories");
        upperBodyOnClick();
        setProdElements(category);
    } else if (category == "hats" || category == "glasses" || category == "earrings" || category == "scarfs") {
        setPageState("");
        setPageState("categories");
        headOnClick();
        setProdElements(category);
    } else if (category == "trousers" || category == "shorts" || category == "shoes") {
        setPageState("");
        setPageState("categories");
        bottomOnClick();
        setProdElements(category);
    }
    //stupid fast bug fix folder structure
    category2 = category + "s";
    if (category2 == "coats" || category2 == "sweater" || category2 == "tshirts" || category2 == "gloves") {
        setPageState("");
        setPageState("categories");
        upperBodyOnClick();
        setProdElements(category);
    } else if (category2 == "hats" || category2 == "glasses" || category2 == "earrings" || category2 == "scarfs") {
        setPageState("");
        setPageState("categories");
        headOnClick();
        setProdElements(category);
    } else if (category2 == "trousers" || category2 == "shorts" || category2 == "shoes") {
        setPageState("");
        setPageState("categories");
        bottomOnClick();
        setProdElements(category);
    }
}

function disabledOnClick() {

    // switch class wishlist2 innerhtml from ♿ to 🙋
    if(document.getElementById("wishlist2").innerText == "♿") {
        document.getElementById("wishlist2").innerText = "🙋";
    } else {
        document.getElementById("wishlist2").innerText = "♿";
    }

}

function updateCartButton() {
    // Get the cart button element
    const cartButton = document.querySelector('.cart');

    // Get the value of the "cart" key in the local storage
    const cartValue = localStorage.getItem("cart");

    // Check if cartvalue array is empty
    if (cartValue === null || cartValue.length === 0 || cartValue === "[]") {
        // If the value is null, set the src of the cart button image to "graphics/cart.png"
        cartButton.querySelector('img').src = "graphics/cart.png";
    } else {
        // If the value is not null, set the src of the cart button image to "graphics/cart_full.png"
        cartButton.querySelector('img').src = "graphics/cart_full.png";
    }
}

function sizeButtonOnClick(selected_size){
    let sizeElement = document.getElementById("size");
    let sizeButtons = sizeElement.getElementsByTagName("*");
    for(let i = 0; i < sizeButtons.length; i++){
        sizeButtons[i].style.backgroundColor = "#ffffff";
    }
    size = selected_size;
    let btn = document.getElementById(selected_size.toLowerCase());
    btn.style.backgroundColor = "#D3D3D3";
}

setInterval(updateCartButton, 1000);

document.addEventListener("click", function(event) {
    if(document.getElementById("wishlist2").innerHTML == "♿") {
        var elementText = event.target.innerText;
        var elementName = event.target.nodeName;

        var msg = new SpeechSynthesisUtterance(elementText || elementName);
        window.speechSynthesis.speak(msg);
    }
});
