// Constantes
const path = 'https://api.kedufront.juniortaker.com/'
const imgPath = 'https://api.kedufront.juniortaker.com/item/picture/'

// recuperation de l'element container
let imgContainer = document.getElementById('img');
let nameContainer = document.getElementsByClassName('nom')[0];
let DescriptionContainer = document.getElementsByClassName('description')[0];
let fromContainer = document.getElementsByClassName('from')[0];
let PriceContainer = document.getElementsByClassName('prix')[0];

const id = window.location.search.substring(4);

// Requete pour recuperer les articles
axios.get(path + `item/${id}`)
    .then(function(response) {
        nameContainer.innerText = response.data.item.name
        DescriptionContainer.innerText = response.data.item.description
        fromContainer.innerText = response.data.item.createdIn
        PriceContainer.innerText = response.data.item.price + '€'
        imgContainer.style.backgroundImage = `url('${imgPath + id}')`
    })
    .catch(error => {
        console.log(error);
        DescriptionContainer.innerHTML = '<h4>Une erreur est survenue lors de la récupération des articles.</h4>';
    });

