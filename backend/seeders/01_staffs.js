const models = require('../models');
const Staff = models.Staff;

Staff.create({
    name: "Castello",
    firstname: "Damien",
    pseudonym: "Dems",
    work: "Cracheur",
    genre: "Homme",
    picture: "https://i.ibb.co/gWP272C/Cracheur-Card.jpg",
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Hamici",
    firstname: "Walid",
    pseudonym: "Wawaa",
    work: "Dompteur",
    genre: "Homme",
    picture: "https://i.ibb.co/3mpPF1s/Dompteur-Card.jpg",
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Morcillo",
    firstname: "Muriel",
    pseudonym: "MamieMumu",
    work: "Trapéziste",
    genre: "Femme",
    picture: "https://i.ibb.co/z60qXjQ/Trapezistes-Card.jpg",
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Boukerche",
    firstname: "Radouane",
    pseudonym: "Doudou",
    work: "Clown",
    genre: "Homme",
    picture: "https://i.ytimg.com/vi/cF3gioIvpuI/maxresdefault.jpg",
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Urth",
    firstname: "Stéphane",
    pseudonym: "El Orator",
    work: "Equilibriste",
    genre: "Homme",
    picture: "https://tse3.mm.bing.net/th?id=OIP.83lzmL0aZ5ES7X1wJU0V5AHaFs&pid=15.1&P=0&w=300&h=300",
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Mouledous",
    firstname: "Seb",
    pseudonym: "MuhQueen",
    work: "Fakir",
    genre: "Homme",
    picture: "https://c8.alamy.com/compfr/e16y51/fakir-effectuant-lmortification-ajmer-inde-e16y51.jpg",
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Benamar",
    firstname: "Hafid",
    pseudonym: "CyberHafid",
    work: "Illusionniste",
    genre: "Homme",
    picture: "https://www.nairaland.com/attachments/1605003_fake_magician_jpegfb4bdab781ac3b81b9301104e1e4b1ca"
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Blaffa",
    firstname: "Isaure",
    pseudonym: "Laesya",
    work: "Jongleuse",
    genre: "Femme",
    picture: "http://www.agences-artistiques.com/FR/images/stories/artistes/artistesdecirque/jongleur_22/jongleur_22c.jpg",
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));
    
