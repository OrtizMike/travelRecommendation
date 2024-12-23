const btnSearch = document.getElementById("btnSearch")
const btnReset = document.getElementById("btnReset")
const recommendationContainer = document.getElementById("recommendation-container")

btnSearch.addEventListener("click", searchRecommendation);
btnReset.addEventListener("click", resetRecomendations);


const apiUrl = "/travel_recommendation_api.json"

function searchRecommendation() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      
    })
}

function resetRecomendations() {
  document.getElementById("destinationSearch").value = ""
  recommendationContainer.innerHTML = ""
}