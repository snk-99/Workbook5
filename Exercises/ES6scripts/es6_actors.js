let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"],
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
    },
];

// Who is the Academy Member whose ID is 187?
let findAcademyMember = academyMembers.find((actor) => actor.memID == 187);
console.log(findAcademyMember.name);

// Who has have been in at least 3 films?
let moreThan3 = academyMembers.filter((actor) => actor.films.length >= 3);
console.log(moreThan3);
// Who has a name that starts with "Bob"?

// HARDER: Which Academy Members have been in a film
// that starts with "A"


