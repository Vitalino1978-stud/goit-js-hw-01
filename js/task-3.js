const ADMIN_PASSWORD = 'jqueryismyjam';
let message;



const userInput = prompt(`Пожалуйста, введите пароль`);

if (userInput === null) {
  message =  'Отменено пользователем!';
  alert(message);
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert (message)
} else if (userInput !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}
