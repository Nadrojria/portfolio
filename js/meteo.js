const apiKey = "281f1df00bad3ad7012c1ca96845a96e"; // Remplace par ta clé API
const city = "lyon"; // Ville pour laquelle tu veux afficher la météo

// URL de l'API météo
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

// Récupérer la météo
fetch(url)
// fetch(url) : Cette méthode permet de faire une requête HTTP vers l'API météo et d'obtenir les données au format JSON.
  .then(response => response.json())  // Convertir la réponse en JSON
  .then(data => {
    // Extraire les données
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;

    // Afficher la météo sur la page
    document.getElementById("weather").innerHTML = `
      Température : ${temperature}°C <br>
      Description : ${description} <br>
      Humidité : ${humidity}%
    `;
  })
  .catch(error => {
    document.getElementById("weather").innerHTML = "Erreur lors de la récupération de la météo.";
    console.error(error);
  });
