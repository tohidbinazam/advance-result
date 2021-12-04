const food = [
  {
    Roll: 01,
    name: 'Tohid',
    class: 10,
    location: 'kaulna',
  },
  {
    Roll: 02,
    name: 'Rofick',
    class: 9,
    location: 'Dhaka',
  },
  {
    Roll: 03,
    name: 'Huda',
    class: 10,
    location: 'mirpur',
  },
];

// for (data of food) {
//   console.log(data.name);
// }

// it show index number
// for (data in food) {
//   console.log(food[data].name);
// }

// food.forEach((data) => console.log(data.class));

food.map((data) => {
  if (data.class == 10) {
    console.log(`Name : ${data.name} Class : ${data.class}`);
  }
});
