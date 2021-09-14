//Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.transactions.push({
      id: this.transactions.length + 1,
      amount,
      type,
    });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Transaction doesn't exist";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalSummary = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        totalSummary += transaction.amount;
      }
    }
    return totalSummary;
  },
};

//ВЫЗОВЫ ФУНКЦИЙ

console.log("Баланс: ", account.getBalance());
account.deposit(50);
console.log("Баланс: ", account.getBalance());
account.deposit(150);
console.log("Баланс: ", account.getBalance());
account.deposit(100);
console.log("Баланс: ", account.getBalance());
account.withdraw(50);
console.log("Баланс: ", account.getBalance());
account.deposit(150);
console.log("Баланс: ", account.getBalance());
account.withdraw(50);
console.log("Баланс: ", account.getBalance());
console.log("История операций ", account.transactions);
console.log("Информация о транзакции-1: ", account.getTransactionDetails(1));
console.log("Информация о транзакции-7: ", account.getTransactionDetails(7));
console.log(
  "Сумма депозитов: ",
  account.getTransactionTotal(Transaction.DEPOSIT)
);
console.log(
  "Сумма cнятий: ",
  account.getTransactionTotal(Transaction.WITHDRAW)
);
