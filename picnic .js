const  khulna = [
    {
        name : 'Sabok Alia',
        location: 'Mirpur',
        takas : 500,
    },
    {
        name : 'Mosiur Rhaman',
        location: 'Bonani',
        takas : 1200
    },
    {
        name : 'Sazid buhia',
        location: 'Nosendi',
        takas : 500,
    },
    {
        name : 'Safin buhia',
        location: 'bonani',
        takas : 980,
    },
    {
        name : 'pial ali',
        location: 'mirpur',
        takas : 850,
        
    },
    {
        name : 'Altaf hossan',
        location: 'Sonadnaga',
        takas : 380,
    },
    {
        name : 'Yeasmin bagum',
        location: 'Mirpur',
        takas : 1300,
    },
    {
        name : 'Asgor ali',
        location: 'Bonani',
        takas : 100,
    },
    {
        name : 'Rohima khatun',
        location: 'Mirpur',
        takas : 680,
    },
];

let pictakas = 0;


khulna.map((data) => pictakas += data.takas);


console.log(pictakas);