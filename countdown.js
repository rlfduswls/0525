const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let tempDate=new Date();
  let tempYear=tempDate.getFullYear();
  let tempMonth=tempDate.getMonth();
  //+1을 하면 july가 됨 ->그냥 숫자로 나타내기 위해 +1을 하는 것이지 컴퓨터가 받아들이는 것은 May임!
  
  let tempDay=tempDate.getDate();
//   console.log(tempDate);

  const futureDate=new Date(tempYear,tempMonth,tempDay+27,15,45,0);
//   console.log(futureDate);

 const year=futureDate.getFullYear();
 //달은 배열을 이용
  const month=months[futureDate.getMonth()]

 
  console.log(month);
//요일
  const weekday=weekdays[futureDate.getDay()];
//   console.log(weekday);
  const date=futureDate.getDate();
  const hours=futureDate.getHours();
  const minutes=futureDate.getMinutes();


  const lastD=document.querySelector(".lastday");
  lastD.textContent=`End of class  ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;


  const items=document.querySelectorAll(".deadline-format h4");

 
function getRemaindingTime(){
  const futureTime=futureDate.getTime();

  const today=new Date().getTime();
  console.log(today);
  const t=futureTime-today;
   

  var time=1000*60*60*24;//time은 하루 1000*60*60*24
  const days=Math.floor(t/(time));
  console.log(days);

  const hours=Math.floor((t%time)/(60*60*1000));
  console.log(hours);

  const minutes=Math.floor((t%(1000*60*60))/(60*1000));
  console.log( minutes)
  const seconds=Math.floor(t%(60*1000)/1000);
  console.log( seconds)

  const dhms=[days,hours,minutes,seconds];
   function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

items.forEach(function(item,index){
    item.innerHTML=format(dhms[index]);
  });

  if(t<0){
    clearInterval(sI);
    last.textContent=`종강을 축하드립니다.`;
    
  }
}

const last=document.querySelector("p");

// const cd=setInterval(window.location.reload(),1000);이건 페이지가 새로고침
const sI=setInterval(getRemaindingTime,1000);
getRemaindingTime();


//구현할것-새로고침안해도 갱신즉 1초마다 라고 하면setInterval?claerInterval?


//종강끝나면 종강축하 이벤트 









