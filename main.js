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

function cartOnClick(){
    setPageState("");
    showElement("cartView");
}

function setProdElements(target_name){
    showElement("prodList");
    const prodPerPage = 8;
    const imgPath = "./graphics/" + target_name + "/" + target_name + "_";
    console.log(imgPath);
    for(let i = 1; i <= prodPerPage; i++){ /* wir starten bei 1 weil das 0te img das generische categorien bild ist*/
        let img_id = "prod_" + i;
        console.log(img_id);
        document.getElementById(img_id).src = imgPath + i + ".png";
    }
}