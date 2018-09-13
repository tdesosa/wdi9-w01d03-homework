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