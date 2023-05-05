const header = document.querySelector("header");

function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleScroll);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})




async function getArticles(id) {
    let url = `https://6450a341e1f6f1bb229b7974.mockapi.io/api/v1/articles/${id}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getRelatedArticles() {
    let url = `https://6450a341e1f6f1bb229b7974.mockapi.io/api/v1/articles`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderArticles() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    let articles = await getArticles(articleId);
    let relatedArticle = await getRelatedArticles();
    let html = '';
    let listcard = '';

    console.log(articles);
    console.log(articles.description);

    let htmlSegment = `
            <section>
            <b>${articles.title}</b>
            <img src="${articles.image}" alt="1648201764673-1" border="0" id="hero-img">
            </section>
            <p>${articles.date}</p><br>
            <p>${articles.description}</p><br></div>
            `;
    html += htmlSegment;

    let i = 0
    relatedArticle.forEach((article, index) => {

        if (!(articleId == article.id) && i <= 2) {
            let htmlCard = `<a href="/deskripsi-artikel/berita.html?id=${article.id}">
            <div class="card-box">
                <img src="${article.image}" alt="Capture-1" border="0">
                ${article.date}
                <h2>${article.title}</h2>
            </div></a>`;
            listcard += htmlCard;
            i++
        }
        



    })

    let container = document.querySelector('main');
    container.innerHTML = html;

    let containerCard = document.querySelector('.row-card');
    containerCard.innerHTML = listcard;
}

renderArticles();