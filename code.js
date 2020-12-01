var getinput = document.querySelector("#textarea");
var translate = document.querySelector("#textarea");
var  output = document.querySelector("#textarea");


// error handling
function errorHandler(error){
    console.log("Server is not responding")
    alert("try again after sometime")

}

var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// var serverURL="https://api.funtranslations.com/translate/morse.json";

// function to create url for fetching server response

function URLtranslate(input){
return serverURL+"?"+"text="+inputValue;
}

// function to handle click and give response

function clickHandle(input)
{
    var input= getinput.value;

    // calling server for processing

    fetch(URLtranslate(input))
    .then(response=>response.json())
    .then(json=>{
        var translatedText =json.contents.translated;
        output.innerText = transalatedText;
    })


.catch(errorHandler)

}

textarea.addEventListener("click",clickHandler)
