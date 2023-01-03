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
    hideElement("checkout");
    hideElement("m|f");
    hideElement("coats");
    hideElement("sweater");
    hideElement("tshirts");
    hideElement("gloves");
    hideElement("hats");
    hideElement("glasses");
    hideElement("earrings");
    hideElement("trousers");
    hideElement("shorts");
    hideElement("shoes");
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
    showElement("coats");
    showElement("sweater");
    showElement("tshirts");
    showElement("gloves");

    hideElement("hats");
    hideElement("glasses");
    hideElement("earrings");
    hideElement("trousers");
    hideElement("shorts");
    hideElement("shoes");
}

function headOnClick(){
    showElement("hats");
    showElement("glasses");
    showElement("earrings");

    hideElement("coats");
    hideElement("sweater");
    hideElement("tshirts");
    hideElement("gloves");
    hideElement("trousers");
    hideElement("shorts");
    hideElement("shoes");
}

function bottomOnClick(){
    showElement("trousers");
    showElement("shorts");
    showElement("shoes");

    hideElement("coats");
    hideElement("sweater");
    hideElement("tshirts");
    hideElement("gloves");
    hideElement("hats");
    hideElement("glasses");
    hideElement("earrings");
}

function cartOnClick(){
    setPageState("");
    showElement("cartView");
}