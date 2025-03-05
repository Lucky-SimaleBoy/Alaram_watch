let h1=document.querySelector("h1");
let hour=document.querySelector("#hours");
let minit=document.querySelector("#minit");
let night=document.querySelector("#day-night");
let btn=document.querySelector("#alaram");
let content=document.querySelector(".content");

// let selectMenu=document.querySelector("select");
let alarmTime,isAlaramSet;
var audio = new Audio('tone.mp3');


function play() {
  if(isAlaramSet){
    alarmTime="";
    audio.pause();
    content.classList.remove("disable");
    btn.innerText="Set Alaram";
    return isAlaramSet=false;
    
  } 
  let time=`${hour.value}:${minit.value}:${night.value}`; 
  if(time.includes=="Hours"||time.includes=="Minit"||time.includes=="AM/PM"){
    alert("Sale time to set kar jhatu");
  }
  alarmTime=time;
  isAlaramSet=true;
  content.classList.add("disable");
  btn.innerText="Clear Alaram";
  }
  
setInterval(()=>{
  let date=new Date();
  console.log(date);
  let h=date.getHours();
  let m=date.getMinutes();
  let s=date.getSeconds();
  let ampm="AM";
  if(h>=12)
  {
    h=h-12;
    ampm="PM";
  }
  let hh=h<10?`0${h}`:h;
  let mm=m<10?`0${m}`:m;
  let ss=s<10?`0${s}`:s;
  h1.innerHTML=`${hh}:${mm}:${ss} ${ampm}`;
  if(alarmTime==`${hh}:${mm}:${ampm}`)
  {
  
    audio.play();
    audio.loop=true;
  }
});
btn.addEventListener("click",()=>{
  play();
  // alert("clickrd");
  // setTimeout(()=>{
      // play();
    // },1000);
})
// for(let i=12;i>0;i--)
// {
  // i=i<10?`0${i}`:i;
  // // let option=`<option value="${i}">${i}</option>`;
  // // hour.firstElementChild.insertAdjacentElement("afterend",option);
// }
// 






  