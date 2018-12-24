console.log("External file alert.")
//Example of innerHTML & innerText & document.write
function displayId()
{
    alert(document.getElementById("textDisplay").innerHTML);    
    alert(document.getElementById("textDisplay").innerText);     
}

function printText()
{
    document.write("refresh the page to get original page");
}
