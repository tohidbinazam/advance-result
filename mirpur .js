const tohid = [
    {
        name : 'Sabok Alia',
        class : 8,
        location: 'Mirpur'
    },
    {
        name : 'Mosiur Rhaman',
        class : 9,
        location: 'Bonani'
    },
    {
        name : 'Sazid buhia',
        class : 6,
        location: 'Nosendi'
    },
    {
        name : 'Safin buhia',
        class : 10,
        location: 'bonani'
    },
    {
        name : 'pial ali',
        class : 12,
        location: 'mirpur'
    },
    {
        name : 'Altaf hossan',
        class : 14,
        location: 'Sonadnaga'
    },
    {
        name : 'Yeasmin bagum',
        class : 5,
        location: 'Mirpur'
    },
    {
        name : 'Asgor ali',
        class : 10,
        location: 'Bonani'
    },
    {
        name : 'Rohima khatun',
        class : 6,
        location: 'Mirpur'
    },
    
];


tohid.map((data) => {
    if(data.location == 'Mirpur' || data.location == 'Bonani'){
         console.log(`My name is ${data.name}. I live in ${data.location}.`);
    }
})

