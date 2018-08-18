
/*
 * Define variables
 */
const container = document.querySelector('.cat_container');
const denali = document.querySelector('.denali');
const katahdin = document.querySelector('.katahdin');
let counter_d = 0;
let counter_k = 0;

// TODO: Add name of cats to website

const name_d = 'Denali'
const name_k = 'Katahdin'

const name_list = ['Denali', 'Katahdin', 'Marty', 'Coco', 'Tater'];
const pic_list = ['denali.png', 'katahdin.png'];
const pic_list_alt = ['Denali the Sealpoint Ragdoll', 'Kathadin the Tail Chaser']


function createCatDiv() {

    // Create Container for new cats
    let newDiv = document.createElement('div');
    newDiv.className = 'cat';
    container.appendChild(newDiv);

    // Add blank Img element
    let pic = document.createElement('img');
    pic.className = 'pic';
    document.querySelector('.cat').appendChild(pic);

    // Add blank Name element
    let name = document.createElement('h2');
    name.className = 'name';
    document.querySelector('.cat').appendChild(name);

    // Add blank Counter element
    let counter = document.createElement('h3');
    counter.className = 'counter';
    document.querySelector('.cat').appendChild(counter);

};

createCatDiv();


function updateCat(i) {

    // Add blank Img element
    // let pic = document.querySelector('.pic');
    // document.querySelector('.cat').innerHTML = 'My name is ' + list[i];

    // Add Name
    let name = document.querySelector('.name');
    name.innerHTML = 'My name is ' + name_list[i];
    name.classList.add(name_list[i]);

    // Add blank Counter element
    // let counter = document.createElement('h3');
    // counter.className = 'counter';
    // document.querySelector('.cat').appendChild(counter);

};

updateCat(1);



// newCat.classList.add(list[i])
// let catName = document.querySelector('.cat').createElement('h2');
// newDiv.appendChild(catName);
// catName.className = 'name'
// newCatName.classList.add(list[i]);

// function createCards () {
//     shuffle(list);
//     for (let i = 0; i < list.length; i++) {
//         let newCard = document.createElement('li');
//         newCard.className = 'card';
//         newCard.classList.add('fa');
//         newCard.classList.add(list[i]);
//         deck.appendChild(newCard);
//     }
// }




function activateName() {
    document.querySelector('.name_denali').innerHTML = 'My name is ' + name_d;
};

activateName();

denali.addEventListener('click', (e) => {
    counter_d++;
    console.log('clicked ' + counter_d + ' time(s)');
    document.querySelector('.click_counter_d').innerHTML = 'Denali clicked ' + counter_d + ' time(s)!';
}, false);

katahdin.addEventListener('click', (e) => {
    counter_k++;
    console.log('clicked ' + counter_k + ' time(s)');
    document.querySelector('.click_counter_k').innerHTML = 'Katahdin clicked ' + counter_k + ' time(s)!';
}, false);
