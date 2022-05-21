export {showTime}
const time = document.querySelector('.time')
const dateActual = document.querySelector('.date')

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    let tZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: tZone}
    const currentDate = date.toLocaleDateString('pl-Pl', options)
    dateActual.textContent = currentDate
    setInterval(showTime, 1000)
    return date.getHours
  }

  showTime()