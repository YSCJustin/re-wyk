document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerHTML = currentYear;


  const countdownTimestamp5 = 1725236400;
  const countdownTimestamp6 = 1730075400;
  const countdownTimestamp7 = 1735864200;
  const countdownTimestamp8 = 1742776200;
  const countdownTimestamp9 = 1748997000;
  const countdownTimestamp10 = 1756686000;




  const countdownElement5 = document.getElementById('countdown5');
  const countdownElement6 = document.getElementById('countdown6');
  const countdownElement7 = document.getElementById('countdown7');
  const countdownElement8 = document.getElementById('countdown8');
  const countdownElement9 = document.getElementById('countdown9');
  const countdownElement10 = document.getElementById('countdown10');
 

  let datenow = 1000 - (Date.now() % 1000);
  setTimeout(async () => {
    setInterval(updateTime, 1000);
  }, datenow);




  function updateTime(){

    const currentTimestamp = Math.floor(Date.now() / 1000);
   


    const timeDifference5 = countdownTimestamp5 - currentTimestamp;
    const timeDifference6 = countdownTimestamp6 - currentTimestamp;
    const timeDifference7 = countdownTimestamp7 - currentTimestamp;
    const timeDifference8 = countdownTimestamp8 - currentTimestamp;
    const timeDifference9 = countdownTimestamp9 - currentTimestamp;
    const timeDifference10 = countdownTimestamp10 - currentTimestamp;

 

    if (timeDifference5 <= 0) {
     
      countdownElement5.innerHTML = `School 24/25 started ${formatTime(Math.abs(timeDifference5))} ago.`;
    } else {

      countdownElement5.innerHTML = `${formatTime(timeDifference5)} left`;
    }
    if (timeDifference6 <= 0) {
     
      countdownElement6.innerHTML = `1st Uniform Test started ${formatTime(Math.abs(timeDifference6))} ago.`;
    } else {

      countdownElement6.innerHTML = `${formatTime(timeDifference6)} left`;
    }
    if (timeDifference7 <= 0) {
     
      countdownElement7.innerHTML = `Mid-Year Examination started ${formatTime(Math.abs(timeDifference7))} ago. Good luck.`;
    } else {

      countdownElement7.innerHTML = `${formatTime(timeDifference7)} left`;
    }
    if (timeDifference8 <= 0) {
     
      countdownElement8.innerHTML = `2nd Uniform Test started ${formatTime(Math.abs(timeDifference8))} ago.`;
    } else {

      countdownElement8.innerHTML = `${formatTime(timeDifference8)} left`;
    }
    if (timeDifference9 <= 0) {
     
      countdownElement9.innerHTML = `Final Examination started ${formatTime(Math.abs(timeDifference9))} ago. Good luck.`;
    } else {

      countdownElement9.innerHTML = `${formatTime(timeDifference9)} left`;
    }
    if (timeDifference10 <= 0) {
     
      countdownElement10.innerHTML = `School 25/26 started ${formatTime(Math.abs(timeDifference10))} ago.`;
    } else {

      countdownElement10.innerHTML = `${formatTime(timeDifference10)} left`;
    }

  }
  function formatTime(time) {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days > 0 ? days + " days": ""} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }


  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
})