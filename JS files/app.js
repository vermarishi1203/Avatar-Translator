var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");
var translationUrl = "https://api.funtranslations.com/translate/navi.json";
function constructUrl(){
    return translationUrl + "?text=" + txtInput.value;
}
function errorHandler(error){
    console.log("error:"+ error);
    alert("Sorry, an unexpected error occured. Please try agian after sometime.");
}
function eventHandler(){
    fetch(constructUrl())
    .then(response => response.json())
    .then(json => txtOutput.innerText = json.contents.translated)
    .catch(errorHandler)
}
btnTranslate.addEventListener('click',eventHandler);