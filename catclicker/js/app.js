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




let catView = {
    init: function () {

        // Store pointers to the Dom Cat element
        this.cat = document.getElementById('cat');
        this.catName = document.getElementById('cat-name');
        this.catImage = document.getElementById('cat-img');
        this.catCounter = document.getElementById('cat-counter');

        // On click, increment cat counter using Octopus
        this.catImage.addEventListener('click', (e) => {
            octopus.incrementCounter();
            adminView.render(); // Updates the adminView as the counter is clicked.
        });

        // Render the cat view
        this.render();
    },

    render: function () {
        let currentCat = octopus.getCurrentCat();
        // Uses the octopus to return the model.currentCat array

        // Pulls the data from current Cat into the HTML elements
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
    },

    render: function () {
        // Initialize variables ued in render function
        let cat, i, button, cats;

        // Will get cat list from the Model using the Octopus
        cats = octopus.getCats();

        // Empty the innerHTML before creating the cat list.
        this.catList.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            button = document.createElement('button');
            button.textContent = cat.name;


            // TODO: Figure out purpose of return function. I think it's to deal with the closure issues. Check the lesson guidance.

            button.addEventListener('click', (function(catCopy) { // When any of the buttons are clicked, catCopy gets returned to setCurrentCat in the octopus, which will update the current cat.
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render(); // Re-render the cat view
                    adminView.render(); // Updates the admin panel with the newly selected cat information.
                };
            })(cat));

            // Append the button to the cat list.
            this.catList.appendChild(button);
        }
    },
};

let octopus = {

    init: function () {
        // Set current cat to first cat
        model.currentCat = model.cats[0];

        // initialize the list view, the first cat view, and the admin button
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



let adminView = {
    init: function () {
        admin = document.getElementById('admin');
        form = document.querySelector('.form');

        // On click, toggle on/off the hidden default forms
        admin.addEventListener('click', function(e) {
            octopus.toggleForms();
        });

        adminView.render(); // Load initial cat data into admin panel
    },


    // Fills admin panel with currentCat data
    render: function () {
        let currentCat = octopus.getCurrentCat();
        form.cat_name.value = currentCat.name;
        form.cat_url.value = currentCat.imgSrc;
        form.cat_clicks.value = currentCat.clickCount;
    },

    // Update the cat display if data is changed via the admin panel
    update: function () {

        // Get the current cat variable
        let currentCat = octopus.getCurrentCat();

        // Set the current cat values to the new form values on the right
        currentCat.name = form.cat_name.value;
        currentCat.imgSrc = form.cat_url.value;
        currentCat.clickCount = form.cat_clicks.value;

        // Render the new cat view
        catView.render();
    }
};

octopus.init();
