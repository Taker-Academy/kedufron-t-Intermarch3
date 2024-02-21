// Constantes
const path = 'https://api.kedufront.juniortaker.com/'
const imgPath = 'https://api.kedufront.juniortaker.com/item/picture/'

let cart = JSON.parse(localStorage.getItem('cart'));
let cartContainer = document.getElementById('articles');
let form = document.getElementsByClassName('command-form')[0];

// verifier si le panier est vide
checkCart();

// afficher les elements du panier
Object.keys(cart).forEach((id) => {
    axios.get(path + `item/${id}`)
        .then(function(response) {
            let elem = response.data.item;
            let article = document.createElement('div');
            article.className = 'article';
            article.id = id;
            article.innerHTML = `
            <div class="img" style="background-image: url('${imgPath + id}')" alt="${elem.name}"></div>
            <h2>${elem.name}</h2>
            <p>Prix : ${elem.price}€</p>
            <div class="article-btns">
                <button class="article-del">-</button>
                <p class="nb-elem">${cart[id]}</p>
                <button class="article-add">+</button>
            </div>
                `;
            cartContainer.appendChild(article);
            article.addEventListener('click', (e) => {
                if (e.target.classList.contains('article-del')) {
                    changeCart(id, -1);
                } else if (e.target.classList.contains('article-add')) {
                    changeCart(id, 1);
                }
            })
        })
        .catch(error => {
            console.log(error);
        });
});

// changer la quantité d'un article
function changeCart(id, value) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[id] + value >= 1) {
        cart[id] += value;
        document.getElementById(id.toString()).children[3].children[1].innerText = cart[id].toString();
    } else {
        delete cart[id];
        document.getElementById(id).remove();
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    checkCart();
}

// verifier si le panier est vide
function checkCart() {
    let cart = localStorage.getItem('cart');
    if (cart === null || Object.keys(JSON.parse(cart)).length === 0) {
        cartContainer.innerHTML = '<h2>Votre panier est vide</h2>';
        cartContainer.style.justifyContent = 'start';
        form.style.display = 'none';
    }
}