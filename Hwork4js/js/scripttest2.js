var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('text for label after checkbox'));

body.appendChild(checkbox);
body.appendChild(label);