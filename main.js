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

    showElement(targetId);
}