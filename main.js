let startTime = null;
    let elapsedTime = 0;
    let timerId = null;
    const stopwatchElement = document.getElementById("time");

    function updateStopwatch() {
      const now = new Date();
      elapsedTime += now - startTime;
      startTime = now;

      const hours = Math.floor(elapsedTime / (60 * 1000));
      const minutes = Math.floor(elapsedTime / (60 * 1000));
      const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
      const milliseconds = elapsedTime % 1000;

      stopwatchElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
      timerId = setTimeout(updateStopwatch, 10);
    }

    document.getElementById("start").addEventListener("click", () => {
      if (timerId) return;
      startTime = new Date();
      updateStopwatch();
    });

    document.getElementById("stop").addEventListener("click", () => {
      clearTimeout(timerId);
      timerId = null;
    });

    document.getElementById("reset").addEventListener("click", () => {
      clearTimeout(timerId);
      elapsedTime = 0;
      stopwatchElement.textContent = "00:00:00:00";
      timerId = null;
    });
