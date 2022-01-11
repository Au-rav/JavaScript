/*There are adult runners (over 18 years of age) 
and youth runners (under 18 years of age). 
They can register early or late. 
Runners are assigned a race number and 
start time based on their age and registration. 


Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).*/


//Race numbers are assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);
//variable that indicates whether a runner registered early or not.
let runnerRegEarly = false;
//runner’s age
let runnerAge = 18;

//checks whether the runner is an adult AND registeration time.
if(runnerAge > 18  && runnerRegEarly == true){
  raceNumber = raceNumber + 1000; //Add 1000 to their raceNumber if this is true.
  console.log('The race starts at 9:30 am. Your race number is ' + raceNumber);
} else if(runnerAge > 18  && runnerRegEarly != true){
  console.log('The race starts at 11:00 am. Your race number is ' + raceNumber);
}else if(runnerAge < 18){
  console.log('The race starts at 12:30 am. Your race number is ' + raceNumber);
}else {
  console.log('Runners please visit the registration desk');
}



