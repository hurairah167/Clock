
 "use strict"

function display(){
let display = document.querySelector(".main")
display.style.transform ='scale(1)';

}

function hideDisplay(){
let display = document.querySelector(".main")
display.style.transform ="scale(0)"
}



setInterval(showTime,1000)

function showTime(){


 const date = new Date();
 let hour = date.getHours()
 let min = date.getMinutes()
 let sec = date.getSeconds()
 
 let formet;

 if(hour === 0 ){
  hour = 12;
  formet = "AM";
 }
 
 if(hour > 12){
  hour = hour - 12;
  formet = "PM";
 }
 
 
 hour = hour < 10 ? "0"+hour:hour;
 min = min < 10 ? "0"+min :min;
 sec = sec < 10 ? "0"+ sec : sec;
 
 
 
 
let showHour = document.getElementById("color1");
let showMin = document.getElementById("color2");
let showSec = document.getElementById("color3");
 
 
 showHour.innerText = hour;
 showMin.innerText = min;
 showSec.innerText = sec;
 
 
 let today = date.getDate()
 let month = date.getMonth()
 let fullYear = date.getFullYear()
 
 today = today < 10 ? "0"+ today:today;
 
 
 
 let showToday = document.getElementById("today")
 let showMonth = showToday.nextElementSibling
 let showYear = showToday.nextElementSibling.nextElementSibling
 let showFormet = showYear.nextElementSibling
 
 switch(month){
 case 0:
 showMonth.innerText = "Jan";
 break;
 case 1:
 showMonth.innerText = "Feb";
 break;
 case 2:
 showMonth.innerText="Mar";
 break;
 case 3:
 showMonth.innerText = "Apr";
 break;
 case 4:
 showMonth.innerText = "May";
 break;
 case 5:
 showMonth.innerText ="Jun";
 break;
 case 6:
 showMonth.innerText = "Jul";
 break;
 case 7:
 showMonth.innerText = "Ags";
 break;
 case 8:
 showMonth.innerText = "Sep";
 break;
 case 9:
 showMonth.innerText = "Oct";
 break;
 case 10:
 showMonth.innerText = "Nov";
 break;
 default:
 showMonth.innerText = "Dec"
 }
 
 
 
 
 showToday.innerText = `${today}`;
 //showMonth.innerText = `/ ${month} /`;
 showYear.innerText = `${fullYear}`;
 showFormet.innerText = formet;
 
 let track = document.getElementById("track")
 let width = track.style.width = (sec / 100)* 544+'px';
 }

 showTime()





/*
const div = document.getElementById('myDiv');
const ulList = div.children[0];

const javascript = ulList.children[2];

const newItem = document.createElement('li');
const text = document.createTextNode('React');

newItem.appendChild(text)
ulList.insertBefore(newItem,javascript)
*/
