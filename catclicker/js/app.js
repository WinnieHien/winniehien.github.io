
/*
 * Define variables
 */
const container = document.querySelector('.cat_container');
const cat_list = document.querySelector('.cat_list');

const name_list = ['Denali', 'Katahdin', 'Marty', 'Coco', 'Tater'];

// TODO: Add the images and names for other three cats
const pic_list = ['denali.png', 'katahdin.jpeg'];
const pic_list_alt = ['Denali the Sealpoint Ragdoll', 'Kathadin the Tail Chaser']

function createCatList() {

    for (let i = 0; i < name_list.length; i++) {
        let newCat = document.createElement('li');
        newCat.className = name_list[i];
        newCat.innerHTML = name_list[i];
        cat_list.appendChild(newCat);
    }
};

createCatList();

createCatDiv(0);
updateCat(0);

function createCatDiv(i) {

    // Create Container for new cats
    let newDiv = document.createElement('div');
    newDiv.className = 'cat';
    newDiv.classList.add(name_list[i]);
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

function updateCat(i) {

    // Add blank Img element
    let pic = document.querySelector('.pic');
    pic.src = 'images/' + pic_list[i];
    pic.alt = pic_list_alt[i];

    // Add Name
    let name = document.querySelector('.name');
    name.innerHTML = 'My name is ' + name_list[i];

    // Add Counter and Click Event Listener

    count = 0;
    let cat = document.querySelector('.cat .pic')

    cat.addEventListener('click', (e) => {
        count++;
        console.log('clicked ' + count + ' time(s)');
        document.querySelector('.counter').innerHTML = name_list[i] + ' clicked ' + count + ' time(s)!';
    }, false);

};
