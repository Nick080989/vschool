const colorSquare = document.getElementById("colorSquare");

colorSquare.addEventListener('mouseover', () => {
     colorSquare.style.backgroundColor = 'blue';
});

colorSquare.addEventListener('mousedown', () => {
     colorSquare.style.backgroundColor = 'red';
});

colorSquare.addEventListener('mouseup', () => {
     colorSquare.style.backgroundColor = 'yellow';
 });

 colorSquare.addEventListener('dblclick', () => {
     colorSquare.style.backgroundColor = 'green';
 });

 window.addEventListener('wheel', () => {
     colorSquare.style.backgroundColor = 'orange';
 });

 window.addEventListener('keydown', (e) => {
     switch (e.key.toLowerCase()) {
         case 'b':
             colorSquare.style.backgroundColor = 'blue';
             break;
         case 'r':
             colorSquare.style.backgroundColor = 'red';
             break;
         case 'y':
             colorSquare.style.backgroundColor = 'yellow';
             break;
         case 'g':
             colorSquare.style.backgroundColor = 'green';
             break;
         case 'o':
             colorSquare.style.backgroundColor = 'orange';
             break;
         default:
             break;
     }
 });