
/*
 * Define variables
 */
const container = document.querySelector('.cat_container');
const name_list = ['Denali', 'Katahdin', 'Marty', 'Coco', 'Tater'];
const pic_list = ['denali.png', 'katahdin.jpeg'];
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
    let pic = document.querySelector('.pic');
    pic.src = 'images/' + pic_list[i];
    pic.alt = pic_list_alt[i];

    // Add Name
    let name = document.querySelector('.name');
    name.innerHTML = 'My name is ' + name_list[i];
    name.classList.add(name_list[i]);

    // Add Counter
    let counter = document.querySelector('.counter');
    let count = 1; // TODO: Change from static to dynamic counter
    counter.innerHTML = name_list[i] + ' clicked ' + count + ' time(s)!';
};

updateCat(1);


// denali.addEventListener('click', (e) => {
//     counter_d++;
//     console.log('clicked ' + counter_d + ' time(s)');
//     document.querySelector('.click_counter_d').innerHTML = 'Denali clicked ' + counter_d + ' time(s)!';
// }, false);
