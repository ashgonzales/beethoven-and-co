// https://api.openopus.org/composer/list/rec.json

// This snippet taken from https://masonry.desandro.com
const grid = document.querySelector('.grid');

const msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// Original code starts here
const grabData = async () => {
  // const url = `https://api.ipgeolocation.io/astronomy?apiKey=ee038a94cec645899bb99e71b6c99e8f&location=${city}`
  const url = 'https://api.openopus.org/composer/list/rec.json'
  try {
    const response = await axios.get(url)
    const list = response.data.composers
    console.log(list)
    postData(list)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function postData(composers) {
  for (let i = 0; i < composers.length; i++) {
    const grid = document.querySelector('.grid')
    const div = document.createElement('div')
    div.classList.add('grid-item')
    grid.append(div)
    const img = document.createElement('img')
    img.src = composers[i].portrait
    div.append(img)
  }
}

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  e.preventDefault()
  grabData()
})