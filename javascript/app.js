// console.log("Ready For Action!")

// EASY GOING
// Q1)

for(let i = 1; i <= 20; i++){
    console.log(i);
}

// GET EVEN
// Q1)

for(let i = 2; i <= 200; i += 2){
    console.log(i);
}

// EXCITED KITTEN
// Q1) & Q2)

catTalk = "Love me, pet me! HSSSSSS!";
catTalk1 = "...human...why you taking pictures of me?...";
catTalk2 = "...the catnip made me do it..."
catTalk3 = "...why does the red dot always get away...";

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