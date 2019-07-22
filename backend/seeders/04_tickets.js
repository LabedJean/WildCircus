const models = require('../models');
const Ticket = models.Ticket;

Ticket.create({
    adult: 0,
    senior: 0,
    children: 0,
    group: 1,
    school: 1,
    ShowId: 1,
})
    .then((Ticket) => {
        console.log('Ticket created !', Ticket);
    })
    .catch((err) => console.log(err));


Ticket.create({
    adult: 1,
    senior: 1,
    children: 3,
    group: 0,
    school: 0,
    ShowId: 1,
})
    .then((Ticket) => {
        console.log('Ticket created !', Ticket);
    })
    .catch((err) => console.log(err));

Ticket.create({
    adult: 1,
    senior: 1,
    children: 0,
    group: 0,
    school: 0,
    ShowId: 1,
})
    .then((Ticket) => {
        console.log('Ticket created !', Ticket);
    })
    .catch((err) => console.log(err));

Ticket.create({
    adult: 3,
    senior: 0,
    children: 6,
    group: 0,
    school:0,
    ShowId: 1,
})
    .then((Ticket) => {
        console.log('Ticket created !', Ticket);
    })
    .catch((err) => console.log(err));


