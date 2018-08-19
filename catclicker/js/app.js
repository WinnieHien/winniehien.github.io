
/*
 * Define variables
 */
const container = document.querySelector('.cat_container');
const cat_list = document.querySelector('.cat_list');

const name_list = ['Denali', 'Katahdin', 'Marty', 'Coco', 'Tater'];

// TODO: Add the images and names for other three cats
const pic_list = ['denali.png', 'katahdin.jpeg', 'marty.jpeg', 'coco.jpeg', 'tater.jpeg'];
const pic_list_alt = ['Denali the Sealpoint Ragdoll', 'Kathadin the Tail Chaser', 'Marty the Scaredy Cat', 'Coco the Runt of the Litter', 'Tater the All American Child']

function createCatList() {

    for (let i = 0; i < name_list.length; i++) {
        let newCat = document.createElement('button');
        newCat.className = name_list[i];
        newCat.classList.add('selection');
        newCat.innerHTML = name_list[i];
        cat_list.appendChild(newCat);
    }
};

createCatList();

// TODO: Asked this question and will need to check in again on the answer. Having difficulty learnign how to select the button for each name_list[i] element

// function bindButtontoCat(i) {
//     let cat_selected = document.querySelector(name_list[i] + '.selection')
//     // cat_selected.addEventListener('click', (e) => {
//     //     console.log('Selected: individual li');
//     //
//     // }, false);
//     // }
// }

// for (let i = 0; i < name_list.length; i++) {
//     let newCat = document.createElement('li');
//     newCat.className = name_list[i];
//     newCat.innerHTML = name_list[i];
//     cat_list.appendChild(newCat);
//
// cat.addEventListener('click', (e) => {
//     count++;
//     console.log('clicked ' + count + ' time(s)');
//     document.querySelector('.counter').innerHTML = name_list[i] + ' clicked ' + count + ' time(s)!';
// }, false);


createCatDiv(3);
updateCat(3);




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

    // TODO: Create closure around the count variable using the previous lesson
    let count = 0;
    let cat = document.querySelector('.cat .pic')

    cat.addEventListener('click', (e) => {
        count++;
        console.log('clicked ' + count + ' time(s)');
        document.querySelector('.counter').innerHTML = name_list[i] + ' clicked ' + count + ' time(s)!';
    }, false);

};
