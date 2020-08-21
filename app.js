// VARIABLES LIST

const body = document.body
const grid = document.querySelector('.grid')
const menubutton = document.querySelector('#menuButton')
const composerButton = document.querySelector('#composerButton')
const worksButton = document.querySelector('#worksButton')
const period = document.querySelector('.period')
const medieval = document.querySelector('.medieval')
const renaissance = document.querySelector('.renaissance')
const baroque = document.querySelector('.baroque')
const classical = document.querySelector('.classical')
const earlyRomantic = document.querySelector('.early-romantic')
const romantic = document.querySelector('.romantic')
const lateRomantic = document.querySelector('.late-romantic')
const twentieth = document.querySelector('.twentieth')
const postWar = document.querySelector('.post-war')
const twentyFirst = document.querySelector('.twenty-first')

// FUNCTIONS LIST

// gets data list of recommended composers
const grabDataByComp = async () => {
  const url = 'https://api.openopus.org/composer/list/rec.json'
  try {
    const response = await axios.get(url)
    const list = response.data.composers
    postComposers(list)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}


const grabDataByPeriod = async (period) => {
  const url = `https://api.openopus.org/composer/list/epoch/${period}.json`
  try {
    const response = await axios.get(url)
    const list = response.data.composers
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
    postRandomWorks(list)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// posts images and names of composers
function postComposers(composers) {
  removeAllChildNodes(grid)
  for (let i = 0; i < composers.length; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid.append(gridItem)

    const img = document.createElement('img')
    img.classList.add('grid')
    img.src = composers[i].portrait
    gridItem.append(img)
    
    const textDiv = document.createElement('div')
    textDiv.classList.add('text', 'paint')
    gridItem.append(textDiv)

    const text = document.createElement('h3')
    text.textContent = composers[i].name
    textDiv.append(text)
  }
}

// posts sets of randomly generated works
function postRandomWorks(works) {
  removeAllChildNodes(grid)
  for (let i = 0; i < works.length; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid.append(gridItem)
    
    const title = document.createElement('h4')
    title.textContent = `Title: ${works[i].title}`
    gridItem.classList.add('title-effect')
    gridItem.append(title)

    const genre = document.createElement('p')
    genre.textContent = `Genre: ${works[i].genre}`
    gridItem.append(genre)

    const composer = document.createElement('p')
    composer.textContent = `Name: ${works[i].composer.complete_name}`
    gridItem.append(composer)
  }
}

// clears grid before a new search
function removeAllChildNodes(parent) {
  grid.innerHTML = '';
}

// triggers the dropdown menu
function dropDown() {
  document.querySelector('.dropdown-container').classList.toggle('show')
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

medieval.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('medieval')
})

renaissance.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('renaissance')
})

baroque.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('baroque')
})

classical.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('classical')
})

earlyRomantic.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('early romantic')
})

romantic.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('romantic')
})

lateRomantic.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('late romantic')
})

twentieth.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('20th century')
})

postWar.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('post-war')
})

twentyFirst.addEventListener('click', (e) => {
  e.preventDefault()
  grabDataByPeriod('21st century')
})