var arr = [];

function writeArray() {
  for (i = 0; i < 5; i++) {
    arr[i] = prompt("Введите имя" + (i + 1) + "");
    	if (arr[i] == "") {
  			alert ("Пустая строка, пожалуйста введите имя пользователя");
  			// throw new Error("не может быть пустой строкой");
        writeArray();
  		}
  }
}

function checkUser() {
  var nameUser = prompt("Введите имя пользователя", '');

  if (nameUser == "") {
  		alert ("Пустая строка, пожалуйста введите имя пользователя");
  		// throw new Error("не может быть пустой строкой");
      checkUser();
  }

  for (i=0; i<arr.length; i++) {
  	if (arr[i] == nameUser) {
  		return alert ("" + nameUser + "вы успешно вошли");
  	}
  }
  alert ("Такого имени не существует, введите правильное имя пользователя");
  checkUser();
}

writeArray();
checkUser();
