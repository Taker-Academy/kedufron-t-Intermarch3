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
            card.setAttribute('id', article._id);
            card.innerHTML = `
            <div style="background-image: url('${imgPath + article._id}')" alt="${article.name}"></div>
            <h2>${article.name}</h2>
            <p>Prix : ${article.price}€</p>
            <button class="article-btn">Acheter</button>
            `;
            articlesContainer.appendChild(card);
        })
        setRedirection();
    })
    .catch(error => {
        console.log(error);
        articlesContainer.innerHTML = '<h4>Une erreur est survenue lors de la récupération des articles.</h4>';
    });

// gestion redirection vers la page de l'article
function setRedirection() {
    var articles = document.getElementsByClassName('article-card');

    for (let i = 0; i < articles.length; i++) {
        articles[i].lastElementChild.addEventListener('click', () => {
            window.location.href = 'article.html?id=' + articles[i].id;
        });
    }
}