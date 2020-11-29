// Set Version
document.getElementById("Version").innerHTML = "Version: 2";

// Assign function to button
document.getElementById("test_button").onclick = function() {testFunction()};

// Define test function 
function testFunction() {
    document.getElementById("change_text").innerHTML = "Button Clicked!";
    alert("test");
}