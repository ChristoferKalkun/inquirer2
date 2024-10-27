import inquirer from 'inquirer';

inquirer.prompt([
  {
    name: "greeting",
    message: "What is your name?",
    type: "input",
  },
  {
    name: "colors",
    message: "What color do you hate the most?",
    type: "list",
    choices: ["black", "orange", "blue", "gray", "green", "pink"]
  },
  {
    name: "age",
    message: "How old are you?",
    type: "input", 
    validate: (value) => {
      const valid = !isNaN(parseFloat(value)) && isFinite(value);
      return valid || 'Please enter a valid number';
    }
  },
  {
    name: "hobbies",
    message: "What do you do in your free time?",
    type: "checkbox",
    choices: ["sleeping", "sports", "cooking", "traveling", "painting", "gaming"]
  },
  {
    name: "confirm",
    message: "Are you really sure?",
    type: "confirm",
  },
  {
    name: "password",
    message: "Enter your password",
    type: "password",
  },
  {
    name: "rappers",
    message: "Who is your favourite rapper?",
    type: "list", 
    choices: ["Kendrick Lamar", "Kanye West", "J Cole", "Tyler the Creator", "Lil Baby", "Dababy"]
  },
  {
    name: "singers",
    message: "Who is your favourite singer?",
    type: "list", 
    choices: ["Taylor Swift", "Katy Perry", "Adele", "Michael Jackson", "Ariana Grande", "Yuno Miles"]
  },
  {
    name: "places",
    message: "Where would you like to travel?",
    type: "list", 
    choices: ["Kosovo", "Slovenia", "Slovakia", "Macedonia", "Romania", "Serbia"]
  },
  {
    name: "games",
    message: "What is your favourite game?",
    type: "list", 
    choices: ["League of Legends", "Valorant", "CS2", "Genshin Impact", "Rocket League", "Tetris"]
  },
  {
    name: "flavours",
    message: "What's your favourite ice cream flavour?",
    type: "list", 
    choices: ["vanilla", "chocolate", "mint", "banana", "strawberry", "pear"]
  },
  {
    name: "bedtime",
    message: "What is your bedtime?",
    type: "list",
    choices: ["8pm", "9pm", "10pm", "11pm", "12am", "5am"]
  }
])
.then(function (answers) {
  console.log(answers);
})
.catch(function (error) {
  console.error('Error during prompt:', error);
});
