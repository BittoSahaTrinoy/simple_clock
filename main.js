function time(){
  
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var meridians;
  
  if(sec<10){
    sec = "0"+sec;
  }
  if(min<10){
    min = "0" + min;
  }
  
  if(hrs>12){
    hrs = hrs-12;
    meridians = "pm";
    
  }else{
    meridians = "am";
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  
  
  var final = hrs+":"+min+" "+meridians;
  document.getElementById("p").innerHTML= final;
  document.getElementById("q").innerHTML = sec+"s";
}

setInterval(time, 500);



function mili(){
  var time = new Date();
  var mon = time.getMonth();
  var yr = time.getFullYear();
  var dt = time.getDate();
  var r = time.getDay();
  if (r == 0) {
    r = "sunday";
  }
  if (r == 1) {
    r = "monday";
  }
  if (r == 2) {
    r = "tuesday";
  }
  if (r == 3) {
    r = "wednesday";
  }
  if (r == 4) {
    r = "thursday";
  }
  if (r == 5) {
    r = "friday";
  }
  if (r == 6) {
    r = "saturday";
  }
  
  
  if(mon == 0){
    mon = "jan";
  }
  if (mon == 1) {
    mon = "feb";
  }
  if (mon == 2) {
    mon = "march";
  }
  if (mon == 3) {
    mon = "april";
  }
  if (mon == 4) {
    mon = "may";
  }
  if (mon == 5) {
    mon = "jun";
  }
  if (mon == 6) {
    mon = "july";
  }
  
  if (mon == 7) {
    mon = "aug";
  }
  if (mon == 8) {
    mon = "sep";
  }
  
  if (mon == 9) {
    mon = "oct";
  }
  if (mon == 10) {
    mon = "nov";
  }
  if (mon == 0) {
    mon = "dec";
  }
  if(dt<10){
    
    dt = "0"+ dt;
  }
  var day = dt+" "+mon+" ("+r+") ";
  document.getElementById("dt").innerHTML = day;
}
setInterval(mili, 500);

function ms(){
  var time = new Date();
  var ms = time.getMilliseconds();
  if(ms<10){
    ms = "00"+ ms;
  }
  if(ms<100){
    ms =  "0"+ms;
  }
  var n = ms+"ms";
  document.getElementById("ms").innerHTML = n;
}
setInterval(ms, 1);
