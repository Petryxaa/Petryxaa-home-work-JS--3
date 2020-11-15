////- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//let user1 = {
//    name : 'viktor',
//    age : 29,
//    city: 'lviv',
//}
//let user2 = {
//name : 'andriy',
//age: 20,
//city: 'lviv',
//}
//let user3 = {
//name : 'Ana',
//age : 17,
//city : "New York",
//}
//let user4 = {
//    name:"Nina",
//    age: 18,
//    city:'Kyiv',
//}
//let user5 = {
//    name: 'Ivan',
//    age : 27,
//    city: "Moscow"
//}
//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//
//let man = {
//    name : "Tom",
//    age : 29,
//    skkils:["css ",2],
//    wife : {
//        name:"ana",
//        age : 18,
//        skkils :['html',1]
//    }
//    
//}
//let car ={
//    name :'Toyota',
//    year :1998,
//    volume : [3.2,"km"],
//    complete : {
//    color : "red",
//    colorSalon :"black",
//seria: ['a',5]
//    }
//}
//
//let computer = {
//    name : 'Lenovo',
//    year : 2019,
//    system: ['windows', 10 ],
//    complete : {
//        color : 'Bleck',
//        videoCard : ["Geforce GTX",1650]
//    }
//}
//let tank1 = {
//    name : 'T-64BV',
//  year : 1964,
//    system : ['1A33',1],
//    complete:{
//        snarad : 28,
//        snaradvud : ["komulatuvn","oskolohnu","broneboynuy"],
//        armament : ["PKT","NSVT"],
//    }
//}
//let tank2 = {
//    name : 'T-72AV',
//    year : 1972,
//    system : ['2A46',1],
//    complete:{
//        snarad : 28,
//        snaradvud : ["komulatuvn","oskolohnu","broneboynuy"],
//        armament : ["PKT","NSVT"],
//    }
//    }
////////////////////////////////////////////////////////////////////////////////
//- При помощи for in вывести все ключи всех объектов из задания 1 и 2


//for(let keys in user1){
//    console.log(keys);
//}
//for(let keys1 in user2){
//    console.log(keys1);
//}
//for(let keys2 in user3){
//    console.log(keys2);
//}
//
//for(let keys3 in user4){
//    console.log(keys3);
//}
//for(let keys4 in user5){
//    console.log(keys4)
//}
//for(let keys in man){
//    console.log(keys);
//}
//for(let keys1 in car){
//    console.log(keys1);
//}
//for(let keys2 in computer){
//    console.log(keys2);
//}
//for(let keys3 in tank1 ){
//    console.log(keys3);
//}
//for(let keys4 in tank2){
//    console.log(keys4);
//}
//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

//let keys = Object.keys(user1);
//console.log(keys);
//let keys1 = Object.keys(user2);
//console.log(keys1);
//let keys2 = Object.keys(user3);
//console.log(keys2);
//
//
//let keys3 = Object.keys(user4);
//console.log(keys3);
//let keys4 = Object.keys(user5);
//console.log(keys4);
//
//
//- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
//let cars = [
//{name : "Toyota",color : "bleck",age : 2020,pawer : 5.0},
//{name : "BMW", color : "white",age :1998, pawer : 3.0},
//{name : "Mazda",color : "red",age :2001, pawer : 4.0},
//{name : "Mersedes",color: "yellow",age :2000,pawer:3.2},
//{name : "Nisan",color:'yellow',age: 2009,pawer : 1.8},
//{name : "Volvo",color:'yellow',age: 2009,pawer : 1.8},
//{name : "zaz",color:'porpul',age: 2000,pawer : 1.8},
//{name : "Nisan-s",color:'yellow',age: 2020,pawer : 2.0},
//{name : "Subaru",color:'red',age: 2020,pawer : 2.0},
//{name : "Ford",color:'white',age: 2020,pawer : 2.0},
//    ]
//    console.log(cars);
//
//let cars = [
//car1 = {name : "Toyota",color : "bleck",age : 2020,pawer : 5.0},
//car2 = {name : "BMW", color : "white",age :1998, pawer : 3.0},
//car3 = {name : "Mazda",color : "red",age :2001, pawer : 4.0},
//car4 = {name : "Mersedes",color: "yellow",age :2000,pawer:3.2},
//car5 = {name : "Nisan",color:'yellow',age: 2009,pawer : 1.8},
//car6 = {name : "Volvo",color:'yellow',age: 2009,pawer : 1.8},
//car7 = {name : "zaz",color:'porpul',age: 2000,pawer : 1.8},
//car8 = {name : "Nisan-s",color:'yellow',age: 2020,pawer : 2.0},
//car9 = {name : "Subaru",color:'red',age: 2020,pawer : 2.0},
//car10 = {name : "Ford",color:'white',age: 2020,pawer : 2.0},
//]
////console.log(cars);
/////////////////////////////
////- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
////
//let cities = [
//{county:"Ukraine",city:"Lviv",regionNamber : 14},
//{county:"Ukraine",city:"Sevastopol",regionNamber : 01},
//{county:"Ukraine",city:"Vinnytsia",regionNamber : 02},
//{county:"Ukraine",city:"Lutsk",regionNamber : 03},
//{county:"Ukraine",city:"Dnipropetrovsk",regionNamber : 04},
//{county:"Ukraine",city:"Donetsk",regionNamber : 05},
//{county:"Ukraine",city:"Zhytomyr",regionNamber : 06},
//{county:"Ukraine",city:"Mukachevo",regionNamber : 07},
//{county:"Ukraine",city:"Zaporizhzhia",regionNamber : 08},
//{county:"Ukraine",city:"Ivano-Frankivsk",regionNamber : 09},
//]
//////console.log(cities);
////console.log(cities[0],cities[1]);  
//console.log(cities[9]);
//for(let vuvod of cities){
//    console.log(vuvod);
//}
//for(let z in cities[1]){
//    console.log(z);
//}
//for(let x in cities){
//console.log(cities[x]);
//}
//for( s of cities){
//    console.log(s['city']);
//    console.log(s['regionNamber']);
//}
//
//
//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//
//let cars = [
//  {model : 'Ford',age : 1999,pawer : 5.0,color :'bleck'},
//  driver = {name : " Oleg", age : 29 ,experience:"expert" },
//
//]

//- проитерировать каждый массив из задания 5,6,7 при помощи while.
// task # 5
//let i = 0;
//while(i < cars.length){
//    i++;
//    console.log(cars[i]);
//}
////// task #6:
//let i = 0;
//while(i < cities.length){
//    console.log(cities[i]);
//    i++;
//}
/////// task #7 :
//
//let i = 0;
//while(i < cars.length){
//    console.log(cars[i]);
//    i++;
//}
//- проитерировать каждый массив из задания 5,6,7 при помощи for .
// task # 5
//for(let i = 0 ;i < cars.length;i++){
//console.log(cars[i]);
//}
//task # 6 :
//for(let i = 0; i < cities.length;i++){
//    console.log(cities[i]);
//}
//task # 7:
//
//for(let i = 0; i < cars.length;i++){
//    console.log(cars[i]);
//}
//- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
///task # 5
//for(let p of cars){
//    console.log(p);
//}
/////task # 6
//console.log("-------")
//for(let s of cities){
//    console.log(s);
//}
/////task # 7
//for(let c of cars){
//    console.log(c);
//}
//- взять объекты из задания 1 и превратить каждый в json.
//
//let stringJSON1 = JSON.stringify(user1);
////console.log(stringJSON1);
//let stringJSON2 = JSON.stringify(user2);
////console.log(stringJSON2);
//let stringJSON3 = JSON.stringify(user3);
////console.log(stringJSON3);
//let stringJSON4 = JSON.stringify(user4);
////console.log(stringJSON4);
//let stringJSON5 = JSON.stringify(user5);
//console.log(stringJSON5);

//- взять json из задания 11 и превратить их обратно в объекты.
//
//let object = JSON.parse(stringJSON1);
//console.log(object); 
//let object1 = JSON.parse(stringJSON2);
//console.log(object1);
//let object2 = JSON.parse(stringJSON3);
//console.log(object2);
//let object4 = JSON.parse(stringJSON4);
//console.log(object4);
//let object5 = JSON.parse(stringJSON5);
//console.log(object5);
//- взять массив из задания 5,в цикле перебрать его объекты превратив  их в json .
//
//for(let i = 0; i < cars.length;i++){
//    let s = JSON.stringify(cars[i])
//    console.log(s)
//}
//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//
//for(let i = 0; i < cities.length;i++){
//    let object = cities[i];
//    console.log(JSON.stringify(object));
//}
//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//let newMasuv = [];
//for(let i = 0; i < cars.length;i++){
    //newMasuv = JSON.stringify(cars[i]);
    //console.log(newMasuv);
    //}
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

//let users  = [
//    {name : "Vova",skills:["very good",99]},
//    {name : "Ana",skills:["bad",30]}
//];
//
//for(let user of users){
//    console.log(user.name);
//    for(let skill of user.skills){
//        console.log(skill)
//    }
//}
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. 
// Скопировать все skills всех пользователей в отедльный массив
//let users  = [
//        {name : "Vova",skills:["very good",99]},
//        {name : "Ana",skills:["bad",30]}
//    ];
//let newMasuv =[];
//////////////////////////// 1:
//for(slill of users){
//    for(let newMasuv of slill.skills){
//        console.log(newMasuv);
//    }
//}
//
//
/////////////////////// 2:
//
//for(let skill of users){
//for(let newMasuv of skill['skills'] ){
//
//    
//    console.log(newMasuv);
//}
//}
//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//for(let str of users){
//    for( let  z of str.skills){
//        console.log(z)
//    }
//}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//            			let users = [{
//            				name: 'vasya',
//            				age: 31,
//            				status: false,
//            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//            			}, {
//            				name: 'petya',
//            				age: 30,
//            				status: true,
//            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//            			}, {
//            				name: 'kolya',
//            				age: 29,
//            				status: true,
//            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//            			}, {
//            				name: 'olya',
//            				age: 28,
//            				status: false,
//            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//            			}, {
//            				name: 'max',
//            				age: 30,
//            				status: true,
//            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//            			}, {
//            				name: 'anya',
//            				age: 31,
//            				status: false,
//            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//            			}, {
//            				name: 'oleg',
//            				age: 28,
//            				status: false,
//            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//            			}, {
//            				name: 'andrey',
//            				age: 29,
//            				status: true,
//            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//            			}, {
//            				name: 'masha',
//            				age: 30,
//            				status: true,
//            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//            			}, {
//            				name: 'olya',
//            				age: 31,
//            				status: false,
//            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//            			}, {
//            				name: 'max',
//            				age: 31,
//            				status: true,
//            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//                        }];
//                        
////- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
////let masuv = [];
//for(let rules of users){
//    masuv.push(rules.address);
//}
//console.log(masuv);
//
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
//розділивши всі властивості по своїм блокам (div>div*4)
//
//for(let i = 0 ; i < users.length;i++){
//let us = users[i];
//    let div1 = document.createElement('div');
//    let div2 = document.createElement('div');
//    let div3 = document.createElement('div');
//    let div4 = document.createElement('div');
//
//div1.innerText = `${us.name}`;
//div2.innerText = `${us.age}`;
//div3.innerText = `${us.address}`;
//div4.innerText = `${us.status}`;
//    document.body.appendChild(div1);
//    document.body.appendChild(div2);
//    document.body.appendChild(div3)
//    document.body.appendChild(div4)
//}
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//
//for(let i = 0;i < users.length;i++){
//
//let user = users[i];
//const userDiv = document.createElement('div');
//userDiv.style.background ='green';
//
//
//userDiv.innerText = user.name + " " + user.age + " " + user.status;
//
//document.body.appendChild(userDiv);
//
//}
//- 1---->За допомоги циклу проітерувати  масив users, 
//-2---->записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
////3---> блок з адресою зробити окремим блоком, з блоками для кожної властивості-------------------------------------------------------------------------??????????????не розумію
//
//for(let i = 0;i < users.length-10;i++){
//  
//
//        
//        let userDiv0 = users[0];
//        let userDiv1 = users[1];
//        let userDiv2 = users[2];
//        let userDiv3 = users[3];
//        let userDiv4 = users[4];
//        let userDiv5 = users[5];
//        let userDiv6 = users[6];
//        let userDiv7 = users[7];
//        let userDiv8 = users[8];
//        let userDiv9 = users[9];
//        let userDiv10 = users[10];
//        
//        
//        
//        let user0 = document.createElement('div');
//        user0.innerText = userDiv0.name + " " + userDiv0.status + " " + userDiv0.age ;
//        
//        let user1 = document.createElement('div');
//        user1.innerText = userDiv1.name + " " + userDiv1.status + " " + userDiv1.age;
//        
//        let user2 = document.createElement('div');
//        user2.innerText = userDiv2.name + " " + userDiv2.status + " " + userDiv2.age;
//        
//        let user3 = document.createElement('div');
//        user3.innerText = userDiv3.name + " " + userDiv3.status + " " + userDiv3.age;
//        
//        let user4 = document.createElement('div');
//        user4.innerText = userDiv4.name + " " + userDiv4.status + " " + userDiv4.age;
//        
//        let user5 = document.createElement('div');
//        user5.innerText = userDiv5.name + " " + userDiv5.status + " " + userDiv5.age;
//        
//        let user6 = document.createElement('div');
//        user6.innerText = userDiv6.name + " " + userDiv6.status + " " + userDiv6.age;
//        
//        let user7 = document.createElement('div');
//        user7.innerText = userDiv7.name + " " + userDiv7.status + " " + userDiv7.age;
//        
//        let user8 = document.createElement('div');
//        user8.innerText = userDiv8.name + " " + userDiv8.status + " " + userDiv8.age;
//        
//        let user9 = document.createElement('div');
//        user9.innerText = userDiv9.name + " " + userDiv9.status + " " + userDiv9.age;
//        
//        let user10 = document.createElement('div');
//        user10.innerText = userDiv10.name + " " + userDiv10.status + " " + userDiv10.age;
//        
//        document.body.appendChild(user0);
//        document.body.appendChild(user1);
//        document.body.appendChild(user2);
//        document.body.appendChild(user3);
//        document.body.appendChild(user4);
//        document.body.appendChild(user5);
//        document.body.appendChild(user6);
//        document.body.appendChild(user7);
//        document.body.appendChild(user8);
//        document.body.appendChild(user9);
//        document.body.appendChild(user10);
//        
//    }
//    
/////////////////////////////////////////////////////////  
//-Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
//let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//for(let user  of  usersWithId){
//    for(let city of citiesWithId){
//        if(user.id === city.user_id){
//user.address = city;
//    }
//    }
//}
//console.log(usersWithId);

//- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
///////
//let elementID = document.getElementById('one');
//let text = elementID.innerText;
//console.log(text);
//
//let elementID1 = document.getElementById('one');
//let text1 = elementID1.innerHTML;
//console.log(text1);
//text1.innerText = " Hello mentor!"
////////////
//let elementClass = document.getElementsByClassName('two');
//for(let  element of elementClass){
//	console.log(element);
//}
//let elmentCl = document.getElementsByClassName('three');
//for(let el of elmentCl){
//	el.innerText = " I study every day for 5 hours";
//}
//let elementTeg = document.getElementsByTagName('p');
//for(let eleTeg of elementTeg){
//	console.log(eleTeg);
//	eleTeg.innerText = " I weke up at 3 oclock at night and study Java Script then I go to work!!!"
//}
//- змінити цей текст використовуючи селектори id, class,  tag
//
//let classId = document.getElementById('one');
//classId.innerHTML = 'cheng';
//
//let elementClass1 = document.getElementsByClassName('new');
//for(let element1 of elementClass1){
//	//element1.innerText = "Repeat";
//	//element1.innerHTML = "try";
//} 
//let elementTeg = document.getElementsByTagName('b');
//for(let teg of elementTeg){
//	teg.innerHTML = "Try ";
//teg.style.backgroundColor = '#120ba5';
//}
//////////////////////////////////////////////////////////////////////////
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//
//let elementID = document.getElementById('one');
//elementID.style.width = '100px';
//elementID.style.height = '100px';
//elementID.style.backgroundColor = '#f7e30a';
//let elementClass = document.getElementsByClassName('two');
//for(let divClass of elementClass){
//	divClass.style.width = '200px';
//	divClass.style.height = '200px';
//	divClass.style.backgroundColor = '#101ba5';
//}
//let elementTag = document.getElementsByTagName('p');
//for(let tag of elementTag){
//	tag.style.width = '300px';
//	tag.style.height = '100px'
//	tag.style.backgroundColor = '#f7260a';
//}
//
//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//
//let table  = document.createElement('table');
//let tr = document.createElement('tr');
//let td1 = document.createElement('td');
//let td2 = document.createElement('td');
//let td3 = document.createElement('td');
//
//td1.innerText = '1';
//td2.innerText = '2';
//td3.innerText = '3';
//
//tr.appendChild(td1);
//tr.appendChild(td2);
//tr.appendChild(td3);
//table.appendChild(tr);
//
//document.body.appendChild(table);
////////////////////////////////////
//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//
//let table = document.createElement('table');
//let tr = document.createElement('tr');
//for(let i = 0; i < 10;i++){
//	let tr = document.createElement('tr');
//for(let j = 0 ; j < 3;j++){
//	let td = document.createElement('td');
//	tr.appendChild(td);
//}
//table.appendChild(tr);
//}
//document.body.appendChild(table);
/////////////////////////////////////////////////////////////////////
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//
//let table = document.createElement('table');
//
//for(let i = 0;i < 10; i++){
//let tr = document.createElement('tr');
//for(let j =0 ; j < 5; j++){
//let td = document.createElement('td');
//tr.appendChild(td);
//}
//table.appendChild(tr);
//}
//document.body.appendChild(table);
///////////////////////////////////////////////////////////////////////
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
/////////////////////////////////////////////////////////////////////
//let table = document.createElement('table');
//
//for(let i = 0;i < 10; i++){
//let tr = document.createElement('tr');
//tr.innerHTML = 'God table'
//for(let j =0 ; j < 5; j++){
//	let td = document.createElement('td');
//	td.innerHTML='hello user'
//	tr.appendChild(td);
//}
//table.appendChild(tr);
//}
//document.body.appendChild(table);
//
//let n = prompt('table');
//	if(n === 'tr'){
//document.write(tr[i]);
//	}
//
//
//
//let m = prompt('table');
//if(m === 'td'){
//	document.write(td[j]);
//} 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний
//
//let clas = document.querySelector('[id]')
//console.log(clas);
//
//
//let p = document.getElementsByTagName("p")
//for(let paragraf of p){
//	paragraf.style.backgroundColor = '#f7260a';
//	paragraf.innerHTML ="Hello Oktenweb! "
//}
//let div = document.getElementsByTagName('div');
//for(let blok of div){
//	blok.style.backgroundColor = '#f7260a';
//}

//============
//====class===
//============
//////////////
//			let rules = [
//				{
//					title: 'Первое правило Бойцовского клуба.',
//					body: 'Никому не рассказывать о Бойцовском клубе.'
//				},
//				{
//					title: 'Второе правило Бойцовского клуба.',
//					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//				},
//				{
//					title: 'Третье правило Бойцовского клуба.',
//					body: 'В схватке участвуют только двое.'
//				},
//				{
//					title: 'Четвертое правило Бойцовского клуба.',
//					body: 'Не более одного поединка за один раз.'
//				},
//				{
//					title: 'Пятое правило Бойцовского клуба.',
//					body: 'Бойцы сражаются без обуви и голые по пояс.'
//				},
//				{
//					title: 'Шестое правило Бойцовского клуба.',
//					body: 'Поединок продолжается столько, сколько потребуется.'
//				},
//				{
//					title: 'Седьмое правило Бойцовского клуба.',
//					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//				},
//				{
//					title: 'Восьмое и последнее правило Бойцовского клуба.',
//					body: 'Новичок обязан принять бой.'
//				},
//
////			];
//
////- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//let h2 = document.getElementsByTagName('h2')
//let elementID = document.getElementById('content');
//let ul = document.createElement('ul')
//for(let spusok of h2 ){
//	let li = document.createElement('li');
//	li.innerText = spusok.innerText;
//	ul.appendChild(li);
//}
//elementID.appendChild(ul);

//
//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//let wrap = document.createElement('div');
//wrap.id = 'wrap';
//
//for(let i = 0 ; i < rules.length;i++){
//    let rule = rules[i];
//
//let div = document.createElement('div');
//let h2 = document.createElement('h2');
//let p = document.createElement('p');
//
//div.className = `rules rule${i}`;
//h2.innerText = rule.title;
//p.innerText = rule.body;
//
//div.appendChild(h2);
//div.appendChild(p);
//
//wrap.appendChild(div);
//}
//document.body.appendChild(wrap);
//
//

//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. 
//За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).










//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
// За допомогою document.createElement вивести їх в браузер. 
//Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
//За допомогою document.createElement вивести їх в браузер. 
//Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).


//****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
//Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
//