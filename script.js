const path = 'https://api.kedufront.juniortaker.com/'
const imgPath = 'https://api.kedufront.juniortaker.com/item/picture/'

const articlesContainer = document.getElementById('container');

axios.get(path + 'item/')
    .then(function(response) {
        response.data.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('article-card');
            card.innerHTML = `
            <div style="background-image: url('${imgPath + article._id}')" alt="${article.name}">
            <h2>${article.name}</h2>
            <p>Prix : ${article.price}€</p>
            `;
            articlesContainer.appendChild(card);
        })
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });