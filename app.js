// https://api.openopus.org/composer/list/rec.json

// VARIABLES
const menubutton = document.querySelector('#menuButton')
const composerButton = document.querySelector('#composerButton')
const period = document.querySelector('.period')
const body = document.body
const grid = document.querySelector('.grid')

// MASONRY GRID
const msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// STORES DATA ALPHABETICALLY BY NAME
const grabDataByComp = async () => {
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

// STORES DATA BY PERIOD
const grabDataByPeriod = async () => {
  const url = `https://api.openopus.org/composer/list/epoch/${period}.json`
  try {
    const response = await axios.get(url)
    const list = response.data.composers
    console.log(list)
    postData(list)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// Function that creates a div to hold image and an overlay effect
function postData(composers) {
  for (let i = 0; i < composers.length; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid.append(gridItem)

    const img = document.createElement('img')
    img.classList.add('grid')
    img.src = composers[i].portrait
    gridItem.append(img)
    
    const textDiv = document.createElement('div')
    textDiv.classList.add('text', 'highlight')
    gridItem.append(textDiv)

    const text = document.createElement('h3')
    text.textContent = composers[i].name
    textDiv.append(text)
  }
}

// function picOverlay(composers) {
//   const h2 = document.createElement('h2')
//   h2.classList.add('centered')
//   gridItem.append(h2)
// }


composerButton.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByComp()
})

composerButton.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByComp()
})


// MENU BUTTON THAT TOGGLES OPEN AND CLOSE
menubutton.addEventListener('click', (e) => {
  body.classList.toggle('hidden-is-open')
})

// FUNCTION THAT TRIGGERS DROPDOWN
function dropDown() {
  document.querySelector(".dropdown-container").classList.toggle("show")
}

// FUNCTION CLOSES DROPDOWN IF ELSEWHERE IS CLICKED
window.onclick = function(e) {
  if (!e.target.matches('.periodButton')) {
    const dropdown = document.getElementsByClassName("dropdown-container")
    for (let i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
} 