// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)


// const musicCollection =  [{
//      title: "EGO TRIPPIN",
//      artist: "ROCKET",
//      year: "2021"
// },
// {
//     title: "ALL BABIES FLY",
//      artist: "LILDRUGHILL",
//      year: "2021"

// },
// {
//     title: "WELOVE ",
//     artist: "IVAN VALEEV",
//     year: "2018"
// }
// ]

// musicCollection[Symbol.iterator] = function () {
//     return{
//         current: 0,
//         to: this.length,
//         next(){
//             return this.current < this.to? {done:false, value: musicCollection[this.current++]} : {done:true}

//         }
//     }
    
// }

// for (const albom of musicCollection) {
//     console.log(albom);
// }

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const food = new Map();
food.set('Пицца "Маргарита"', 'Виктор');
food.set('Пицца "Пеперони"', 'Виктор');
food.set('Суши "Филадельфия"', 'Ольга');
food.set('Суши "Калифорния"', 'Ольга');
food.set('Тирамису', 'Дмитрий');
food.set('Чизкейк', 'Дмитрий');

const clientAlex = new Set().add('Пицца "Пеперони"').add('Тирамису');
const clientMaria = new Set().add('Суши "Калифорния"').add('Пицца "Маргарита"');
const clientIrina = new Set().add('Чизкейк')


const clients = new Map();
clients.set('Алексей', clientAlex);
clients.set('Mария', clientMaria    );
clients.set('Ирина', clientIrina);

console.log(`Пиццу Пеперрони готовит ${food.get('Пицца "Пеперони"')}`);