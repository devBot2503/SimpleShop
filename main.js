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
    hideElement("categories");
    hideElement("prodView");
    hideElement("cartView");
    hideElement("checkout");
    hideElement("m|f");
    hideElement("coats");
    hideElement("sweater");
    hideElement("tshirts");
    hideElement("gloves");
    hideElement("hats");
    hideElement("glasses");
    hideElement("earrings");
    hideElement("scarfs");
    hideElement("trousers");
    hideElement("shorts");
    hideElement("shoes");
    hideElement("prodList");
    if(targetId == ""){
        return
    }
    showElement(targetId);
}

/*
Alexander Kehr
Es folgen ein paar onClick Funktionen welche selbsterklärend sind
*/

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
function cartOnClick() {
// Load the cart view
    setPageState("");
    showElement("cartView");
// Get the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart"));
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
        prodImgCell.classList.add("cartProdImg");
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
        let quantity = parseInt(cart[i].quantity);
        let priceCell = document.createElement("td");
        priceCell.textContent = (quantity * price).toFixed(2) + '€';

        // Create a remove button cell
        let removeButtonCell = document.createElement("td");

// Create the remove button
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.setAttribute("onclick", "removeFromCart('"+cart[i].item+"')");

// Add the button to the cell
        removeButtonCell.appendChild(removeButton);

// Add the cells to the table row
        tableRow.appendChild(prodImgCell);
        tableRow.appendChild(prodNameCell);
        tableRow.appendChild(quantityCell);
        tableRow.appendChild(priceCell);
        tableRow.appendChild(removeButtonCell);
// Add the table row to the table body
        tableBody.appendChild(tableRow);
// Update the total price
        totalPrice += 49 * cart[i].quantity;
    }
// Display the total price
    document.querySelector('.total').textContent = 'Total: ' + totalPrice + '€';
}


function changeProdViewAmount(amount) {
    var inputField = document.querySelector('input[type="text"]');
    var newVal = parseInt(inputField.value) + amount;
    if (newVal < 1) return;
    inputField.value = newVal;
}
function paypalSim() {
    localStorage.clear();

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



function setProdElements(target_name){
    if(target_name == ""){
        alert("Out of stock, sorry :(");
        return;
    }
    showElement("prodList");
    const prodPerPage = 8;
    const imgPath = "./graphics/" + target_name + "/" + target_name + "_";
    for(let i = 1; i <= prodPerPage; i++){ /* wir starten bei 1 weil das 0te img das generische categorien bild ist*/
        let img_id = "prod_" + i;
        document.getElementById(img_id).src = imgPath + i + ".png";
        let price_id = "price_" + i;
        let price = "";
        if(target_name == "gloves"){
            price = "19,99€";
        }else if(target_name == "scarf"){
            price = "42,00€"
        }
        document.getElementById(price_id).innerHTML = price;
    }
}

function prodOnClick(clickedElement) {
    // Get the parent cell of the clicked image
    const parentCell = clickedElement.parentElement;

    // Get the price element within the parent cell
    const priceElement = parentCell.querySelector('p');

    // Get the price text
    const priceText = priceElement.textContent;

    // Get the src of the clicked image
    const src = clickedElement.src;

    setPageState("prodView");
    document.querySelector(".prodViewImg img").src = src;
    document.getElementById("productprice").innerHTML = priceText;

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
        cart.push({item: item, quantity: quantity, price: price});
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
                cart[i].quantity += quantity;
                itemExists = true;
            }
        }
// If the item is not in the cart, add it
        if (!itemExists) {
            cart.push({item: item, quantity: quantity, price: price});
        }
// Save the updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert("👍");

    console.log(localStorage.getItem("cart"));
}



function back() {
    // Get the source of the main product image
    var imgSrc = document.querySelector(".prodViewImg img").src;
    // Determine the last opened category based on the image source
    var category = imgSrc.split("/")[5];
    document.querySelector('input[type="text"]').value = 1;
    // Run the appropriate function for the last opened category
    if (category == "coats" || category == "sweater" || category == "tshirts" || category == "gloves") {
        setPageState("categories");
        upperBodyOnClick();
        setProdElements(category);
    } else if (category == "hats" || category == "glasses" || category == "earrings" || category == "scarfs") {
        setPageState("categories");
        headOnClick();
        setProdElements(category);
    } else if (category == "trousers" || category == "shorts" || category == "shoes") {
        setPageState("categories");
        bottomOnClick();
        setProdElements(category);
    }
    //stupid fast bug fix folder structure
    category2 = category + "s";
    if (category2 == "coats" || category2 == "sweater" || category2 == "tshirts" || category2 == "gloves") {
        setPageState("categories");
        upperBodyOnClick();
        setProdElements(category);
    } else if (category2 == "hats" || category2 == "glasses" || category2 == "earrings" || category2 == "scarfs") {
        setPageState("categories");
        headOnClick();
        setProdElements(category);
    } else if (category2 == "trousers" || category2 == "shorts" || category2 == "shoes") {
        setPageState("categories");
        bottomOnClick();
        setProdElements(category);
    }


}