
//Gives the ability to easily change text content when selecting the Element ID.
function changeTextContent(elementId, newText){
     const element = document.getElementById(elementId);
     if (element){
          element.textContent = newText;
     }
}

//The element ID that you want to change and the text that you want to change it to. 
changeTextContent("heading", "Welcome to my website!");
changeTextContent("paragraph", "This is a sample paragraph.");


//Changes paragraph text when button is clicked.
document.getElementById("changeButton").addEventListener("click", function(){
     changeTextContent("paragraph", "You clicked the button!")
});