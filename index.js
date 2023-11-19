document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerHTML = currentYear;

  const countdownTimestamp = 1693786800; 
  const countdownTimestampu = 1698107400;
  const countdownTimestamp2 = 1701736200;
  const countdownTimestamp3 = 1710721800;
  const countdownTimestamp4 = 1717374600;
  const countdownTimestamp5 = 1725236400;



  const countdownElement = document.getElementById('countdown');
  const countdownElementu = document.getElementById('countdownu');
  const countdownElement2 = document.getElementById('countdown2');
  const countdownElement3 = document.getElementById('countdown3');
  const countdownElement4 = document.getElementById('countdown4');
  const countdownElement5 = document.getElementById('countdown5');
 
  updateTime();
  let datenow = 1000 - (Date.now() % 1000);
  setTimeout(updateTime, datenow);

  setInterval(() => {
    
    const currentTimestamp = Math.round(Date.now() / 1000);
   

    const timeDifference = countdownTimestamp - currentTimestamp;
    const timeDifferenceu = countdownTimestampu - currentTimestamp;
    const timeDifference2 = countdownTimestamp2 - currentTimestamp;
    const timeDifference3 = countdownTimestamp3 - currentTimestamp;
    const timeDifference4 = countdownTimestamp4 - currentTimestamp;
    const timeDifference5 = countdownTimestamp5 - currentTimestamp;

 
    if (timeDifference <= 0) {
     
      countdownElement.innerHTML = `School started ${formatTime(Math.abs(timeDifference))} ago`;
    } else {

      countdownElement.innerHTML = `${formatTime(timeDifference)} left`;
    }
    if (timeDifferenceu <= 0) {
                 
      countdownElementu.innerHTML = `1st UT started ${formatTime(Math.abs(timeDifferenceu))} ago`;
    }  else {
        
        countdownElementu.innerHTML = `${formatTime(timeDifferenceu)} left`;
    }                          

    if (timeDifference2 <= 0) {
     
      countdownElement2.innerHTML = `Mid Year Exam started ${formatTime(Math.abs(timeDifference2))} ago. Good Luck!`;
    } else {

      countdownElement2.innerHTML = `${formatTime(timeDifference2)} left`;
    }
    if (timeDifference3 <= 0) {
     
      countdownElement3.innerHTML = `2nd UT started ${formatTime(Math.abs(timeDifference3))} ago. Good Luck!`;
    } else {

      countdownElement3.innerHTML = `${formatTime(timeDifference3)} left`;
    }
    if (timeDifference4 <= 0) {
     
      countdownElement4.innerHTML = `Final Exam started ${formatTime(Math.abs(timeDifference4))} ago. Best of Luck!`;
    } else {

      countdownElement4.innerHTML = `${formatTime(timeDifference4)} left`;
    }
    if (timeDifference5 <= 0) {
     
      countdownElement5.innerHTML = `School 24/25 started ${formatTime(Math.abs(timeDifference5))} ago. Wow.`;
    } else {

      countdownElement5.innerHTML = `${formatTime(timeDifference5)} left`;
    }
  }, 1000);




  function updateTime(){

    const currentTimestamp = Math.floor(Date.now() / 1000);
   

    const timeDifference = countdownTimestamp - currentTimestamp;
    const timeDifferenceu = countdownTimestampu - currentTimestamp;
    const timeDifference2 = countdownTimestamp2 - currentTimestamp;
    const timeDifference3 = countdownTimestamp3 - currentTimestamp;
    const timeDifference4 = countdownTimestamp4 - currentTimestamp;
    const timeDifference5 = countdownTimestamp5 - currentTimestamp;
 
    if (timeDifference <= 0) {
     
      countdownElement.innerHTML = `School started ${formatTime(Math.abs(timeDifference))} ago`;
    } else {

      countdownElement.innerHTML = `${formatTime(timeDifference)} left`;
    }
    if (timeDifferenceu <= 0) {
                 
      countdownElementu.innerHTML = `1st UT started ${formatTime(Math.abs(timeDifferenceu))} ago`;
    }  else {
        
        countdownElementu.innerHTML = `${formatTime(timeDifferenceu)} left`;
    }      
    if (timeDifference2 <= 0) {
     
      countdownElement2.innerHTML = `Mid Year Exam started ${formatTime(Math.abs(timeDifference2))} ago. Good Luck!`;
    } else {

      countdownElement2.innerHTML = `${formatTime(timeDifference2)} left`;
    }
    if (timeDifference3 <= 0) {
     
      countdownElement3.innerHTML = `2nd UT started ${formatTime(Math.abs(timeDifference3))} ago. Good Luck!`;
    } else {

      countdownElement3.innerHTML = `${formatTime(timeDifference3)} left`;
    }
    if (timeDifference4 <= 0) {
     
      countdownElement4.innerHTML = `Final Exam started ${formatTime(Math.abs(timeDifference4))} ago. Best of Luck!`;
    } else {

      countdownElement4.innerHTML = `${formatTime(timeDifference4)} left`;
    }
    if (timeDifference5 <= 0) {
     
      countdownElement5.innerHTML = `School 24/25 started ${formatTime(Math.abs(timeDifference5))} ago. Wow.`;
    } else {

      countdownElement5.innerHTML = `${formatTime(timeDifference5)} left`;
    }
  }
  function formatTime(time) {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days > 0 ? days : ""} days ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }


  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
})