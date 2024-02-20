// Constantes
const path = 'https://api.kedufront.juniortaker.com/'
const imgPath = 'https://api.kedufront.juniortaker.com/item/picture/'

// recuperation de l'element container
const articlesContainer = document.getElementById('container');

// Requete pour recuperer les articles
axios.get(path + 'item/')
    .then(function(response) {
        response.data.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('article-card');
            card.innerHTML = `
            <div style="background-image: url('${imgPath + article._id}')" alt="${article.name}">
            <h2>${article.name}</h2>
            <p>Prix : ${article.price}€</p>
            <button class="article-btn">Acheter</button>
            `;
            articlesContainer.appendChild(card);
        })
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });