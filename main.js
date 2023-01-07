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

let cart = [];
let total = 0.00;
const gloveProducts = [{name: "glove_1", price: 19.99}, {name: "glove_2", price: 19.99}, {name: "glove_3", price: 13.99}, {name: "glove_4", price: 19.99}, {name: "glove_5", price: 19.99}, {name: "glove_6", price: 22.99}, {name: "glove_7", price: 19.99}, {name: "glove_8", price: 19.99}];

const scarfProducts = [{name: "scarf_1", price: 42.00}, {name: "scarf_2", price: 42.00}, {name: "scarf_3", price: 42.00}, {name: "scarf_4", price: 42.00}, {name: "scarf_5", price: 42.00}, {name: "scarf_6", price: 42.00}, {name: "scarf_7", price: 42.00}, {name: "scarf_8", price: 42.00}];

const categoryProducts = [
    {category: "gloves", products: gloveProducts},
    {category: "scarf", products: scarfProducts}
];

/*
Alexander Kehr
Die Funktion setzt den Page state, also die Ansicht innerhalb des viewManagers.
@parameter = targetId
*/
function setPageState(targetId){
    const hiddenElements = ["categories", "prodView", "cartView", "checkout", "m|f", "coats", "sweater", "tshirts", "gloves", "hats", "glasses", "earrings", "scarfs", "trousers", "shorts", "shoes", "prodList"];
    hiddenElements.forEach(e => {
        hideElement(e);
    })
    
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

function cartOnClick(){
    setPageState("");
    showElement("cartView");
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
        let img_id = "prod_" + i;
        let price_id = "price_" + i;
        table += "    <td>\n";
        table += "      <img id=\"" + img_id + "\" src=\"" + imgPath + i + ".png\" onclick=\"prodOnClick()\"/>\n";
        table += "      <p id=\"" + price_id + "\">" + products[i-1].price + "€</p>\n";
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

function addToCartOnClick(){
    //TODO erstelle die onclick function, welche ein Produkt dem Warenkorb hinzufügt
}

function prodOnClick(){
    //TODO erstelle die onclick function, welche zur Einzelansicht der Produkte führt 
}