let sample = document.querySelector('.sample');
let menuList = document.querySelector('.menu__list');
let store = [
    itemInfo = {
        fotoSrc: './img/image-item1.jpeg',
        title: 'Полезный завтрак',
        text: ' Цельнозерновой ржаной хлеб из закваски, омлет из яичных белков, гранола, салат из творога, грецких орехов, помидоров черри, зеленых и черных оливок',
        price: '250₺'
    },
    itemInfo = {
        fotoSrc: './img/image-item2.jpeg',
        title: 'Миска с гранолой',
        text: 'Йогуртовая гранола с медом и ежевикой, бананы, малина, клубника, черника, хлопья гранолы и семена чиа',
        price: '300₺'
    },
    itemInfo = {
        fotoSrc: './img/image-item3.jpeg',
        title: 'Тосты с кашкавалом',
        text: 'Тост из сурдога с сыром, зеленый салат',
        price: '200₺'
    }
]
console.log(store[0])
for(let i = 0; i < store.length; i++){
    let sampleClone = sample.cloneNode(true); // клонируем див и всё содержимое
    sampleClone.classList.remove('sample');
    sampleClone.querySelector('img').setAttribute('src', store[i].fotoSrc)
    sampleClone.querySelector('h3').innerHTML = store[i].title
    sampleClone.querySelector('p').innerHTML = store[i].text
    sampleClone.querySelector('span').innerHTML = store[i].price
    menuList.appendChild(sampleClone); // склонированный див вставляем в конце menuList
}