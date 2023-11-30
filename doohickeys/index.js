document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    const countdown = document.getElementById('countdown');
    const countdownTimestamp = 1701360000;

    updateTime();
    let datenow = 1000 - (Date.now() % 1000);
    setTimeout(updateTime, datenow-5);
    setInterval(updateTime, 1000);

    function updateTime(){

        const currentTimestamp = Math.floor(Date.now() / 1000);
        const timeDifference = countdownTimestamp - currentTimestamp;
        if (timeDifference <= 0) {
     
            countdown.innerHTML = `${formatTime(Math.abs(timeDifference))} ago. Did he suceed?`;
          } else {
      
            countdown.innerHTML = `${formatTime(timeDifference)} left`;
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