const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', 
'#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', 
'#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', 
'#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', 
'#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', 
'#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', 
'#99E6E6', '#6666FF', '#E6B333'];

let b = 0;
const btn = document.querySelector('button');

// console.log(colors.length);

btn.addEventListener('click', changeColor);


/* This expression gives the value "++ b" of the variable b,
if b (0) is less than colors (3). Otherwise
variable b is given the value 0. */

/*Даний вираз надає значення "++b" змінної b,
якщо b(0) менше, ніж colors(3). В іншому випадку
змінної b надається значення 0.*/

function changeColor() {
    b = (b < colors.length - 1) ? ++b : 0;
    document.querySelector('body').style.background = colors[b];
}
