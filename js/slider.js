export {getLinkToImage}
const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
const spinner = document.querySelector('.spinner')
let prevImages = []
let nextImages = []

let dayTime = document.querySelector('.greeting').textContent.split(' ')[1].slice(0,-1)
    getLinkToImage(dayTime)

slideNext.addEventListener('click', () => {
    if (nextImages.length == 0) {
    let dayTime = document.querySelector('.greeting').textContent.split(' ')[1].slice(0,-1)
    getLinkToImage(dayTime)
    console.log(1)
    }
    else {
        body.style.backgroundImage = `url(${nextImages[nextImages.length-1]})`
        prevImages.push(nextImages[nextImages.length - 1])
        nextImages.pop()
        console.log(2)
    }
})

slidePrev.addEventListener('click', () => {
    if (prevImages.length > 1) {
    body.style.backgroundImage = `url(${prevImages[prevImages.length - 2]})`
    nextImages.push(prevImages[prevImages.length - 1])
    prevImages.pop()
    console.log(nextImages)
    }
})

const getNextImgFromPrev = (link) => {
    body.style.backgroundImage = `url(${link})`
}

async function getLinkToImage(dayT) {
    spinner.style.visibility = 'visible'
    const url = await fetch(`https://api.unsplash.com/photos/random?query=${dayT}&client_id=pKoi4IxCJey7dbHtk4CcOcM5MrsAa23U_8mQ84Rd5hg`)
    const data = await url.json()
    const img = new Image();
    img.src = data.urls.regular
    img.onload = () => {
    spinner.style.visibility = 'hidden'
    body.style.backgroundImage = `url(${img.src})`
    prevImages.push(img.src)
    }
}


