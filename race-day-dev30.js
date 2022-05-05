let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = true;
let runnerAge = 19;

if (runnerAge > 18 && earlyReg === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && earlyReg === true) {
    console.log(`You will race at 9:30am. Your race number is #${raceNumber}.`);
} else if (runnerAge > 18 && earlyReg === false) {
    console.log(`You will race at 11am. Your race number is #${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30pm. Your race number is #${raceNumber}.`);
} else {
    console.log(`You will race at 12:30pm. Your race # is ${raceNumber}.`);
}

console.log(raceNumber);
