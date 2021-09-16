// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 5,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 10,
//   },
// ];

// for (const book of books) {
//   let { title, author, rating } = book;
//   if (title === "На берегу спокойных вод") {
//     rating = 7;
//     console.log(title);
//     console.log(author);
//     console.log("Рейтинг книги в цикле: ", rating); // 7
//   }
// }

// console.log("рейтинг второй книги после цикла: ", books[1].rating); // 10

// books[1].rating = 7;
// console.log(
//   "рейтинг второй книги после обращения через индекс: ",
//   books[1].rating
// ); // 7

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
