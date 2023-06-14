function timeToWalk(steps,footprint,speed){
let distanceInM = steps * footprint;
let speedMetersSec = speed / 3.6
let time = distanceInM / speedMetersSec;
let rest  = Math.floor(distanceInM / 500);
let timeMin = Math.floor(time / 60);
let timeSec = Math.round(time - (timeMin * 60));
let timeHr = Math.floor(time / 3600);
console.log(`${(timeHr < 10 ? '0': "" )+ timeHr}:${(timeMin + rest < 10 ? "0" : "") + (timeMin + rest)}:${(timeSec < 10 ? '0': "") + timeSec}`);
 
}
timeToWalk(4000, 0.60, 5)