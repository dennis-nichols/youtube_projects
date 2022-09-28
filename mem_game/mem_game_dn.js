// creates an array that we will use to make our grid of images (12 because 6 sets of 2)
const cardArray = [
    {
        name: 'flamingo',
        img: 'images/flamingo.jpg', 
    }, 
    {
        name: 'gull',
        img: 'images/gull.jpg',
    },
    {   name: 'humming',
        img: 'images/humming.jpg',
    },
    {   name: 'parrot',
        img: 'images/parrot.jpg',
    },
    {   name: 'swans',
        img: 'images/swans.jpg',
    },
    {   name: 'toucan',
        img: 'images/toucan.jpg',
    },
    {
        name: 'flamingo',
        img: 'images/flamingo.jpg', 
    }, 
    {
        name: 'gull',
        img: 'images/gull.jpg',
    },
    {   name: 'humming',
        img: 'images/humming.jpg',
    },
    {   name: 'parrot',
        img: 'images/parrot.jpg',
    },
    {   name: 'swans',
        img: 'images/swans.jpg',
    },
    {   name: 'toucan',
        img: 'images/toucan.jpg',
    }
    
]

//randomly sort the cards
cardArray.sort(() => 0.5 - Math.random())

//makes a variable that grabs the html display grid element
const gridDisplay = document.querySelector('#grid');


function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('data-id', i);
        card.setAttribute('src', 'images/blue_sky.jpg');
        gridDisplay.appendChild(card);
}
}

createBoard()
