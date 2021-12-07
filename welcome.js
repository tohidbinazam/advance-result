const peopel = [
    {
        name : 'TOhid Bin Azam',
        age : 52,
        location : 'Mirpur'
    },
    {
        name : 'Ariful Islam',
        age : 32,
        location : 'Utharra'
    },
    {
        name : 'Sazid Buhia',
        age : 16,
        location : 'kisorgong'
    }
];

function massage(name, age){

    let joining;
 if(age >= 0 && age <18){
  joining = `Hello ${name}, You are ${age} years old, You can't join this party`
 }else if(age >= 18 && age < 40){
  joining = `Hello ${name}, You are ${age} years old, You can join this party`
 }else if(age >= 40){
  joining = `Hello ${name}, You are ${age} years old, You can join this party and you are most welcome`
 }
 return joining;
}
peopel.map(data => console.log(massage(data.name, data.age)))

