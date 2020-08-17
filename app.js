// https://api.ipgeolocation.io/astronomy?apiKey=ee038a94cec645899bb99e71b6c99e8f

const searchBar = document.querySelector('search')

const grabData = async (city) => {
  const url = `https://api.ipgeolocation.io/astronomy?apiKey=ee038a94cec645899bb99e71b6c99e8f&location=${city}`
  try {
    const response = await axios.get(url)
    const cityData = response.data
    return cityData
  } catch (error) {
    console(`Error: ${error}`)
  }
}

function postData(dataList) {
  dataList.forEach((property) => {
    const div = document.createElement('div')
    div.textContent = 
    document.body.append('')
  })
}

const grabInput = () => {
  const input = document.querySelector('#city').value
  grabData(input)
}

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  e.preventDefault()
  grabInput()
})