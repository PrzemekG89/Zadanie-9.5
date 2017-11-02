var buttons = document.getElementsByClassName('button');
console.log(buttons);
var buttonQuantity = buttons.length;
console.log(buttonQuantity);

for (i = 0; i < buttonQuantity; i++) {
    var text;
    text = buttons[i].innerText;
    console.log(text);
};