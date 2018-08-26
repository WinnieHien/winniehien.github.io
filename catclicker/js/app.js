




/* ======= Model ======= */

let model = {

    // Set current cat to default. Will be updated by set current cat function
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Denali',
            imgAlt : 'Denali the Sealpoint Ragdoll',
            imgSrc : 'images/denali.png'
        },
        {
            clickCount : 0,
            name : 'Katahdin',
            imgAlt : 'Mischievious Katahdin',
            imgSrc : 'images/katahdin.jpeg'
        },
        {
            clickCount : 0,
            name : 'Marty',
            imgAlt : 'Scaredy Marty',
            imgSrc : 'images/marty.jpeg'
        },
        {
            clickCount : 0,
            name : 'Coco',
            imgAlt : 'Runt of the Litter Coco',
            imgSrc : 'images/coco.jpeg'
        },
        {
            clickCount : 0,
            name : 'Tater',
            imgAlt : 'Tater the All American Child',
            imgSrc : 'images/tater.jpeg'
        }
    ]
};


let octopus = {

    init: function () {
        // Set current cat to first cat
        model.currentCat = model.cats[0];

        // initialize the list view, and the first cat view
        catListView.init();
        catView.init();
        adminView.init();
    },

    // Needs to reference the clicked cat
    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    getCurrentCount: function () {
        return model.currentCat.clickCount;
    },

    getCats: function () {
        return model.cats;
    },

    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    },

    toggleForms: function () {
        form.classList.toggle('hidden');
    }

};

let catView = {
    init: function () {

        // Store pointers to the Dom Cat element
        this.cat = document.getElementById('cat');
        this.catName = document.getElementById('cat-name');
        this.catImage = document.getElementById('cat-img');
        this.catCounter = document.getElementById('cat-counter');

        // On click, increment cat counter
        this.catImage.addEventListener('click', (e) => {
            octopus.incrementCounter();
            console.log('clicked');
        });

        // Render the cat view
        this.render();
    },

    render: function () {
        let currentCat = octopus.getCurrentCat();
        this.catName.textContent = currentCat.name;
        this.catImage.src = currentCat.imgSrc;
        this.catImage.alt = currentCat.imgAlt;
        this.catCounter.textContent = 'Clicked ' + currentCat.clickCount + ' time(s)!';
    }
};

let catListView = {
    init: function () {
        // Get the cat list ul element so it can be used to store the rendered cats
        // Can access it from the render function
        this.catList = document.getElementById('cat-list');
        this.render();

        // This is the document?
    },

    render: function () {

        let cat, i, button, cats;
        // Will get cat list from the Model using the Octopus TODO: octopus get cat function
        cats = octopus.getCats();

        // Empty the innerHTML before creating the cat list. TODO: Is this neccessary?
        this.catList.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            button = document.createElement('button');
            // button.className = cat.name
            button.textContent = cat.name;


            // I think you add the return function to deal with the closure issues

            // TODO: Add click function to the cat List to render View 2

            button.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                    adminView.render();
                };
            })(cat));

            this.catList.appendChild(button);
        }


    },
};

let adminView = {
    init: function () {

        // Store pointers to the Admin element
        admin = document.getElementById('admin');
        form = document.querySelector('.form');

        // On click, toggle off the hidden default forms
        admin.addEventListener('click', function(e) {
            console.log('admin button clicked');
            octopus.toggleForms();
            adminView.render();
        });
    },

    render: function () {
        let currentCat = octopus.getCurrentCat();
        form.cat_name.value = currentCat.name;
        form.cat_url.value = currentCat.imgSrc;

        // currentCat.clickCount was permanently stuck at 0. Fix is to put adminView.render(); within the event listener.
        form.cat_clicks.value = currentCat.clickCount;
    },

    checkupdate: function () {
        console.log('The checkupdate function ran via onclick method');
    },

    update: function () {

        // Having issues understanding this part.
        console.log('The update function ran via onclick method');

        let new_name, new_url, new_count, form

        new_name = form.cat_name.value;
        new_url = form.cat_url.value;
        new_count = form.cat_clicks.value;

        // TODO: Find a way to submit the inputs!
        octopus.setCurrentCat();
        catView.render();

    }

};


octopus.init();
