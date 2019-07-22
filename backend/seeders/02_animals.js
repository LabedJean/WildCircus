const models = require('../models');
const Animal = models.Animal;

Animal.create({
    firstname: "Dumbo",
    age: 2,
    genre: "Male",
    race: "Elephant",
    staffId: 8,
    picture: "https://i.ibb.co/cF4yV7h/elephant.jpg"
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));


Animal.create({
    firstname: "Tigrou",
    age: 5,
    genre: "Male",
    race: "Tigre du Congo",
    staffId: 2,
    picture: "https://i.ibb.co/y42wYmY/tigre.jpg"
    
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "MaréchialleMarion",
    age: 15,
    genre: "Female",
    race: "Macaque",
    staffId: 7,
    picture: "https://i.ibb.co/Ln3SKMK/macaque.jpg"

})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Kaaris",
    age: 1,
    genre: "Personne ne sait",
    race: "Gorille",
    staffId: 2,
    picture: "https://i.ibb.co/DGW04z3/gorille.png"

})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Raeghar",
    age: 3,
    genre: "Male",
    race: "Dragon de comodo",
    staffId: 6,
    picture: "https://i.ibb.co/Wg6zn4q/Komodo.jpg"

})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));
