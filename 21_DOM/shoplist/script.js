// Получаем элементы со страницы
const input = document.querySelector('input[type="text"]');
const btn = document.querySelector('button');

// Создаём список, если его нет в HTML
let taskList = document.querySelector('ul');
if (!taskList) {
  taskList = document.createElement('ul');
  document.querySelector('.wraper').appendChild(taskList);
}

// Обработчик события на кнопку
btn.addEventListener('click', () => {
  const receivedText = input.value.trim();
  if (receivedText === '') return;

  // Создаём элементы
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delButton = document.createElement('button');

  // Наполняем содержимым
  span.textContent = receivedText;
  delButton.textContent = 'Удалить';

  // Вкладываем элементы
  li.appendChild(span);
  li.appendChild(delButton);
  taskList.appendChild(li);

  // Очищаем поле ввода
  input.value = '';

  // Удаление элемента по кнопке
  delButton.addEventListener('click', () => {
    li.remove();
  });
});
