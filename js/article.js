// Constantes
const path = 'https://api.kedufront.juniortaker.com/'
const imgPath = 'https://api.kedufront.juniortaker.com/item/picture/'

// recuperation des elements a modifier de l'article
let imgContainer = document.getElementById('img');
let nameContainer = document.getElementsByClassName('nom')[0];
let DescriptionContainer = document.getElementsByClassName('description')[0];
let fromContainer = document.getElementsByClassName('from')[0];
let PriceContainer = document.getElementsByClassName('prix')[0];
let btnPrice = document.getElementsByClassName('button')[0].attributes[0];
let btn = document.getElementById('buy-btn');

const id = window.location.search.substring(4);

// Requete pour recuperer les articles
axios.get(path + `item/${id}`)
    .then(function(response) {
        nameContainer.innerText = response.data.item.name
        DescriptionContainer.innerText = response.data.item.description
        fromContainer.innerText = response.data.item.createdIn
        PriceContainer.innerText = response.data.item.price + '€'
        btnPrice.value = 'Price: ' + response.data.item.price + '€'
        imgContainer.style.backgroundImage = `url('${imgPath + id}')`
        addToCart()
        btn.addEventListener('click', () => {
            addToCart();
        });
    })
    .catch(error => {
        console.log(error);
        DescriptionContainer.innerHTML = '<h4>Une erreur est survenue lors de la récupération des articles.</h4>';
    });

// gestion ajout au panier
function addToCart() {
    const strId = id.toString();
    let cart = localStorage.getItem('cart');
    if (cart === null) {
        cart = {};
    } else {
        cart = JSON.parse(cart);
    }
    try {
        cart[strId] += 1;
    } catch (error) {
        cart[strId] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}