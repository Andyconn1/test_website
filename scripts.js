//document.getElementById("change_text").innerHTML = "Code works!";


document.getElementById("test_button").onclick = function() {testFunction()};

function testFunction() {
    document.getElementById("change_text").innerHTML = "Button Clicked!";
    alert("test");
}