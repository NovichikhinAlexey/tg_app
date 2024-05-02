let telegramAppTEST = window.Telegram.WebApp; //нужно получить объект window.Telegram.WebApp Телеграмма
telegramAppTEST.expand(); //разворачиваем на все окно
telegramAppTEST.MainButton.text = "Кнопка TEST"; //Задаем текст кнопки
telegramAppTEST.MainButton.setText("TEST на кнопке"); //Меняем текст на кнопке веббота в Телеграмме
telegramAppTEST.MainButton.textColor = "#ff0000"; //Указываем цвет текста, а в данном случае выбран 100% красный
telegramAppTEST.MainButton.color = "#ffffff"; //Делаем бэкграунд кнопки 100% белым
telegramAppTEST.MainButton.setParams({"color": "#000000"}); // Изменяем все параметры
let button = document.getElementById("button"); //Используем getElementById, чтобы получить кнопку, которую сделали выше и которой присвоили id и class
button.addEventListener('click', function(){ //Используем addEventListener, чтобы слушать клик по кнопке
    if (telegramAppTEST.MainButton.isVisible){ //проверяем, видима ли кнопка, при помощи isVisible, который предоставляет нам API TG
        telegramAppTEST.MainButton.hide() //прячем кнопку
    }
    else{
        telegramAppTEST.MainButton.show() //если булевое значение isVisible === false, то показываем кнопку, используя show()
    }
});

let btnEdit = document.getElementById("btnEdit"); //Используем getElementById, чтобы получить кнопку и активировать/деактивировать
btnEdit.addEventListener('click', function(){ //Слушаем при помощи addEventListener клик на кнопку
    if (telegramAppTEST.MainButton.isActive){ //Если наша кнопка активна
        telegramAppTEST.MainButton.setParams({"color": "#ffffff"}); //Заменяем цвет на белый
        telegramAppTEST.MainButton.disable() //Скрываем кнопку
    }
    else{ //В противном случае
        telegramAppTEST.MainButton.setParams({"color": "#0000ff"}); //Заменяем цвет на синий
        telegramAppTEST.MainButton.enable() //Отображаем в веб-боте TelegramWebApp
    }
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    telegramAppTEST.sendData("Проверяем событие onEvent. Если был клик по кнопке, то отправляем данные при помощи sendData в виде данной строки");
});
let usercard = document.getElementById("usercard"); //Используем getElementById, чтобы получить карточку пользователя
let usercard_desk = document.getElementById("usercard_desk"); //Используем getElementById, чтобы получить карточку пользователя

let profileName = document.createElement('p'); //При помощи document.createElement делаем абзац – <p> </p>
profileName.innerText = `${telegramAppTEST.initDataUnsafe.user.first_name}
   ${telegramAppTEST.initDataUnsafe.user.last_name}
   ${telegramAppTEST.initDataUnsafe.user.username} (${telegramAppTEST.initDataUnsafe.user.language_code})`;
let platform = document.createElement('p');
platform.innerText = `${telegramAppTEST.platform} ${telegramAppTEST.version}`;
usercard.appendChild(profileName);
usercard.appendChild(platform);
usercard_desk.appendChild(platform);
let userid = document.createElement('p'); // Используем document.createElement для создания еще одного абзаца
userid.innerText = `${telegramAppTEST.initDataUnsafe.user.id}`; // Отображаем id пользователя
usercard.appendChild(userid); // Добавляем id пользователя в конец списка дочерних элементов при помощи appendChild
if (telegramAppTEST.platform !== 'android' && telegramAppTEST.platform !== 'ios') {
    document.getElementById("mobile_block").classList.add("hide");
} else {
    document.getElementById("desktop_block").classList.add("hide");
}
let authData = document.createElement('p');
authData.innerText = `${telegramAppTEST.initData}`;
usercard.appendChild(authData);