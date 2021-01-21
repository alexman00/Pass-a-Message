var input = document.getElementById("input");
var button = document.getElementById("button");
var message = document.getElementById("message");

function submit(){
    
    if(message == ''){
        message.textContent = "Please enter something";
        return false;
    }
    else{
        message.textContent = input.value;
    console.log(message);
    }


}


button.addEventListener("click",submit);
