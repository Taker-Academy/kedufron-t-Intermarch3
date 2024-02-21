// Constantes
const path = 'https://api.kedufront.juniortaker.com/'
const imgPath = 'https://api.kedufront.juniortaker.com/item/picture/'

let cart = JSON.parse(localStorage.getItem('cart'));
let cartContainer = document.getElementById('articles');

// afficher les elements du panier
Object.keys(cart).forEach((id) => {
    axios.get(path + `item/${id}`)
        .then(function(response) {
            let elem = response.data.item;
            let article = document.createElement('div');
            article.className = 'article';
            article.innerHTML = `
            <div class="img" style="background-image: url('${imgPath + id}')" alt="${elem.name}"></div>
            <h2>${elem.name}</h2>
            <p>Prix : ${elem.price}€</p>
            <div class="article-btns">
                <button class="article-del">-</button>
                <p>${cart[id]}</p>
                <button class="article-add">+</button>
            </div>
                `;
            cartContainer.appendChild(article);
        })
        .catch(error => {
            console.log(error);
        });
});
