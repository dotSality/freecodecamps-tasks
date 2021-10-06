// var myDog = {
// // Only change code below this line
//     name: 'Bobik',
//     legs: 4,
//     tails: 1,
//     friends: ['other dogs', 'bones']
//
// // Only change code above this line
// };

//
// // Setup
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };
//
// // Only change code below this line
//
// var hatValue = testObj.hat;      // Change this line
// var shirtValue = testObj.shirt;    // Change this line
//

// // Setup
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };
//
// // Only change code below this line
//
// var entreeValue = testObj['an entree'];   // Change this line
// var drinkValue = testObj['the drink'];    // Change this line

// Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };
//
// // Only change code below this line
//
// var playerNumber = 16;       // Change this line
// var player = testObj[playerNumber];   // Change this line

// Setup
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
//
// // Only change code below this line
// myDog.name = 'Happy Coder'

// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
//
// myDog.bark = 'woof'

// Setup
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };
//
// // Only change code below this line
// delete myDog.tails;

// Setup
// function phoneticLookup(val) {
//     var result = "";
//     // Only change code below this line
//     let lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "Frank",
//     }
//     result = lookup[val];
//     // Only change code above this line
//     return result;
// }
//
// phoneticLookup("charlie");

// function checkObj(obj, checkProp) {
//     // Only change code below this line
//
//     return (obj.hasOwnProperty(checkProp)) ? obj[checkProp] : 'Not Found';
//     // Only change code above this line
// }

// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true
//     },
//     {
//         'artist': 'Metallica',
//         'title': 'Master of Puppets',
//         'release_year': 1986,
//         'formats': [
//             'CD',
//             'Vinyl',
//         ],
//         'platinum': true
//     }
// ];


// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
//
// var gloveBoxContents = myStorage.car.inside['glove box'];

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];