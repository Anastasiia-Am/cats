/*const nameCats = [
    'Кот с усами',
    'Кошка с колпаком',
    'Кот с тыквой',
    'Кошка-балерина'
]
for(let i=0; i < nameCats.length;i++){
    const dataNameCats = document.createTextNode(nameCats[i]);
    const textCats = document.getElementById(`name-cat-${i+1}`);
    textCats.appendChild(dataNameCats);
}
const ul = ['Гладкошерстный', 
'Белый с рыжими глазами', 
'Вакцинирован', 
'Есть ветпаспорт',
'Приучен к когтеточке',
'Знает лоточек'
];
*/
const infoCats =[
    {
        nameCat:'Кот с усами',
        type: 'Гладкошерстный',
        color:'Белый с рыжими глазами',
        vaccine:'Вакцинирован',
        passport: 'Есть ветпаспорт',
        things:'Приучен к когтеточке',
        tray: 'Знает лоточек'
    },
    {
        nameCat:'Кошка с колпаком',
        type: 'Гладкошерстная',
        color:'Трёхцветная с зелеными глазами',
        vaccine:'Вакцинирован',
        passport: 'Есть ветпаспорт',
        things:'Приучен к когтеточке',
        tray: 'Знает лоточек'
    },
    {
        nameCat:'Кот с тыквой',
        type: 'Гладкошерстный',
        color:'Черно-белый с зелеными глазами',
        vaccine:'Вакцинирован',
        passport: 'Есть ветпаспорт',
        things:'Приучен к когтеточке',
        tray: 'Знает лоточек'
    },
    {
        nameCat:'Кошка-балерина',
        type: 'Гладкошерстная',
        color:'Трёхцветная с зелеными глазами',
        vaccine:'Вакцинирован',
        passport: 'Есть ветпаспорт',
        things:'Приучен к когтеточке',
        tray: 'Знает лоточек'
    }
]
for(let i=0; i<infoCats.length;i++){
    const cat = infoCats[i];    
    const infoList =`
    <h3>${cat.nameCat}</h3>
    <ul>
        <li>${cat.type}</li>
        <li>${cat.color}</li>
        <li>${cat.vaccine}</li>
        <li>${cat.passport}</li>
        <li>${cat.things}</li>
        <li>${cat.tray}</li>
    </ul>
    `;
    const targetElement = document.querySelector(`#col_img_0${i+1}`);
    targetElement.insertAdjacentHTML('afterend',infoList);
}
const imgCats= [
    'img/catalog/01.png',
    'img/catalog/02.png',
    'img/catalog/03.png',
    'img/catalog/04.png',
]

const imgPaths = document.querySelectorAll('.col_img img');
for(let i=0; i<infoCats.length;i++){
    imgPaths[i].src = imgCats[i];
}