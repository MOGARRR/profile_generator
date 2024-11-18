const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Whats you name or nickname??? ", (name) => {
  rl.question("Whats one of your hobbies? ", (hobby) => {
    rl.question("What do you like to listen too? ", (listenTo) => {
      rl.question("Whats your favorite meal of the day? ", (favMeal) => {
        rl.question("Whats you favorite thing to eat during that meal? ", (favFood) => {
          rl.question("Whats you favorite sport? ", (sport) => {
            rl.question("Whats super power is the best? and why is it better than everyone elses? \n", (superPower) => {
            console.log(`Hi my name is ${name}! I like ${hobby} and listen to ${listenTo}.\n${favMeal} is my favorite meal of the day and i love to eat ${favFood} during it!\nMy favorite sport is ${sport} and if i had a super power it would be ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});