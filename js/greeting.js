export {greeting}
const greetingEl = document.querySelector('.greeting')
const name = document.querySelector('.name')
const getHours = () => {
    const date = new Date();
    const hours = date.getHours();
    return(hours)
}

const dayTimeArr = ['morning', 'afternoon', 'evening', 'night']

const getDayTime = () => {
    const hour = getHours()
    let dayTime
    if (hour >= 5 && hour < 12) {
        dayTime = dayTimeArr[0]
    }
    if (hour >= 12 && hour < 18) {
        dayTime = dayTimeArr[1]
    }
    if (hour >= 18 && hour < 21) {
        dayTime = dayTimeArr[2]
    }
    if (hour >= 21 || hour < 5) {
        dayTime = dayTimeArr[3]
    }
    return dayTime
}

const setLocalStorage = () => {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)

const greeting = () => {
    greetingEl.textContent = `Good ${getDayTime()},`
    setInterval(greeting, 1000)
}

greeting()



