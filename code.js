var getinput = document.querySelector("#input");
var translate = document.querySelector("#translate");
var  output = document.querySelector("#output");




// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


 var serverURL="https://api.funtranslations.com/translate/morse.json";

// function to create url for fetching server response

function URLtranslate(input){
return serverURL+"?"+"text="+input;
}


// error handling
function errorHandler(error){
    console.log("Server is not responding")
    alert("try again after sometime")

}


// function to handle click and give response

function clickHandle()
{
    var input= getinput.value;

    // calling server for processing

    fetch(URLtranslate(input))
    .then(response=>response.json())
    .then(json=>{
        var transalatedText = json.contents.translated;
        output.innerText = transalatedText;
    })


.catch(errorHandler)

}

translate.addEventListener("click",clickHandle)
