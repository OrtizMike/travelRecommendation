const btnSearch = document.getElementById("btnSearch")
const btnReset = document.getElementById("btnReset")
const recommendationContainer = document.getElementById("recommendation-container")

btnSearch.addEventListener("click", searchRecommendation);
btnReset.addEventListener("click", resetRecomendations);


const apiUrl = "travel_recommendation_api.json"

function searchRecommendation(event) {
  const searchInput = document.getElementById("searchInput")
  const searchKeyword = searchInput.value.toLowerCase()
  if (!searchKeyword || searchKeyword.length === 0) {
    resetRecomendations()
    return
  }

  fetch(apiUrl)
    .then(response => response.json())
    .then(result => {
      recommendationContainer.innerHTML = ""
      let data


      if( searchKeyword.includes("beach")) data = result.beaches
      if( searchKeyword.includes("temple")) data = result.temples
      if( searchKeyword.includes("countries") || searchKeyword.includes("country")) data = result.countries[Math.floor(Math.random() * 3)].cities

      data.forEach(destination => {
        const destinationContainer = document.createElement('div')
        destinationContainer.classList.add('destination-card');
        const destinationPhotoContainer = document.createElement('div')
        destinationPhotoContainer.classList.add('destination-photo');
        const destinationPhoto = document.createElement('img')
        destinationPhoto.src = `./img/${destination.imageUrl}`
        const destinationInfo = document.createElement('div')
        destinationInfo.classList.add('destination-info');
        const destinationName = document.createElement('span')
        destinationName.classList.add('destination-name');
        destinationName.textContent = destination.name
        const destinationDescription = document.createElement('span')
        destinationDescription.classList.add('destination-description');
        destinationDescription.textContent = destination.description
        const destinationVisit = document.createElement('input')
        destinationVisit.type = "button"
        destinationVisit.value = "Visit"
        destinationVisit.classList.add('btn')
        destinationVisit.classList.add('destination-visit')


        destinationPhotoContainer.appendChild(destinationPhoto)
        destinationInfo.appendChild(destinationName)
        destinationInfo.appendChild(destinationDescription)
        destinationInfo.appendChild(destinationVisit)
        destinationContainer.appendChild(destinationPhotoContainer)
        destinationContainer.appendChild(destinationInfo)
        recommendationContainer.appendChild(destinationContainer)
      })

      // Countries


    })
    .catch(error => {
      console.log('Error:', error);
      resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}



function resetRecomendations() {
  document.getElementById("searchInput").value = ""
  recommendationContainer.innerHTML = ""
}