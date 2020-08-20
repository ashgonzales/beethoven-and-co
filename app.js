// https://api.openopus.org/composer/list/rec.json

// VARIABLES
const menubutton = document.querySelector('#menuButton')
const composerButton = document.querySelector('#composerButton')
const worksButton = document.querySelector('#worksButton')
const period = document.querySelector('.period')
const body = document.body
const grid = document.querySelector('.grid')

// MASONRY GRID SET-UP
const msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// FUNCTIONS LIST

// gets data alphabetically by name
const grabDataByComp = async () => {
  const url = 'https://api.openopus.org/composer/list/rec.json'
  try {
    const response = await axios.get(url)
    const list = response.data.composers
    console.log(list)
    postComposers(list)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// gets randomized set of classical works
const grabDataByWorks = async () => {
  const url = 'http://cors-anywhere.herokuapp.com/https://api.openopus.org/dyn/work/random'
  try {
    const response = await axios.get(url)
    const list = response.data.works
    console.log(list)
    postRandomWorks(list)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// posts images and names of composers
function postComposers(composers) {
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

// posts sets of randomly generated works
function postRandomWorks(works) {
  for (let i = 0; i < works.length; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid.append(gridItem)
    
    const title = document.createElement('h4')
    title.textContent = `Title: ${works[i].title}`
    gridItem.append(title)

    const genre = document.createElement('p')
    genre.textContent = `Genre: ${works[i].genre}`
    gridItem.append(genre)

    const composer = document.createElement('p')
    composer.textContent = `Name: ${works[i].composer.complete_name}`
    gridItem.append(composer)
  }
}

// triggers the dropdown menu
function dropDown() {
  document.querySelector(".dropdown-container").classList.toggle("show")
}

// triggers dropdown menu to close when other part of window is clicked
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

// EVENT LISTENERS
composerButton.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByComp()
})

worksButton.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByWorks()
})

menubutton.addEventListener('click', (e) => {
  body.classList.toggle('hidden-is-open')
})