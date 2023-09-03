document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

  const countdownTimestamp = 1693788900; 


  const countdownElement = document.getElementById('countdown');

  const currentTimestamp = Math.floor(Date.now() / 1000);


  const timeDifference = countdownTimestamp - currentTimestamp;

  if (timeDifference <= 0) {
   
    countdownElement.textContent = `School started ${formatTime(Math.abs(timeDifference))} ago`;
  } else {

    countdownElement.textContent = `${formatTime(timeDifference)} left`;
  }

  setInterval(() => {

    const currentTimestamp = Math.floor(Date.now() / 1000);


    const timeDifference = countdownTimestamp - currentTimestamp;

    if (timeDifference <= 0) {
     
      countdownElement.textContent = `School started ${formatTime(Math.abs(timeDifference))} ago`;
    } else {

      countdownElement.textContent = `${formatTime(timeDifference)} left`;
    }
  }, 1000);


  function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }


  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
})