// console.log("Ready For Action!")

// EASY GOING

for(let i = 1; i <= 20; i++){
    console.log(i);
}

// GET EVEN

for(let i = 2; i <= 200; i += 2){
    console.log(i);
}

// EXCITED KITTEN

const catTalk = "Love me, pet me! HSSSSSS!";
const catTalk1 = "...human...why you taking pictures of me?...";
const catTalk2 = "...the catnip made me do it..."
const catTalk3 = "...why does the red dot always get away...";

for(let i = 1; i < 20; i++){
    if(i % 2 != 0){
        console.log(catTalk);
    }
    Math.random();
    testEquals = Math.random();
    if(i % 2 === 0){
        if(testEquals <= .33){
            console.log(catTalk1);
        } else if(testEquals > .33 && testEquals <= .66){
            console.log(catTalk2)
        } else if(testEquals >= .66){
            console.log(catTalk3);
        }
    }

}

// FIZZ BUZZ

for(i = 1; i <= 100; i++){
    if(i % 3 === 0){
       console.log("Fizz");
   } if(i % 5 === 0){
       console.log("Buzz");
   } if(i % 3 === 0 && i % 5 === 0){
       console.log("FizzBuzz");
   }
   console.log(i);
}

// GETTING TO KNOW YOU

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad.shift();
console.log(shahzad);
shahzad.push("Gameboy");

daniel.push(daniel[1] + 1);
console.log(daniel);

ryan.splice(2, 2, "Gotham City");
console.log(ryan);

reuben.splice(2, 2, "Chicago");
console.log(reuben);

jim.splice(2, 2, "Miami", "Denver", "New York City");
console.log(jim);

jim.splice(2, 1);
console.log(jim);

// YELL AT THE NINJA TURTLES

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(i = 0; i < ninjaTurtles.length; i++){
    console.log(ninjaTurtles[i].toUpperCase());
}

// RETURN OF THE CLOSETS

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

const kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0, 1);
console.log(kristynsCloset);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);

const outfitOne = [kristynsCloset[0], thomsCloset[0][0], kristynsCloset[3]];
console.log(outfitOne);

const outfitTwo = [thomsCloset[2][3], kristynsCloset[1], kristynsCloset[3]];
console.log(outfitTwo);

const outfitThree = [kristynsCloset[3], thomsCloset[0][2], kristynsCloset[4]];
console.log(outfitThree);