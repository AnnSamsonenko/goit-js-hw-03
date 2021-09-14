//ЗАДАНИЕ

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

//РЕШЕНИЕ

const countProps = function (obj) {
  const propsArray = Object.keys(obj);
  return propsArray.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
