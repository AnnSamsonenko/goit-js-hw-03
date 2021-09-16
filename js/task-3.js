//ЗАДАНИЕ

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

//РЕШЕНИЕ

// const findBestEmployee = function (employees) {
//   const bestResult = Math.max(...Object.values(employees));
//   const entrees = Object.entries(employees);

//   for (let [name, result] of entrees) {
//     if (result === bestResult) {
//       return name;
//     }
//   }
// };

const findBestEmployee = function (employees) {
  let bestResult = 0;
  let bestEmpoyee = null;

  for (const [employee, result] of Object.entries(employees)) {
    if (result > bestResult) {
      bestResult = result;
      bestEmpoyee = employee;
    }
  }
  return bestEmpoyee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
