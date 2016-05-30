var arr = [];

for (i = 0; i < 5; i++) {
  	arr[i] = prompt("Введите имя" + (i + 1) + "");
  		if (arr[i] == "") {
			alert ("Пустая строка, пожалуйста введите имя пользователя");
			throw new Error("не может быть пустой строкой");
		}
}

console.log(arr);

var nameUser = prompt("Введите имя пользователя", '');
  	if (nameUser == "") {
		alert ("Пустая строка, пожалуйста введите имя пользователя");
		throw new Error("не может быть пустой строкой");
}

console.log(nameUser);

for (i=0; i<5; i++) {
	if (arr[i] === nameUser) {
		alert ("" + nameUser + "вы успешно вошли");
	} else if (nameUser != arr.length) {
		alert ("Такого имени не существует, введите правильное имя пользователя");
	}
}