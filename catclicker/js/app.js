

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
        });

        // Render the admin forms
        // this.render();
    },

    // render: function () {
    //     console.log('Rendering admin View')
    //
    // }
};


octopus.init();
