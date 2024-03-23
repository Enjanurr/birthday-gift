/*document.addEventListener ("DOMContentLoaded" , function() {
    const input = document.getElementById("inputpassword");
    const button = document.getElementById("btn");

    Submitbutton.addEventListener("click", function (){
     const password = passwordInput.Value;
     if (password === "enjanurr") {
        window.location.href = "indexpag2.html" ;
    
     }
else {
    alert("Incorrect password")
}
    }
    
    ) 

})*/

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("inputpassword");
    const button = document.getElementById("btn");

    button.addEventListener("click", function() {
        const password = input.value;
        if (password === "enjanurr") {
            window.location.href = "/page2/indexpg2.html";
        } else {
            alert("Incorrect password");
        }
    });
});
