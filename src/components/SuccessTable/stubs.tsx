function createData(isDone, type, name, date, id) {
  return { isDone, type, name, date, id };
}

const rows = [
  createData('Выполнено', 'С прогрессией', 'Отжимайся 10 раз', '10.07', 1),
  createData('Частично', 'Обычная', 'Приседай 10 раз', '5.07', 2),
  createData('Перевыполнено', 'Обычная', 'Бегай 100 км в день', '4.07', 3),
  createData(
    'Не выполнено',
    'С прогрессией',
    'Кушай овсянку по утрам',
    '4.07',
    4
  ),
];

export default rows;
