
const array = [{
    title: 'notre dame de paris',
    url: 'https://i.pinimg.com/originals/f3/40/f4/f340f42241a91966444229a51ec07ac6.jpg',
    author: 'victor hugo'
},
    {
        title: 'code da vinci',
        url: 'https://www.babcockbooks.com/pictures/26675.jpg', 
        author: 'dan brown'
    },
    {
        title: 'мастер и маргарита',
        url: 'https://knijky.ru/sites/default/files/styles/264x390/public/31583.jpg?itok=rm1YiVJV',
        author: 'Михаил булгаков'
    }];

function creatList(array) {
    console.log(array);
   return array.map(elem => {
        const item = document.createElement('li');
        const title = document.createElement('h2');
        const img = document.createElement('img');
        const author = document.createElement('p');
       img.setAttribute('src', elem.url);
       img.setAttribute('width', '200px');
        author.textContent = elem.author;
        title.textContent = elem.title;
        item.append(title, img, author);
        return item;
    })
};
const items = creatList(array);
console.log(items);
const ulEl = document.getElementById('books');
ulEl.append(...items);